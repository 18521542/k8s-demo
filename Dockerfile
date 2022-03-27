FROM node:12

WORKDIR /app

COPY package*.json ./app/

RUN npm install

COPY /src ./app/

CMD ["npm", "start"]