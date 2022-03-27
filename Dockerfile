FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY /src ./app/

CMD ["npm", "start"]