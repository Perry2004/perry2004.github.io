#!/bin/bash
if [ -f "public/data/rolling-images.json" ]; then
    echo "rolling-images.json already exists, skipping..."
    exit 0
fi
cd scripts || exit
uv sync
uv run python main.py "../public/data/rolling-images.json"
