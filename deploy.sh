#!/bin/bash

# Auto-deploy script for perry2004.github.io
# Usage: ./deploy.sh [--dev|--prod] [--down]
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
        -h|--help)
            echo -e "${CYAN}${BOLD}▶ Docker Compose Deployment Manager${NC}"
            echo ""
            echo -e "${WHITE}Usage:${NC} $0 [--dev|--prod] [--down|--logs] | $0 --build-push"
            echo ""
            echo -e "${YELLOW}⚙ Configuration Options:${NC}"
            echo -e "  ${GREEN}--dev${NC}     ⚡ Deploy development environment (localhost, Caddyfile.dev & compose.yml)"
            echo -e "  ${BLUE}--prod${NC}    🌐 Deploy production environment (perryz.net, Caddyfile.prod & compose.prod.yml)"
            echo -e "  ${RED}--down${NC}    ⏹ Stop containers and remove volumes"
            echo -e "  ${CYAN}--logs${NC}    📋 View live container logs"
            echo -e "  ${PURPLE}--build-push${NC} 🚀 Build and push latest image to registry (standalone)"
            echo -e "  ${PURPLE}-h, --help${NC} ℹ Display usage information"
            echo ""
            echo -e "${YELLOW}📋 Command Examples:${NC}"
            echo -e "  ${GREEN}yarn deploy:dev${NC}         # Initialize development deployment"
            echo -e "  ${BLUE}yarn deploy:prod${NC}        # Initialize production deployment"
            echo -e "  ${RED}yarn deploy:dev:down${NC}    # Terminate development deployment"
            echo -e "  ${RED}yarn deploy:prod:down${NC}   # Terminate production deployment"
            echo -e "  ${CYAN}./deploy.sh --dev --logs${NC}   # View development logs"
            echo -e "  ${CYAN}./deploy.sh --prod --logs${NC}  # View production logs"
            echo -e "  ${PURPLE}./deploy.sh --build-push${NC}    # Build and push latest image"
            exit 0
            ;;
        *)
            echo -e "${RED}✗ Invalid option: ${WHITE}$1${NC}"
            echo -e "${YELLOW}ℹ Use ${WHITE}-h${NC} or ${WHITE}--help${NC} for usage information"
            exit 1
            ;;
    esac
done

# Validate mode (not required for build-push action)
if [[ -z "$MODE" && "$ACTION" != "build-push" ]]; then
    echo -e "${RED}✗ Error: Deployment mode required. Specify ${GREEN}--dev${NC} or ${BLUE}--prod${NC}"
    echo -e "${YELLOW}ℹ Use ${WHITE}-h${NC} or ${WHITE}--help${NC} for usage information"
    exit 1
fi

# Set configuration based on mode (only needed for non-build-push actions)
if [[ "$ACTION" != "build-push" ]]; then
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

echo -e "${CYAN}════════════════════════════════════════════${NC}"
echo -e "${BOLD}▶ DOCKER COMPOSE DEPLOYMENT WITH CADDY${NC}"
echo -e "${CYAN}════════════════════════════════════════════${NC}"

if [[ "$ACTION" == "build-push" ]]; then
    echo -e "${PURPLE}🚀 Standalone Image Build & Push${NC}"
elif [[ "$MODE" == "dev" ]]; then
    echo -e "${GREEN}⚡ Environment: ${WHITE}Development${NC} ${GREEN}(Local Testing)${NC}"
elif [[ "$MODE" == "prod" ]]; then
    echo -e "${BLUE}🌐 Environment: ${WHITE}Production${NC} ${BLUE}(Live Deployment)${NC}"
fi

if [[ "$ACTION" != "build-push" ]]; then
    echo -e "${PURPLE}📄 Caddy Config: ${WHITE}$CADDY_FILE${NC}"
    echo -e "${YELLOW}📋 Compose File: ${WHITE}$COMPOSE_FILE${NC}"
    echo -e "${CYAN}🔗 Target Domain: ${WHITE}$DOMAIN${NC}"
fi
echo -e "${CYAN}════════════════════════════════════════════${NC}"
echo ""

if [[ "$ACTION" == "down" ]]; then
    echo -e "${RED}⏹ TERMINATING ${WHITE}$MODE${NC} ${RED}DEPLOYMENT${NC}"
    echo -e "${YELLOW}🔄 Stopping containers and removing volumes...${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" down -v
    echo -e "${GREEN}✓ ${WHITE}$MODE${NC} ${GREEN}deployment terminated successfully${NC}"
    echo -e "${PURPLE}⏸ All containers stopped and volumes removed${NC}"
