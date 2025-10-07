# Docker Deployment Guide

This guide explains how to build and deploy the Next.js client application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for local testing)

## Local Development with Docker

### Build the Docker image

```bash
docker build -t nextjs-client .
```

### Run the container

```bash
docker run -p 3000:3000 nextjs-client
```

### Using Docker Compose (recommended for local testing)

```bash
docker-compose up --build
```

## Deployment on Render

### Steps to deploy on Render:

1. **Connect your repository**: Link your GitHub/GitLab repository to Render

2. **Create a new Web Service**:

   - Choose "Docker" as the environment
   - Set the build command: `docker build -t nextjs-client .`
   - Set the start command: `docker run -p $PORT:3000 nextjs-client`
   - Or simply use the Dockerfile (Render will auto-detect it)

3. **Environment Variables** (if needed):

   - `NODE_ENV=production`
   - `NEXT_TELEMETRY_DISABLED=1`
   - Add any other environment variables your app needs

4. **Set the port**: Render will automatically set the PORT environment variable

### Alternative Render deployment (using native Next.js):

If you prefer not to use Docker on Render, you can also deploy directly:

- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Node Version: 18.x

## Docker Image Optimization Features

- **Multi-stage build**: Reduces final image size
- **Standalone output**: Next.js creates a minimal runtime
- **Non-root user**: Runs with limited privileges for security
- **Layer caching**: Optimized for faster rebuilds
- **Alpine Linux**: Minimal base image

## Troubleshooting

### Common issues:

1. **Port conflicts**: Make sure port 3000 is available
2. **Build failures**: Check that all dependencies are in package.json
3. **Permission issues**: The container runs as non-root user 'nextjs'

### Logs:

```bash
# View container logs
docker logs <container-id>

# Follow logs in real-time
docker logs -f <container-id>
```

## Production Considerations

1. **Environment Variables**: Store sensitive data in environment variables
2. **Health Checks**: Consider adding health check endpoints
3. **Monitoring**: Set up logging and monitoring for production
4. **SSL/HTTPS**: Render provides automatic HTTPS
5. **CDN**: Consider using a CDN for static assets
