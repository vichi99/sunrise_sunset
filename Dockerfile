FROM node:12-alpine
LABEL maintainer Jan
COPY sunrise/ /app
WORKDIR /app
RUN yarn install
ENTRYPOINT ["./startup.sh"]
