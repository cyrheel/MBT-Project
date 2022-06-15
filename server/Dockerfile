FROM node:lts-alpine

RUN mkdir app

WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm i
RUN npm i -g typescript

COPY src ./

RUN tsc

FROM node:lts-alpine

RUN mkdir app

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN apk --no-cache add curl

ENV REQUEST_ORIGIN=http://localhost:5000/

COPY package*.json ./

RUN npm i --production

CMD npm start