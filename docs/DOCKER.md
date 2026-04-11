# Docker Setup Guide

This guide explains how to build, run, and deploy the Elite Fitness app using Docker.

## Prerequisites

- Docker installed ([Download Docker](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Build the Docker Image

```bash
# Build the image
docker build -t elite-fitness:latest .

# Or with a specific tag
docker build -t elite-fitness:1.0.0 .
```

### Run the Container

```bash
# Run the container
docker run -p 3000:3000 elite-fitness:latest

# Run in detached mode (background)
docker run -d -p 3000:3000 --name elite-fitness elite-fitness:latest

# Run with environment variables
docker run -d -p 3000:3000 -e NODE_ENV=production elite-fitness:latest
```

The app will be available at `http://localhost:3000`

### Using Docker Compose

```bash
# Start the app
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop the app
docker-compose down

# View logs
docker-compose logs -f

# Rebuild the image
docker-compose up --build
```

## Docker Commands Reference

### Image Management

```bash
# List images
docker images

# Remove an image
docker rmi elite-fitness:latest

# Tag an image
docker tag elite-fitness:latest elite-fitness:1.0.0

# Push to registry
docker push your-registry/elite-fitness:latest
```

### Container Management

```bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop elite-fitness

# Start a container
docker start elite-fitness

# Remove a container
docker rm elite-fitness

# View container logs
docker logs elite-fitness

# Follow logs
docker logs -f elite-fitness

# Execute command in container
docker exec -it elite-fitness sh
```

## Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **Builder Stage**: Installs dependencies and builds the Angular app
2. **Production Stage**: Copies only the built app, resulting in a smaller image

This approach:
- ✅ Reduces final image size
- ✅ Improves security (no build tools in production)
- ✅ Faster deployment

## Image Size

- Builder stage: ~500MB (not included in final image)
- Final image: ~150MB

## Health Check

The container includes a health check that:
- Runs every 30 seconds
- Times out after 3 seconds
- Retries 3 times before marking unhealthy
- Waits 5 seconds before first check

Check health status:
```bash
docker ps  # Look for "healthy" or "unhealthy" status
```

## Environment Variables

Available environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| NODE_ENV | production | Node environment |
| PORT | 3000 | Server port |

## Networking

### Port Mapping

```bash
# Map port 8080 on host to 3000 in container
docker run -p 8080:3000 elite-fitness:latest

# Map multiple ports
docker run -p 8080:3000 -p 8443:3000 elite-fitness:latest
```

### Container Networking

```bash
# Create a network
docker network create elite-network

# Run container on network
docker run --network elite-network --name elite-fitness elite-fitness:latest

# Connect container to network
docker network connect elite-network elite-fitness
```

## Volumes

Mount volumes for persistent data:

```bash
# Mount a volume
docker run -v /path/on/host:/app/data elite-fitness:latest

# Named volume
docker run -v elite-data:/app/data elite-fitness:latest
```

## Docker Compose Services

The docker-compose.yml includes:

- **elite-fitness**: Main application service
  - Port: 3000
  - Restart policy: unless-stopped
  - Health check enabled

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs elite-fitness

# Check image
docker images | grep elite-fitness

# Rebuild image
docker build -t elite-fitness:latest .
```

### Port already in use

```bash
# Use a different port
docker run -p 8080:3000 elite-fitness:latest

# Find process using port
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows
```

### Out of disk space

```bash
# Remove unused images
docker image prune

# Remove unused containers
docker container prune

# Remove everything unused
docker system prune -a
```

## Production Deployment

### Push to Docker Registry

```bash
# Tag image
docker tag elite-fitness:latest your-registry/elite-fitness:latest

# Login to registry
docker login your-registry

# Push image
docker push your-registry/elite-fitness:latest
```

### Deploy on Server

```bash
# Pull image
docker pull your-registry/elite-fitness:latest

# Run container
docker run -d -p 80:3000 --restart always your-registry/elite-fitness:latest
```

### Using Docker Swarm

```bash
# Initialize swarm
docker swarm init

# Deploy service
docker service create --name elite-fitness -p 3000:3000 elite-fitness:latest
```

### Using Kubernetes

```bash
# Create deployment
kubectl create deployment elite-fitness --image=your-registry/elite-fitness:latest

# Expose service
kubectl expose deployment elite-fitness --port=3000 --target-port=3000
```

## Performance Tips

1. **Use Alpine images** - Smaller base images
2. **Multi-stage builds** - Reduce final image size
3. **Layer caching** - Order Dockerfile commands efficiently
4. **Minimize layers** - Combine RUN commands
5. **Use .dockerignore** - Exclude unnecessary files

## Security Best Practices

1. **Use specific versions** - Don't use `latest` tag
2. **Run as non-root** - Add USER directive
3. **Scan images** - Use `docker scan` for vulnerabilities
4. **Keep base images updated** - Regularly rebuild
5. **Use secrets** - Don't hardcode sensitive data

## Useful Links

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## Support

For Docker-related issues:
1. Check Docker logs: `docker logs <container-id>`
2. Review Dockerfile syntax
3. Check Docker documentation
4. Open an issue on GitHub
