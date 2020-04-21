FROM node:10.0.0-alpine
WORKDIR ./work
COPY ./package.json ./package.json
RUN npm install
COPY . .
ENTRYPOINT [ "node", "container.js" ]