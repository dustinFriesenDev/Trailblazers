FROM node:20-alpine3.19
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

ENV NODE_ENV production

CMD [ "npx", "serve", "build"]