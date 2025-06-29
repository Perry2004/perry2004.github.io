#!/bin/bash

# Auto-deployment script for perry2004.github.io
# Usage: ./deploy.sh [--dev|--prod] [--down|--logs] | ./deploy.sh --build-push
# 
# This script manages Docker Compose deployments with Caddy web server
# for both development and production environments.

set -e

# Color definitions for beautiful output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Default values
MODE=""
ACTION="up"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dev)
            MODE="dev"
            shift
            ;;
        --prod)
            MODE="prod"
            shift
            ;;
        --down)
            ACTION="down"
            shift
            ;;
        --logs)
            ACTION="logs"
            shift
            ;;
        --build-push)
            ACTION="build-push"
            shift
            ;;
        --scheduler)
            ACTION="scheduler"
            shift
            ;;
        --scheduler-logs)
            ACTION="scheduler-logs"
            shift
            ;;
        --scheduler-stop)
            ACTION="scheduler-stop"
            shift
            ;;
        -h|--help)
            echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
            echo -e "${BOLD}${WHITE}🚀 Docker Compose Deployment Manager${NC}"
            echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
            echo ""
            echo -e "${WHITE}${BOLD}Usage:${NC} ${YELLOW}$0${NC} ${CYAN}[--dev|--prod]${NC} ${PURPLE}[--down|--logs]${NC} ${YELLOW}|${NC} ${YELLOW}$0${NC} ${PURPLE}--build-push${NC}"
            echo ""
            echo -e "${CYAN}${BOLD}⚙️  Configuration Options:${NC}"
            echo -e "  ${GREEN}${BOLD}--dev${NC}         ⚡ Deploy ${GREEN}development${NC} environment ${WHITE}(localhost)${NC}"
            echo -e "  ${BLUE}${BOLD}--prod${NC}        🌐 Deploy ${BLUE}production${NC} environment ${WHITE}(perryz.net)${NC}"
            echo -e "  ${RED}${BOLD}--down${NC}        ⏹️  Stop containers and remove volumes"
            echo -e "  ${CYAN}${BOLD}--logs${NC}        📋 View live container logs"
            echo -e "  ${PURPLE}${BOLD}--build-push${NC}  🚀 Build and push latest image to registry"
            echo -e "  ${CYAN}${BOLD}--scheduler${NC}      🕒 Start the image scheduler service"
            echo -e "  ${CYAN}${BOLD}--scheduler-logs${NC} 📋 View scheduler logs"
            echo -e "  ${RED}${BOLD}--scheduler-stop${NC} ⏹️  Stop the scheduler service"
            echo -e "  ${WHITE}${BOLD}-h, --help${NC}    ℹ️  Display this usage information"
            echo ""
            echo -e "${YELLOW}${BOLD}📋 Command Examples:${NC}"
            echo -e "  ${GREEN}${BOLD}yarn deploy:dev${NC} or ${GREEN}${BOLD}./deploy.sh --dev${NC}\t\t\t${WHITE}#${NC} ${GREEN}Initialize development deployment${NC}"
            echo -e "  ${BLUE}${BOLD}yarn deploy:prod${NC} or ${BLUE}${BOLD}./deploy.sh --prod${NC}\t\t${WHITE}#${NC} ${BLUE}Initialize production deployment${NC}"
            echo -e "  ${RED}${BOLD}yarn deploy:dev:down${NC} or ${RED}${BOLD}./deploy.sh --dev --down${NC}\t${WHITE}#${NC} ${RED}Terminate development deployment${NC}"
            echo -e "  ${RED}${BOLD}yarn deploy:prod:down${NC} or ${RED}${BOLD}./deploy.sh --prod --down${NC}\t${WHITE}#${NC} ${RED}Terminate production deployment${NC}"
            echo -e "  ${CYAN}${BOLD}yarn deploy:dev:logs${NC} or ${CYAN}${BOLD}./deploy.sh --dev --logs${NC}\t${WHITE}#${NC} ${CYAN}View development logs${NC}"
            echo -e "  ${CYAN}${BOLD}yarn deploy:prod:logs${NC} or ${CYAN}${BOLD}./deploy.sh --prod --logs${NC}\t${WHITE}#${NC} ${CYAN}View production logs${NC}"
            echo -e "  ${PURPLE}${BOLD}yarn deploy:build-push${NC} or ${PURPLE}${BOLD}./deploy.sh --build-push${NC}\t${WHITE}#${NC} ${PURPLE}Build and push latest image${NC}"
            echo -e "  ${CYAN}${BOLD}./deploy.sh --scheduler${NC}\t\t\t\t${WHITE}#${NC} ${CYAN}Start image scheduler service${NC}"
            echo -e "  ${CYAN}${BOLD}./deploy.sh --scheduler-logs${NC}\t\t\t\t${WHITE}#${NC} ${CYAN}View scheduler logs${NC}"
            echo -e "  ${RED}${BOLD}./deploy.sh --scheduler-stop${NC}\t\t\t\t${WHITE}#${NC} ${RED}Stop scheduler service${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ ${BOLD}Invalid option:${NC} ${WHITE}${BOLD}$1${NC}"
            echo -e "${YELLOW}💡 Use ${WHITE}${BOLD}-h${NC} or ${WHITE}${BOLD}--help${NC} for usage information"
            exit 1
            ;;
    esac
