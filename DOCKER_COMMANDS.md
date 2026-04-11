# Docker Commands for Elite Fitness App

## Prerequisites
- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

## Build the Docker Image

```bash
# Build the image
docker build -t elite-fitness:latest .

# Build with a specific tag
docker build -t elite-fitness:1.0.0 .

# Build with progress output
docker build --progress=plain -t elite-fitness:latest .
```

## Run the Container

### Using Docker Run

```bash
# Run the container
docker run -p 3000:3000 elite-fitness:latest

# Run in detached mode (background)
docker run -d -p 3000:3000 --name elite-fitness elite-fitness:latest

# Run with environment variables
docker run -d -p 3000:3000 -e NODE_ENV=production --name elite-fitness elite-fitness:latest

# Run with custom port
docker run -d -p 8080:3000 --name elite-fitness elite-fitness:latest
```

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

# Remove volumes
docker-compose down -v
```

## Access the App

Once running, access the app at:
- **Local**: http://localhost:3000
- **Custom port**: http://localhost:8080 (if using port 8080)

## Container Management

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

# Follow logs in real-time
docker logs -f elite-fitness

# Execute command in container
docker exec -it elite-fitness sh
```

## Image Management

```bash
# List images
docker images

# Remove an image
docker rmi elite-fitness:latest

# Tag an image
docker tag elite-fitness:latest elite-fitness:1.0.0

# Push to Docker Hub
docker push your-username/elite-fitness:latest
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs elite-fitness

# Check image exists
docker images | grep elite-fitness

# Rebuild image
docker build -t elite-fitness:latest .
```

### Port already in use
```bash
# Use a different port
docker run -p 8080:3000 elite-fitness:latest

# Find process using port (macOS/Linux)
lsof -i :3000

# Find process using port (Windows)
netstat -ano | findstr :3000
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

## Docker Compose Services

The docker-compose.yml includes:

- **elite-fitness**: Main application service
  - Port: 3000
  - Restart policy: unless-stopped
  - Health check: Enabled

## Production Deployment

### Push to Docker Hub

```bash
# Tag image
docker tag elite-fitness:latest your-username/elite-fitness:latest

# Login to Docker Hub
docker login

# Push image
docker push your-username/elite-fitness:latest
```

### Deploy on Server

```bash
# Pull image
docker pull your-username/elite-fitness:latest

# Run container
docker run -d -p 80:3000 --restart always your-username/elite-fitness:latest
```

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

## Performance Tips

1. Use Alpine images (smaller base)
2. Multi-stage builds (reduce final size)
3. Layer caching (order Dockerfile commands)
4. Minimize layers (combine RUN commands)
5. Use .dockerignore (exclude unnecessary files)

## Security Best Practices

1. Use specific versions (not `latest`)
2. Run as non-root user
3. Scan images for vulnerabilities
4. Keep base images updated
5. Don't hardcode secrets

## Useful Links

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## Quick Start Summary

```bash
# 1. Build the image
docker build -t elite-fitness:latest .

# 2. Run the container
docker run -d -p 3000:3000 --name elite-fitness elite-fitness:latest

# 3. Access the app
# Open http://localhost:3000 in your browser

# 4. View logs
docker logs -f elite-fitness

# 5. Stop the container
docker stop elite-fitness
```

## Support

For Docker-related issues:
1. Check Docker logs: `docker logs <container-id>`
2. Review Dockerfile syntax
3. Check Docker documentation
4. Open an issue on GitHub
