# Image Scheduler Integration - Setup Complete

### 1. **Scheduler Service**

- **Location**: `/scheduler/` directory
- **Main Script**: `fetch-images.sh` - Orchestrates the entire process
- **Docker Container**: Custom Dockerfile with Alpine Linux + Node.js + Chromium
- **Cron Job**: Runs every 24 hours at 2:00 AM UTC
- **Auto-update**: Updates `/public/data/rolling-images.json` automatically

### 2. **Management Tools**

- **Management Script**: `./manage-scheduler.sh` - Easy control interface
- **Package.json Scripts**: `npm run scheduler:*` commands
- **Deploy Script Integration**: `./deploy.sh --scheduler` commands

### 3. **Docker Integration**

- **Standalone Compose**: `compose.scheduler.yml` for independent operation
- **Production Integration**: Automatically included in `compose.prod.yml`
- **Development Option**: Available in `compose.yml` (commented by default)

## 🚀 Usage Options

### Quick Start (Recommended)

```bash
# Start the scheduler service
./manage-scheduler.sh start

# Check status and recent activity
./manage-scheduler.sh status

# View live logs
./manage-scheduler.sh logs-live

# Run immediately for testing
./manage-scheduler.sh run-now
```

### Using NPM Scripts

```bash
npm run scheduler:start      # Start service
npm run scheduler:status     # Check status
npm run scheduler:logs       # View logs
npm run scheduler:run-now    # Run immediately
npm run scheduler:stop       # Stop service
```

### Using Deploy Script

```bash
./deploy.sh --scheduler       # Start scheduler
./deploy.sh --scheduler-logs  # View logs
./deploy.sh --scheduler-stop  # Stop scheduler
```

### Production Deployment

```bash
# Scheduler is automatically included
./deploy.sh --prod
```

## 📋 What Happens Every 24 Hours

1. **Cron Trigger**: At 2:00 AM UTC daily
2. **Pexels Crawl**: Fetches your featured uploads from Pexels
3. **Image Processing**: Filters and deduplicates URLs
4. **File Update**: Updates `/public/data/rolling-images.json`
5. **Logging**: Records all activity for monitoring

## 🔧 Configuration

### Schedule

- **Current**: Every 24 hours at 2:00 AM UTC
- **Customizable**: Edit cron expression in `scheduler/Dockerfile`
- **Examples**:
  - Every 12 hours: `0 */12 * * *`
  - Every Monday: `0 2 * * 1`
  - Twice daily: `0 2,14 * * *`

### Resource Limits

- **Memory**: 512MB limit, 256MB reserved
- **CPU**: 0.5 CPU cores (configurable)
- **Storage**: Minimal (logs + temporary files)

## 📊 Monitoring

### Health Checks

- Container health monitoring
- Log file verification
- Automatic restart on failure

### Logging

- **Application logs**: `./scheduler/logs/fetch-images.log`
- **Container logs**: `docker compose logs`
- **Cron logs**: Included in container logs

### Status Checking

```bash
# Quick status
./manage-scheduler.sh status

# Detailed container info
docker compose -f compose.scheduler.yml ps

# Recent log entries
./manage-scheduler.sh logs
```

## 🛠️ Troubleshooting

### Common Commands

```bash
# Restart service
./manage-scheduler.sh restart

# Clean up and rebuild
./manage-scheduler.sh cleanup
./manage-scheduler.sh start

# Manual execution for testing
./scheduler/fetch-images.sh

# Check last update
ls -la ./public/data/rolling-images.json
```

### Debug Information

- **Test Run**: ✅ Completed successfully (fetched 18 unique images)
- **File Updated**: ✅ `/public/data/rolling-images.json` (2.4KB)
- **Scripts Working**: ✅ TypeScript compilation and execution successful
- **Puppeteer**: ✅ Chromium automation working correctly

## 📁 File Structure

```
├── scheduler/
│   ├── fetch-images.sh      # Main orchestration script
│   ├── Dockerfile          # Scheduler container definition
│   ├── compose.yml         # Standalone scheduler compose
│   ├── logs/               # Log files directory
│   └── README.md           # Detailed documentation
├── compose.scheduler.yml    # Standalone scheduler service
├── manage-scheduler.sh      # Management interface script
├── scripts/                # Your existing TypeScript scripts
│   ├── src/
│   │   ├── pexels-crawler.ts
│   │   └── filter-images.ts
│   └── output/             # Generated image data
└── public/data/
    └── rolling-images.json  # Updated automatically ✅
```

## 🔄 Integration Points

### Your Application

- **Rolling Images Component**: Reads from `rolling-images.json`
- **No Code Changes**: Existing component works unchanged
- **Dynamic Updates**: New images appear without restart

### Docker Setup

- **Production**: Scheduler runs alongside main app
- **Development**: Optional, can be enabled as needed
- **Standalone**: Can run independently of main application

### Deployment

- **Automated**: Included in production deployments
- **Manual Control**: Can start/stop independently
- **Resource Efficient**: Minimal resource usage

## 🎯 Next Steps

1. **Start the Service**: `./manage-scheduler.sh start`
2. **Monitor Logs**: `./manage-scheduler.sh logs-live`
3. **Verify Updates**: Check `rolling-images.json` gets updated
4. **Customize Schedule**: Modify cron in `scheduler/Dockerfile` if needed
5. **Production Deploy**: `./deploy.sh --prod` (includes scheduler)

## 📚 Documentation

- **Detailed Guide**: See `scheduler/README.md`
- **Script Help**: `./manage-scheduler.sh help`
- **Deploy Help**: `./deploy.sh --help`

Your image scheduler is now fully integrated and ready to keep your portfolio's rolling images fresh automatically! 🎉