done

# Validate mode (not required for build-push action or scheduler actions)
if [[ -z "$MODE" && "$ACTION" != "build-push" && "$ACTION" != "scheduler" && "$ACTION" != "scheduler-logs" && "$ACTION" != "scheduler-stop" ]]; then
    echo -e "${RED}❌ ${BOLD}Error:${NC} Deployment mode required. Specify ${GREEN}${BOLD}--dev${NC} or ${BLUE}${BOLD}--prod${NC}"
    echo -e "${YELLOW}💡 Use ${WHITE}${BOLD}-h${NC} or ${WHITE}${BOLD}--help${NC} for usage information"
    exit 1
fi

# Set configuration based on mode (only needed for non-build-push and non-scheduler actions)
if [[ "$ACTION" != "build-push" && "$ACTION" != "scheduler" && "$ACTION" != "scheduler-logs" && "$ACTION" != "scheduler-stop" ]]; then
    if [[ "$MODE" == "dev" ]]; then
        CADDY_FILE="./Caddyfile.dev"
        COMPOSE_PROJECT="perry-dev"
        COMPOSE_FILE="compose.yml"
        DOMAIN="localhost"
    elif [[ "$MODE" == "prod" ]]; then
        CADDY_FILE="./Caddyfile.prod"
        COMPOSE_PROJECT="perry-prod"
        COMPOSE_FILE="compose.prod.yml"
        DOMAIN="perryz.net"
    fi
fi

echo -e "${CYAN}═══════════════════════════════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}${WHITE}🚀 DOCKER COMPOSE DEPLOYMENT WITH CADDY${NC}"
echo -e "${CYAN}═══════════════════════════════════════════════════════════════════════════════${NC}"

if [[ "$ACTION" == "build-push" ]]; then
    echo -e "${PURPLE}${BOLD}🔨 Mode:${NC} ${WHITE}Standalone Image Build & Push${NC}"
elif [[ "$MODE" == "dev" ]]; then
    echo -e "${GREEN}${BOLD}⚡ Environment:${NC} ${WHITE}Development${NC} ${GREEN}(Local Testing)${NC}"
elif [[ "$MODE" == "prod" ]]; then
    echo -e "${BLUE}${BOLD}🌐 Environment:${NC} ${WHITE}Production${NC} ${BLUE}(Live Deployment)${NC}"
fi

if [[ "$ACTION" != "build-push" ]]; then
    echo -e "${PURPLE}${BOLD}📄 Caddy Config:${NC} ${WHITE}$CADDY_FILE${NC}"
    echo -e "${YELLOW}${BOLD}📋 Compose File:${NC} ${WHITE}$COMPOSE_FILE${NC}"
    echo -e "${CYAN}${BOLD}🔗 Target Domain:${NC} ${WHITE}$DOMAIN${NC}"
