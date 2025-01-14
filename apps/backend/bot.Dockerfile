FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

CMD ["pnpm", "build"]

CMD ["pnpm", "start"]

EXPOSE 3000