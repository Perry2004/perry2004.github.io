# Image Scheduler Service

This directory contains the automated image scheduling service that fetches and updates Pexels images for your portfolio website every 24 hours.

## Overview

The scheduler service runs independently from your main application and automatically:

- Crawls your Pexels featured uploads page
- Filters and processes the images
- Updates `/public/data/rolling-images.json` with fresh content
- Runs every 24 hours at 2 AM UTC

## Files Structure

```
scheduler/
├── fetch-images.sh         # Main orchestration script
├── Dockerfile             # Docker container for the scheduler
├── compose.yml            # Docker Compose for standalone scheduler
├── logs/                  # Log files directory
└── README.md             # This file
```

## Quick Start

### Option 1: Using the Management Script (Recommended)

```bash
# Start the scheduler service
./manage-scheduler.sh start

# Check status
./manage-scheduler.sh status

# View logs
./manage-scheduler.sh logs

# Run image fetch immediately (for testing)
./manage-scheduler.sh run-now

# Stop the service
./manage-scheduler.sh stop
```

### Option 2: Using the Deployment Script

```bash
# Start scheduler service
./deploy.sh --scheduler

# View scheduler logs
./deploy.sh --scheduler-logs

# Stop scheduler service
./deploy.sh --scheduler-stop
```

### Option 3: Direct Docker Compose

```bash
# Start standalone scheduler
docker compose -f compose.scheduler.yml up -d

# View logs
docker compose -f compose.scheduler.yml logs -f

# Stop scheduler
docker compose -f compose.scheduler.yml down
```

### Option 4: Integrated with Main Application

The scheduler is automatically included in production deployments:

```bash
# Production deployment includes scheduler
./deploy.sh --prod
```

For development, the scheduler is optional and can be enabled by uncommenting the service in `compose.yml`.

## Configuration

### Schedule

- **Default**: Every 24 hours at 2:00 AM UTC
- **Location**: Configured in `scheduler/Dockerfile` as a cron job
- **Timezone**: UTC (configurable via `TZ` environment variable)

### Resource Limits

- **Memory**: 512MB limit, 256MB reservation
- **CPU**: 0.5 CPU limit (for standalone deployment)

### Volumes

- `./public/data:/app/public/data` - Mounts the data directory for updating `rolling-images.json`
- `./scheduler/logs:/var/log` - Mounts logs directory for monitoring

## Monitoring

### Log Files

- **Container logs**: `docker compose -f compose.scheduler.yml logs`
- **Application logs**: `./scheduler/logs/fetch-images.log`
- **Cron logs**: Available through container logs

### Health Checks

The service includes health checks that verify:

- Log file exists
- Container is responsive
- Cron daemon is running

### Status Monitoring

```bash
# Check if service is running
docker compose -f compose.scheduler.yml ps

# View recent activity
./manage-scheduler.sh status

# Check last update time
ls -la ./public/data/rolling-images.json
```

## Manual Execution

To run the image fetch process manually (useful for testing):

```bash
# Method 1: Using management script
./manage-scheduler.sh run-now

# Method 2: Direct execution
./scheduler/fetch-images.sh

# Method 3: Inside running container
docker compose -f compose.scheduler.yml exec image-scheduler /app/scheduler/fetch-images.sh
```

## Troubleshooting

### Common Issues

1. **No images being fetched**

   - Check if the Pexels page is accessible
   - Verify network connectivity from container
   - Check logs for specific error messages

2. **Permission errors**

   - Ensure `fetch-images.sh` is executable: `chmod +x scheduler/fetch-images.sh`
   - Check file permissions on `public/data/` directory

3. **Container fails to start**
   - Check Docker daemon is running
   - Verify all required files exist
   - Check resource availability (memory/disk space)

### Log Analysis

```bash
# View recent logs
./manage-scheduler.sh logs

# Follow live logs
./manage-scheduler.sh logs-live

# Check specific timeframe
docker compose -f compose.scheduler.yml logs --since="1h" --until="30m"
```

### Debugging Steps

1. **Test script manually**:

   ```bash
   ./scheduler/fetch-images.sh
   ```

2. **Check dependencies**:

   ```bash
   cd scripts
   npm install
   npm run build
   ```

3. **Verify Puppeteer setup**:

   ```bash
   docker compose -f compose.scheduler.yml exec image-scheduler chromium --version
   ```

4. **Check cron job**:
   ```bash
   docker compose -f compose.scheduler.yml exec image-scheduler crontab -l
   ```

## Customization

### Changing Schedule

Edit the cron expression in `scheduler/Dockerfile`:

```dockerfile
# Current: Every day at 2 AM UTC
RUN echo '0 2 * * * /app/scheduler/cron-job.sh' > /etc/crontabs/root

# Example: Every 12 hours
RUN echo '0 */12 * * * /app/scheduler/cron-job.sh' > /etc/crontabs/root

# Example: Every Monday at 3 AM
RUN echo '0 3 * * 1 /app/scheduler/cron-job.sh' > /etc/crontabs/root
```

### Changing Timezone

Set the `TZ` environment variable in your compose file:

```yaml
environment:
  - TZ=America/New_York
```

### Resource Limits

Adjust resource limits in `compose.scheduler.yml`:

```yaml
deploy:
  resources:
    limits:
      memory: 1G # Increase memory limit
      cpus: "1.0" # Increase CPU limit
```

## Integration Notes

- The scheduler updates `public/data/rolling-images.json` which is used by the `RollingImages` component
- Changes take effect immediately as the application reads the file dynamically
- The service runs independently and won't affect your main application
- In production, the scheduler runs alongside your main application
- Logs are persisted and can be monitored externally

## Security

- Container runs with minimal privileges
- Only necessary dependencies are installed
- Network access is limited to HTTPS requests to Pexels
- No sensitive data is stored or transmitted
- Logs don't contain sensitive information

For questions or issues, check the logs first, then refer to the main project documentation.
