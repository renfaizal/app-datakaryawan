FROM node:carbon-alpine
RUN apk add git --no-cache
RUN git clone https://github.com/renfaizal/app-datakaryawan.git
RUN npm install
CMD [ "npm","run" ]
EXPOSE 3000