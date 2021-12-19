FROM node:12

EXPOSE 8080

WORKDIR /src

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["npm","run","prod"]