FROM node:15.5.0-alpine3.10

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./ ./

CMD ["npm", "start:dev"]