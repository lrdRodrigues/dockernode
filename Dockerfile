FROM node:alpine 

WORKDIR /usr/app 

COPY package*.json ./ 

RUN npm install 

COPY . . 

EXPOSE 8050 

CMD ["npm", "start"]