FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM caddy:2.9.1-alpine 
COPY --from=build /app/dist /usr/share/caddy