fi
echo -e "${CYAN}═══════════════════════════════════════════════════════════════════════════════${NC}"
echo ""

if [[ "$ACTION" == "down" ]]; then
    echo -e "${RED}${BOLD}⏹️  TERMINATING ${WHITE}$MODE${NC} ${RED}${BOLD}DEPLOYMENT${NC}"
    echo -e "${YELLOW}🔄 Stopping containers and removing volumes...${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" down -v
    echo ""
    echo -e "${GREEN}✅ ${WHITE}${BOLD}$MODE${NC} ${GREEN}deployment terminated successfully${NC}"
    echo -e "${PURPLE}💤 All containers stopped and volumes removed${NC}"
elif [[ "$ACTION" == "logs" ]]; then
    echo -e "${CYAN}${BOLD}📋 VIEWING ${WHITE}$MODE${NC} ${CYAN}${BOLD}CONTAINER LOGS${NC}"
    echo -e "${YELLOW}🔍 Streaming live logs from containers...${NC}"
    echo -e "${PURPLE}💡 Press ${WHITE}${BOLD}Ctrl+C${NC} ${PURPLE}to exit log stream${NC}"
    echo ""
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" logs -f
elif [[ "$ACTION" == "build-push" ]]; then
    echo -e "${PURPLE}${BOLD}🚀 BUILDING AND PUSHING LATEST IMAGE${NC}"
    echo -e "${CYAN}⚙️  Building Docker image from local source...${NC}"
    echo ""
    
    # Use development compose file for building
    BUILD_COMPOSE_FILE="compose.yml"
    
    echo -e "${YELLOW}🔨 Building image with Docker Compose...${NC}"
    docker compose -f "$BUILD_COMPOSE_FILE" build
    
    echo -e "${BLUE}🏷️  Tagging image for registry...${NC}"
    docker tag perry2004githubio-app:latest perry2004/perryz.net:latest
    
    echo -e "${GREEN}📤 Pushing image to Docker registry...${NC}"
    docker push perry2004/perryz.net:latest
    
    echo ""
    echo -e "${GREEN}✅ ${BOLD}IMAGE BUILD AND PUSH COMPLETED${NC}"
    echo -e "${PURPLE}🚀 Image successfully pushed to registry${NC}"
    echo -e "${CYAN}🏷️  Tagged as: ${WHITE}${BOLD}perry2004/perryz.net:latest${NC}"
    echo ""
