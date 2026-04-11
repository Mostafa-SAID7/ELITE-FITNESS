# Docker Quick Reference

## Build

```bash
# Build image
docker build -t elite-fitness:latest .

# Build with custom tag
docker build -t elite-fitness:v1.0.0 .

# Build without cache
docker build --no-cache -t elite-fitness:latest .
```

## Run

```bash
# Run container
docker run -p 80:80 elite-fitness:latest

# Run in background
docker run -d -p 80:80 --name elite-fitness elite-fitness:latest

# Run with custom port
docker run -p 8080:80 elite-fitness:latest

# Run with environment variables
docker run -e NODE_ENV=production -p 80:80 elite-fitness:latest
```

## Container Management

```bash
# List running containers
docker ps

# List all containers
docker ps -a

# View logs
docker logs elite-fitness

# Follow logs
docker logs -f elite-fitness

# Stop container
docker stop elite-fitness

# Start container
docker start elite-fitness

# Remove container
docker rm elite-fitness

# Remove image
docker rmi elite-fitness:latest
```

## Docker Compose

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild image
docker-compose up -d --build

# Remove volumes
docker-compose down -v
```

## Image Management

```bash
# List images
docker images

# Tag image
docker tag elite-fitness:latest yourusername/elite-fitness:latest

# Push to registry
docker push yourusername/elite-fitness:latest

# Pull from registry
docker pull yourusername/elite-fitness:latest

# Inspect image
docker inspect elite-fitness:latest
```

## Debugging

```bash
# Execute command in running container
docker exec -it elite-fitness sh

# Copy file from container
docker cp elite-fitness:/app/file.txt ./file.txt

# Copy file to container
docker cp ./file.txt elite-fitness:/app/file.txt

# View resource usage
docker stats elite-fitness

# View image layers
docker history elite-fitness:latest
```

## Cleanup

```bash
# Remove unused images
docker image prune

# Remove unused containers
docker container prune

# Remove unused volumes
docker volume prune

# Remove all unused resources
docker system prune -a
```

## Registry Operations

### Docker Hub

```bash
# Login
docker login

# Logout
docker logout

# Push image
docker push yourusername/elite-fitness:latest
```

### GitHub Container Registry

```bash
# Login
echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin

# Tag image
docker tag elite-fitness:latest ghcr.io/yourusername/elite-fitness:latest

# Push image
docker push ghcr.io/yourusername/elite-fitness:latest
```

## Useful Aliases

Add to your shell profile (`.bashrc`, `.zshrc`, etc.):

```bash
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias dpa='docker ps -a'
alias dlog='docker logs -f'
alias dex='docker exec -it'
alias drm='docker rm'
alias drmi='docker rmi'
```

## Common Issues

### Port Already in Use

```bash
# Find process using port
lsof -i :80

# Kill process
kill -9 <PID>
```

### Permission Denied

```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Apply group changes
newgrp docker
```

### Container Won't Start

```bash
# Check logs
docker logs elite-fitness

# Inspect container
docker inspect elite-fitness
```

## Performance Tips

1. Use Alpine base images for smaller images
2. Use multi-stage builds to reduce final size
3. Cache layers effectively by ordering Dockerfile commands
4. Use `.dockerignore` to exclude unnecessary files
5. Use specific version tags instead of `latest`
6. Implement health checks
7. Use Docker Compose for development
8. Regularly update base images

## Security Best Practices

1. Don't run containers as root
2. Use read-only file systems when possible
3. Limit container resources (CPU, memory)
4. Scan images for vulnerabilities
5. Use secrets management for sensitive data
6. Keep base images updated
7. Use private registries for sensitive images
8. Implement network policies
