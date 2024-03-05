FROM node:16.20-alpine

WORKDIR /usr/src/app

COPY public public
COPY src src
COPY .env .env
COPY package.json package.json

RUN npm i && npm i -g http-server && npm run build

WORKDIR /usr/src/app/build

EXPOSE 80
EXPOSE 443

ENTRYPOINT http-server -c-1 -p 443