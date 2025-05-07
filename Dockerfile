FROM node:22 AS build
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:22 AS deploy
WORKDIR /app
COPY --from=build /app .
CMD ["yarn", "preview"]
EXPOSE 4173
