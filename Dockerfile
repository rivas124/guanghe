FROM node:17-alpine

WORKDIR /usr/src/app
COPY .next/ .next/
COPY node_modules/ node_modules/
COPY package.json .
COPY next.config.js .
COPY public/ public/

CMD ["npm","run", "start"]