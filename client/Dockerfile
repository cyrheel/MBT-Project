FROM node:16.15.1

RUN mkdir /client
WORKDIR /client
COPY package*.json ./
RUN yarn
COPY src ./src/
COPY public ./public/
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./
CMD ["yarn", "start"]
