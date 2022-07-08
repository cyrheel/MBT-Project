FROM node:16.15.1

ENV REQUEST_ORIGIN=client://localhost:5000/
ENV DATABASE_URL=mysql://root:root@mysql:3306/mont_blanc_ticket

RUN mkdir server
WORKDIR /server 
COPY package*.json ./
RUN yarn
RUN yarn global add typescript
COPY gql ./gql/
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY index.ts ./
COPY db.ts ./
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
EXPOSE 4000
CMD ["./entrypoint.sh"]

# RUN tsc

# FROM node:lts-alpine

# RUN mkdir app

# WORKDIR /app

# COPY --from=builder /app/build /app/build

# RUN apk --no-cache add curl

# COPY package*.json ./

# RUN npm i --production