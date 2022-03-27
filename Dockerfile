FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY /src ./

CMD ["npm", "start"]