#!/bin/bash
set -e
docker buildx build --platform linux/amd64 --provenance=false -f Dockerfile.script -t pwp/pexels-image-scraper-lambda .
# docker run --platform linux/amd64 -v ~/.aws-lambda-rie:/aws-lambda -p 9000:8080 \
#     --entrypoint /aws-lambda/aws-lambda-rie \
#     lambda-script:test \
#         /usr/local/bin/npx aws-lambda-ric dist/lambda-handler.handler

docker tag pwp/pexels-image-scraper-lambda:latest 279892746640.dkr.ecr.us-west-2.amazonaws.com/pwp/pexels-image-scraper-lambda:latest

docker push 279892746640.dkr.ecr.us-west-2.amazonaws.com/pwp/pexels-image-scraper-lambda:latest