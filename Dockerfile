FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN make setup

COPY ./src .

EXPOSE 3000

CMD ["make", "run"]