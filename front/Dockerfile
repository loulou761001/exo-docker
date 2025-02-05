# Build Stage
FROM node:22.10.0-alpine AS builder
LABEL maintainer="louis.cherik@gmail.com"

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the Vite project
RUN npm run build

# Production Stage
FROM node:22.10.0-alpine

# Copy the built files from the build stage
COPY --from=builder ./dist ./dist

# Install a lightweight HTTP server to serve the built files
RUN #npm install -g serve

# Expose Vite's default production port
EXPOSE 4173

# Serve the static files
CMD ["npx", "serve", "-s", "dist", "-l", "4173"]
