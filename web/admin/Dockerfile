FROM node:lts-alpine AS development

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm ci

COPY . .

RUN chown -R node /app

CMD ["npm", "run", "dev"]

# Build stage
FROM development AS build
RUN npm run build
