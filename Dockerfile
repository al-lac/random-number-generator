# Use an official lightweight Node.js image.
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the web application files to the container
COPY . .

# Install a simple http server for serving static content
RUN npm install -g http-server

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run http-server
CMD [ "http-server", ".", "-p 8080" ]
