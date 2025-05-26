# Multi-stage build for perry2004.github.io
# Stage 1: Build the application
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source files and build
COPY . .
RUN yarn build

# Stage 2: Serve with Caddy
FROM caddy:2.9.1-alpine
COPY --from=build /app/dist /usr/share/caddy