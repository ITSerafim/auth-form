FROM node:18.7.0-alpine

RUN npm install -g nodemon

RUN npm install -g sequelize-cli

WORKDIR /app

COPY /*.json ./

COPY .sequelizerc ./

COPY . ./

RUN npm i

EXPOSE 9000

CMD [ "npm", "run", "server:watch" ]