# Stage 1 - the build process
FROM node:16.20.0-alpine as build-deps

ARG DOCKER_ENV

WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm --silent
RUN pnpm install

COPY . ./
RUN rm -rf ./dist
RUN pnpm build

RUN npm config set unsafe-perm true
RUN npm install -g serve --silent

CMD ["serve", "-p", "5173", "-s", "./dist"]