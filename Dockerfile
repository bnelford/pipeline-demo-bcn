FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["pm2-runtime", "/usr/src/app/app.js"]