else
    echo -e "${GREEN}${BOLD}▶️  INITIALIZING ${WHITE}$MODE${NC} ${GREEN}${BOLD}DEPLOYMENT${NC}"
    echo -e "${CYAN}⚙️  Configuring deployment environment...${NC}"
    echo ""
    
    # Check if Caddy config exists
    if [[ ! -f "$CADDY_FILE" ]]; then
        echo -e "${RED}❌ ${BOLD}ERROR:${NC} Caddy configuration file ${WHITE}${BOLD}$CADDY_FILE${NC} ${RED}not found${NC}"
        echo -e "${YELLOW}💡 Verify configuration file exists before proceeding${NC}"
        exit 1
    fi
    
    echo -e "${BLUE}✅ Caddy configuration validated${NC}"
    
    # Stop any existing deployment
    echo -e "${YELLOW}🔄 Cleaning existing deployment state...${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" down -v 2>/dev/null || true
    echo -e "${GREEN}✅ Environment prepared${NC}"
    echo ""
    
    # Pull latest image for production or build for development
    if [[ "$MODE" == "prod" ]]; then
        echo -e "${BLUE}${BOLD}📥 PULLING PRODUCTION IMAGES${NC}"
        echo -e "${CYAN}🔄 Fetching latest images from registry...${NC}"
        docker pull perry2004/perryz.net:latest
        docker pull perry2004/perryz-scheduler:latest
        echo -e "${GREEN}▶️  Starting production containers...${NC}"
        CADDY_CONFIG="$CADDY_FILE" docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" up -d
    else
        echo -e "${GREEN}${BOLD}🔨 BUILDING DEVELOPMENT IMAGE${NC}"
        echo -e "${YELLOW}⚙️  Compiling local source code...${NC}"
        CADDY_CONFIG="$CADDY_FILE" docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" up --build -d
    fi
    
    echo ""
    echo -e "${GREEN}✅ ${BOLD}${WHITE}$MODE${NC} ${GREEN}${BOLD}DEPLOYMENT COMPLETED${NC}"
    echo -e "${CYAN}🌐 Application successfully deployed${NC}"
    echo ""
    
    if [[ "$MODE" == "dev" ]]; then
        echo -e "${GREEN}${BOLD}🔗 Development Server:${NC} ${WHITE}${BOLD}https://$DOMAIN${NC}"
        echo -e "${YELLOW}⚡ Local development environment ready${NC}"
    else
        echo -e "${BLUE}${BOLD}🌐 Production Site:${NC} ${WHITE}${BOLD}https://$DOMAIN${NC}"
        echo -e "${CYAN}📡 Application deployed to production environment${NC}"
    fi
    echo ""
    
    echo -e "${PURPLE}${BOLD}📊 CONTAINER STATUS${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" ps
    echo ""
    echo -e "${CYAN}${BOLD}🛠️  OPERATIONAL COMMANDS${NC}"
    echo -e "${WHITE}📋 View logs:${NC} ${CYAN}${BOLD}yarn deploy:$MODE:logs${NC} or ${CYAN}${BOLD}./deploy.sh --$MODE --logs${NC}"
    echo -e "${WHITE}⏹️  Stop deployment:${NC} ${RED}${BOLD}yarn deploy:$MODE:down${NC} or ${RED}${BOLD}./deploy.sh --$MODE --down${NC}"
    echo -e "${WHITE}🔄 Restart deployment:${NC} ${YELLOW}${BOLD}yarn deploy:$MODE:down && yarn deploy:$MODE${NC}"
    echo -e "${WHITE}🔄 Restart deployment:${NC} ${YELLOW}${BOLD}./deploy.sh --$MODE --down && ./deploy.sh --$MODE${NC}"
    echo ""
    echo -e "${GREEN}✅ ${BOLD}Deployment operations completed${NC}"
elif [[ "$ACTION" == "scheduler" ]]; then
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${BOLD}${WHITE}🕒 Starting Image Scheduler Service${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${YELLOW}📅 Schedule: Updates rolling-images.json every 24 hours${NC}"
    echo -e "${CYAN}🔍 Source: Pexels featured uploads${NC}"
    echo ""
    
    echo -e "${BLUE}📥 Pulling latest scheduler image...${NC}"
    docker pull perry2004/perryz-scheduler:latest
    
    docker compose -f "compose.scheduler.yml" up -d
    
    echo ""
    echo -e "${GREEN}✅ ${BOLD}Image scheduler service started${NC}"
    echo -e "${CYAN}📊 Container status:${NC}"
    docker compose -f "compose.scheduler.yml" ps
    echo ""
    echo -e "${YELLOW}📋 To view logs: ${WHITE}${BOLD}./deploy.sh --scheduler-logs${NC}"
    echo -e "${RED}⏹️  To stop: ${WHITE}${BOLD}./deploy.sh --scheduler-stop${NC}"

elif [[ "$ACTION" == "scheduler-logs" ]]; then
    echo -e "${CYAN}📋 ${BOLD}Image Scheduler Logs${NC}"
    echo -e "${WHITE}Press Ctrl+C to exit${NC}"
    echo ""
    docker compose -f "compose.scheduler.yml" logs -f

elif [[ "$ACTION" == "scheduler-stop" ]]; then
    echo -e "${RED}⏹️  ${BOLD}Stopping Image Scheduler Service${NC}"
    echo ""
    docker compose -f "compose.scheduler.yml" down
    echo ""
    echo -e "${GREEN}✅ ${BOLD}Image scheduler service stopped${NC}"
fi
