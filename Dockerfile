FROM node:24

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

ENV "NODE_ENV=production"
ENV "PORT=3000"
ENV "DATABASE_URL=postgres://myuser:mypassword@localhost:5002/mydb"


CMD ["npm", "run", "start"]

