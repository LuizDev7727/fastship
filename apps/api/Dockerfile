FROM node:22-alpine AS base

# Define o diretório de binários do PNPM
ENV PNPM_HOME=/root/.pnpm
ENV PATH="$PNPM_HOME:$PATH"

# Cria o diretório manualmente para evitar erros
RUN mkdir -p $PNPM_HOME

# Instala o pnpm via npm
RUN npm install -g pnpm

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat


# Set working directory
WORKDIR /app
RUN pnpm install turbo --global
COPY . .
RUN turbo prune api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile


# Build the project and its dependencies
COPY --from=builder /app/out/full/ .


WORKDIR /app/apps/api
RUN pnpm exec prisma generate

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN


RUN pnpm turbo build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nestjs
RUN adduser --system --uid 1001 nestjs
USER nestjs
COPY --from=installer /app .

EXPOSE 3333

ENTRYPOINT [ "node", "apps/api/dist/src/main.js" ]
