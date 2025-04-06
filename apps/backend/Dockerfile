FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npx nx build backend --prod

FROM node:lts-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 4000

COPY --from=builder /app/dist/apps/backend ./

RUN npm ci --only=production

EXPOSE 4000

CMD ["node", "main.js"]
