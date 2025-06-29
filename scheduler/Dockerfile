# Dockerfile for the image scheduler service
FROM node:22-alpine

# Install necessary system dependencies for Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    && rm -rf /var/cache/apk/*

# Install cron
RUN apk add --no-cache dcron

# Set up Puppeteer to use the installed Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

# Copy the entire workspace to have access to both scripts and public directories
COPY . .

# Install dependencies for the scripts
WORKDIR /app/scripts
RUN yarn install

# Make the fetch script executable
RUN chmod +x /app/scheduler/fetch-images.sh

# Create a simple cron script
RUN echo '#!/bin/sh' > /app/scheduler/cron-job.sh && \
    echo 'cd /app && ./scheduler/fetch-images.sh >> /var/log/fetch-images.log 2>&1' >> /app/scheduler/cron-job.sh && \
    chmod +x /app/scheduler/cron-job.sh

# Set up cron job to run every 24 hours (at 2 AM)
RUN echo '0 2 * * * /app/scheduler/cron-job.sh' > /etc/crontabs/root

# Create log file
RUN touch /var/log/fetch-images.log

# Run initial fetch on container start, then start cron
CMD ["/bin/sh", "-c", "/app/scheduler/fetch-images.sh && crond -f -d 8"]
