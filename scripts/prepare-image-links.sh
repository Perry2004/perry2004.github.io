#!/bin/bash
if [ -f "public/data/rolling-images.json" ]; then
    echo "rolling-images.json already exists, skipping..."
    exit 0
fi
cd scripts || exit
npm install
npm run build
npx playwright install chromium
node dist/main.js "../public/data/rolling-images.json"
