#!/bin/bash
set -e
docker buildx build --platform linux/arm64 --provenance=false -f Dockerfile.script -t lambda-script:test .
docker run --platform linux/arm64 -v ~/.aws-lambda-rie:/aws-lambda -p 9000:8080 \
    --entrypoint /aws-lambda/aws-lambda-rie \
    lambda-script:test \
        /usr/local/bin/npx aws-lambda-ric dist/lambda-handler.handler