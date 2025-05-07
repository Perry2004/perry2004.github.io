FROM node:22 AS build
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
