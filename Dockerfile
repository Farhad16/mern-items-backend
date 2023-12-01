FROM node:18-alpine

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install

EXPOSE 4200

CMD ["node", "server.js"]