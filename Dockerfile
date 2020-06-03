FROM node:10

WORKDIR /app

COPY *.js package*.json ./

RUN npm install

EXPOSE 8080

CMD [ "node", "./index.js" ]