#!/bin/bash

# Configuration
BACKEND_DIR="$HOME/webapp/sesa0001/server_backend"
PORT=45600

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Kill any process using our port
kill_port() {
    echo -e "${YELLOW}Killing any process on port ${PORT}...${NC}"
    
    # Try multiple ways to ensure the port is freed
    fuser -k ${PORT}/tcp 2>/dev/null
    pkill -f "node.*${PORT}" 2>/dev/null
    
    # Wait to ensure processes are killed
    sleep 2
    
    # Verify port is free
    if fuser ${PORT}/tcp >/dev/null 2>&1; then
        echo -e "${RED}Failed to free port ${PORT}${NC}"
        exit 1
    fi
}

# Start the backend server
start_server() {
    cd "$BACKEND_DIR" || exit
    
    # Clean and install
    echo -e "${GREEN}Setting up server...${NC}"
    rm -rf dist/
    npm install
    
    # Build TypeScript
    echo -e "${GREEN}Building...${NC}"
    npm run build
    
    # Start with production environment
    echo -e "${GREEN}Starting production server...${NC}"
    NODE_ENV=production node dist/server.js &
    
    echo -e "${GREEN}Server started on port ${PORT}${NC}"
}

case "$1" in
    start)
        kill_port
        start_server
        ;;
    stop)
        kill_port
        ;;
    restart)
        kill_port
        start_server
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac

exit 0 