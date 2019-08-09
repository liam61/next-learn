FROM node:10-alpine

LABEL maintainer "lawler61@163.com"

COPY . /app

WORKDIR /app

RUN yarn \
  && yarn build \
  && yarn cache clean

CMD ["yarn","start"]

EXPOSE 3000
