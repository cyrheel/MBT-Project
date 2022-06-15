FROM node:lts-alpine

RUN mkdir /client
WORKDIR /client
COPY package*.json ./
RUN yarn
COPY src src
COPY public public
COPY postcss.config.js ./
COPY tailwind.config.js ./
# RUN yarn run tsc
EXPOSE 3000
CMD ["yarn", "start"]
