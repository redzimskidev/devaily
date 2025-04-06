FROM node:lts-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npx nx build frontend --prod

FROM node:lts-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache dumb-init

COPY --from=builder /app/dist/apps/frontend/public ./public
COPY --from=builder /app/dist/apps/frontend/.next/static ./.next/static
COPY --from=builder /app/dist/apps/frontend/.next/standalone/. ./

RUN chown -R node:node .
USER node

EXPOSE 3000

CMD ["dumb-init", "node", "apps/frontend/server.js"]
