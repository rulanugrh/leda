FROM node:alpine

ARG EXPOSE_PORT

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE ${EXPOSE_PORT}

CMD [ "node", "index.js" ]