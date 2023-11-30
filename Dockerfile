FROM node:17-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["node", "server.js"]