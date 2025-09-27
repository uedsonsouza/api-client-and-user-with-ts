FROM node:22-alpine AS builder

WORKDIR /client-and-user

COPY ./ ./

RUN yarn && yarn build

FROM node:22-alpine

WORKDIR /client-and-user

COPY --from=builder /client-and-user/dist ./dist
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --production=true

CMD ["node", "dist/main.js"]