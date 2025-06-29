#!/bin/bash

# manage-scheduler.sh - Management script for the image scheduler service
# This script helps you manage the image scheduler service

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Functions
show_help() {
    echo "Image Scheduler Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start the scheduler service"
    echo "  stop        Stop the scheduler service"
    echo "  restart     Restart the scheduler service"
    echo "  status      Show status of the scheduler service"
    echo "  logs        Show recent logs from the scheduler"
    echo "  logs-live   Follow live logs from the scheduler"
    echo "  run-now     Run the image fetch process immediately"
    echo "  cleanup     Clean up scheduler logs and temporary files"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start           # Start the scheduler"
    echo "  $0 logs-live       # Watch live logs"
    echo "  $0 run-now         # Fetch images immediately"
}

start_scheduler() {
    echo "🚀 Starting image scheduler service..."
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml up -d
    echo "✅ Scheduler service started"
}

stop_scheduler() {
    echo "🛑 Stopping image scheduler service..."
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml down
    echo "✅ Scheduler service stopped"
}

restart_scheduler() {
    echo "🔄 Restarting image scheduler service..."
    stop_scheduler
    start_scheduler
}

show_status() {
    echo "📊 Scheduler service status:"
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml ps
    echo ""
    echo "Recent activity:"
    if [ -f "$SCRIPT_DIR/scheduler/logs/fetch-images.log" ]; then
        tail -n 10 "$SCRIPT_DIR/scheduler/logs/fetch-images.log"
    else
        echo "No logs found yet."
    fi
}

show_logs() {
    echo "📋 Recent scheduler logs:"
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml logs --tail=50
}

follow_logs() {
    echo "📋 Following live scheduler logs (Ctrl+C to exit):"
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml logs -f
}

run_now() {
    echo "⚡ Running image fetch process immediately..."
    cd "$SCRIPT_DIR"
    ./scheduler/fetch-images.sh
    echo "✅ Image fetch completed"
}

cleanup() {
    echo "🧹 Cleaning up scheduler files..."
    rm -f "$SCRIPT_DIR/scheduler/logs/fetch-images.log"
    cd "$SCRIPT_DIR"
    docker compose -f compose.scheduler.yml down --volumes --remove-orphans
    docker system prune -f
    echo "✅ Cleanup completed"
}

# Main script logic
case "${1:-help}" in
    start)
        start_scheduler
        ;;
    stop)
        stop_scheduler
        ;;
    restart)
        restart_scheduler
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    logs-live)
        follow_logs
        ;;
    run-now)
        run_now
        ;;
    cleanup)
        cleanup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
