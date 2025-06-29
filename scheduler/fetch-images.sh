#!/bin/bash

# fetch-images.sh - Script to fetch and process Pexels images
# This script runs the TypeScript scripts to crawl Pexels and update rolling-images.json

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SCRIPTS_DIR="$WORKSPACE_ROOT/scripts"

echo "🚀 Starting image fetch process at $(date)"
echo "📂 Working directory: $SCRIPTS_DIR"

# Change to scripts directory
cd "$SCRIPTS_DIR"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build TypeScript files
echo "🔨 Building TypeScript files..."
npm run build

# Run the image fetching process
echo "🔍 Fetching images from Pexels..."
npm run start

echo "✅ Image fetch process completed successfully at $(date)"

# Optional: Clean up build artifacts to save space
echo "🧹 Cleaning up build artifacts..."
rm -rf dist

echo "🎉 All done! Updated rolling-images.json with fresh content."