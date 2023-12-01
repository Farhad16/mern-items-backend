FROM node:17-alpine

WORKDIR /backend

COPY . .

EXPOSE 4200

RUN npm install

CMD ["node", "server.js"]