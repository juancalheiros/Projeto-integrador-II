FROM node:alpine

WORKDIR /usr/app

COPY package*.json .

RUN yarn

COPY ./src .

EXPOSE 3000

CMD ["yarn ", "start"]