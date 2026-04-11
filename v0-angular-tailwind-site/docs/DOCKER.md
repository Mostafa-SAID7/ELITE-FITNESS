# Docker Guide

## Overview

This project includes Docker support for containerized deployment and development.

## Prerequisites

- Docker installed (https://www.docker.com/products/docker-desktop)
- Docker Compose (included with Docker Desktop)

## Building the Docker Image

### Build Command

```bash
docker build -t elite-fitness:latest .
```

### Build with Custom Tag

```bash
docker build -t elite-fitness:v1.0.0 .
```

## Running the Container

### Basic Run

```bash
docker run -p 80:80 elite-fitness:latest
```

Access the application at `http://localhost`

### Run with Custom Port

```bash
docker run -p 8080:80 elite-fitness:latest
```

Access the application at `http://localhost:8080`

### Run in Background

```bash
docker run -d -p 80:80 --name elite-fitness elite-fitness:latest
```

### View Logs

```bash
docker logs elite-fitness
```

### Stop Container

```bash
docker stop elite-fitness
```

### Remove Container

```bash
docker rm elite-fitness
```

## Docker Compose

### Start Services

```bash
docker-compose up -d
```

### Stop Services

```bash
docker-compose down
```

### View Logs

```bash
docker-compose logs -f
```

### Rebuild Image

```bash
docker-compose up -d --build
```

## Docker Image Details

### Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **Builder Stage**: Installs dependencies and builds the Angular application
2. **Production Stage**: Serves the built application with Nginx

### Image Size

- Builder stage: ~1.5GB (not included in final image)
- Production image: ~150MB

### Base Images

- Builder: `node:18-alpine`
- Production: `nginx:alpine`

## Environment Variables

### Build-Time Variables

Set during build:

```bash
docker build --build-arg NODE_ENV=production -t elite-fitness:latest .
```

### Runtime Variables

Set when running:

```bash
docker run -e NODE_ENV=production -p 80:80 elite-fitness:latest
```

## Nginx Configuration

The production image uses Nginx to serve the Angular application. Configuration is included in the Dockerfile.

### Custom Nginx Config

To use a custom Nginx configuration:

1. Create `nginx.conf`
2. Update the Dockerfile to copy your config
3. Rebuild the image

## Pushing to Registry

### Docker Hub

```bash
# Tag image
docker tag elite-fitness:latest yourusername/elite-fitness:latest

# Login to Docker Hub
docker login

# Push image
docker push yourusername/elite-fitness:latest
```

### GitHub Container Registry

```bash
# Tag image
docker tag elite-fitness:latest ghcr.io/yourusername/elite-fitness:latest

# Login to GHCR
echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin

# Push image
docker push ghcr.io/yourusername/elite-fitness:latest
```

## Development with Docker

### Development Container

For development, you can use a development container:

```bash
docker run -it -v $(pwd):/app -p 4200:4200 node:18-alpine sh
cd /app
pnpm install
pnpm start
```

### Hot Reload

To enable hot reload in Docker:

```bash
docker run -it -v $(pwd)/src:/app/src -p 4200:4200 node:18-alpine sh
cd /app
pnpm start
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 80
lsof -i :80

# Kill process
kill -9 <PID>
```

### Container Won't Start

Check logs:

```bash
docker logs elite-fitness
```

### Build Fails

Clear Docker cache and rebuild:

```bash
docker build --no-cache -t elite-fitness:latest .
```

### Permission Denied

On Linux, you may need to use `sudo`:

```bash
sudo docker run -p 80:80 elite-fitness:latest
```

Or add your user to the docker group:

```bash
sudo usermod -aG docker $USER
```

## Best Practices

1. Use specific version tags instead of `latest`
2. Keep images small by using Alpine base images
3. Use multi-stage builds to reduce final image size
4. Don't run containers as root
5. Use environment variables for configuration
6. Implement health checks
7. Use Docker Compose for multi-container setups
8. Regularly update base images for security patches

## Security

- Images are built from Alpine Linux for minimal attack surface
- No sensitive data is included in the image
- Use secrets management for sensitive environment variables
- Scan images for vulnerabilities: `docker scan elite-fitness:latest`
