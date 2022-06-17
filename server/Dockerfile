FROM node:16.15.1

ENV REQUEST_ORIGIN=http://localhost:5000/
ENV DATABASE_URL=mysql://root:root@host.docker.internal:3309/mont_blanc_ticket
RUN mkdir server
WORKDIR /server 
COPY package*.json ./
RUN yarn
RUN yarn global add typescript
COPY tsconfig.json ./
COPY gql ./gql/
COPY prisma ./prisma/
COPY index.ts ./
COPY db.ts ./
RUN npx prisma generate
RUN npx prisma migrate dev
EXPOSE 4000


# RUN tsc

# FROM node:lts-alpine

# RUN mkdir app

# WORKDIR /app

# COPY --from=builder /app/build /app/build

# RUN apk --no-cache add curl

# COPY package*.json ./

# RUN npm i --production

CMD ["yarn", "start"]