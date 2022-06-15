FROM node:lts-alpine

ENV REQUEST_ORIGIN=http://localhost:5000/
ENV DATABASE_URL=mysql://root:root@localhost:3309/mont_blanc_ticket
RUN mkdir app
WORKDIR /app
COPY package*.json ./
RUN yarn
RUN yarn global add typescript
COPY tsconfig.json ./
COPY gql gql
COPY prisma prisma
COPY index.ts ./
COPY db.ts ./
RUN npx prisma migrate dev


# RUN tsc

# FROM node:lts-alpine

# RUN mkdir app

# WORKDIR /app

# COPY --from=builder /app/build /app/build

# RUN apk --no-cache add curl

# COPY package*.json ./

# RUN npm i --production

CMD yarn start