# Image
FROM node:18.8.0-alpine
# Directory
WORKDIR /frontend

# Installing application dependencies
COPY package.json /frontend
COPY yarn.lock /frontend
RUN yarn

COPY . /frontend

EXPOSE 3000

# Initialize the application
CMD ["yarn", "dev", "-p", "3000"]