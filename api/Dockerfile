# Image
FROM node:18.8.0-alpine
# Directory
WORKDIR /api

# Installing application dependencies
COPY package.json /api
COPY yarn.lock /api
RUN yarn

COPY . /api

EXPOSE 3001

# Initialize the application
CMD ["npm", "run", "dev"]