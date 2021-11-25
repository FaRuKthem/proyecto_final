FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

#COPY package*.json ./  copia todo para no teer que poner uno tras otro 

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm" "start" ]