FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000


#if dev
CMD ["./node_modules/nodemon/bin/nodemon.js","-L" ,"server.js"]

#if test
#CMD ["npm","run" ,"test"] if [ "x$ENVIRONMENT" = "DEV" ];