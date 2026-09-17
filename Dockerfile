FROM node:20-alpine AS base
WORKDIR /app

# deps
FROM base AS deps
# Coolify builders occasionally drop TLS to registry.npmjs.org (ECONNRESET).
# --prefer-offline is useless here: a fresh image has an empty npm cache.
ENV NPM_CONFIG_FETCH_RETRIES=5 \
    NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=20000 \
    NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=120000 \
    NPM_CONFIG_FETCH_TIMEOUT=300000
COPY package.json package-lock.json ./
RUN set -eux; \
    for i in 1 2 3 4 5; do \
      if npm ci --no-audit --no-fund; then \
        exit 0; \
      fi; \
      echo "npm ci failed (attempt $i/5), retrying..."; \
      if [ "$i" -eq 5 ]; then \
        exit 1; \
      fi; \
      sleep $((i * 8)); \
    done

# build
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]