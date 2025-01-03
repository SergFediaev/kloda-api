FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY drizzle drizzle
COPY tsconfig.json .
COPY public public
COPY .env.production .

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000