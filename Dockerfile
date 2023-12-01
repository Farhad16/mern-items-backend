FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4200

CMD node server.js