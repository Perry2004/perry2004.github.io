#!/bin/bash
if [ -f "public/data/rolling-images.json" ]; then
    echo "rolling-images.json already exists, skipping..."
    exit 0
fi
cd scripts || exit
yarn install
yarn build
node dist/main.js "../public/data/rolling-images.json"
