FROM node:24-alpine

WORKDIR /app/front

ENV PATH /app/front/node_modules/.bin:$PATH

COPY front/package*.json ./
COPY front/package-lock*.json ./
RUN npm install

COPY front ./

CMD ["npm", "run", "dev"]