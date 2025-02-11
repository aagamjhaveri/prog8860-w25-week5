FROM node:alpine

WORKDIR /app

# COPY Node Package and lock file
COPY package.json ./package.json
COPY package-lock.json ./package.json

# Install packages
RUN npm install

# COPY remaining project files
COPY . /app

# EXPOSE the port
EXPOSE 3000

ENTRYPOINT [ "npm","start" ]