elif [[ "$ACTION" == "logs" ]]; then
    echo -e "${CYAN}📋 VIEWING ${WHITE}$MODE${NC} ${CYAN}CONTAINER LOGS${NC}"
    echo -e "${YELLOW}🔍 Streaming live logs from containers...${NC}"
    echo -e "${PURPLE}💡 Press Ctrl+C to exit log stream${NC}"
    echo ""
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" logs -f
elif [[ "$ACTION" == "build-push" ]]; then
    echo -e "${PURPLE}🚀 BUILDING AND PUSHING LATEST IMAGE${NC}"
    echo -e "${CYAN}⚙ Building Docker image from local source...${NC}"
    echo ""
    
    # Use development compose file for building
    BUILD_COMPOSE_FILE="compose.yml"
    
    echo -e "${YELLOW}🔨 Building image with Docker Compose...${NC}"
    docker compose -f "$BUILD_COMPOSE_FILE" build
    
    echo -e "${BLUE}🏷 Tagging image for registry...${NC}"
    docker tag perry2004githubio-app:latest perry2004/perryz.net:latest
    
    echo -e "${GREEN}📤 Pushing image to Docker registry...${NC}"
    docker push perry2004/perryz.net:latest
    
    echo ""
    echo -e "${GREEN}✓ IMAGE BUILD AND PUSH COMPLETED${NC}"
    echo -e "${PURPLE}🚀 Image successfully pushed to registry${NC}"
    echo -e "${CYAN}🏷 Tagged as: ${WHITE}perry2004/perryz.net:latest${NC}"
    echo ""
else
    echo -e "${GREEN}▶ INITIALIZING ${WHITE}$MODE${NC} ${GREEN}DEPLOYMENT${NC}"
    echo -e "${CYAN}⚙ Configuring deployment environment...${NC}"
    echo ""
    
    # Check if Caddy config exists
    if [[ ! -f "$CADDY_FILE" ]]; then
        echo -e "${RED}✗ ERROR: Caddy configuration file ${WHITE}$CADDY_FILE${NC} ${RED}not found${NC}"
        echo -e "${YELLOW}ℹ Verify configuration file exists before proceeding${NC}"
        exit 1
    fi
    
    echo -e "${BLUE}✓ Caddy configuration validated${NC}"
    
    # Stop any existing deployment
    echo -e "${YELLOW}🔄 Cleaning existing deployment state...${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" down -v 2>/dev/null || true
    echo -e "${GREEN}✓ Environment prepared${NC}"
    echo ""
    
    # Pull latest image for production or build for dev
    if [[ "$MODE" == "prod" ]]; then
        echo -e "${BLUE}📥 PULLING PRODUCTION IMAGE${NC}"
        echo -e "${CYAN}🔄 Fetching latest image from registry...${NC}"
        docker pull perry2004/perryz.net:latest
        echo -e "${GREEN}▶ Starting production containers...${NC}"
        CADDY_CONFIG="$CADDY_FILE" docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" up -d
    else
        echo -e "${GREEN}🔨 BUILDING DEVELOPMENT IMAGE${NC}"
        echo -e "${YELLOW}⚙ Compiling local source code...${NC}"
        CADDY_CONFIG="$CADDY_FILE" docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" up --build -d
    fi
    
    echo ""
    echo -e "${GREEN}✓ ${WHITE}$MODE${NC} ${GREEN}DEPLOYMENT COMPLETED${NC}"
    echo -e "${CYAN}🌐 Application successfully deployed${NC}"
    echo ""
    
    if [[ "$MODE" == "dev" ]]; then
        echo -e "${GREEN}🔗 Development Server: ${WHITE}https://$DOMAIN${NC}"
        echo -e "${YELLOW}⚡ Local development environment ready${NC}"
    else
        echo -e "${BLUE}🌐 Production Site: ${WHITE}https://$DOMAIN${NC}"
        echo -e "${CYAN}📡 Application deployed to production environment${NC}"
    fi
    echo ""
    
    echo -e "${PURPLE}📊 CONTAINER STATUS${NC}"
    docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" ps
    echo ""
    echo -e "${CYAN}🛠 OPERATIONAL COMMANDS${NC}"
    echo -e "${WHITE}📋 View logs:${NC} ./deploy.sh --$MODE --logs or yarn deploy:$MODE:logs"
    echo -e "${WHITE}⏹ Stop deployment:${NC} ./deploy.sh --$MODE --down or yarn deploy:$MODE:down"
    echo -e "${WHITE}🔄 Restart deployment:${NC} ./deploy.sh --$MODE --down && ./deploy.sh --$MODE"
    echo ""
    echo -e "${GREEN}✓ Deployment operations completed${NC}"
fi
