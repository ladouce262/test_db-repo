# Use the Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the app directory into the container
COPY ./app /app

# Run the app
CMD ["node", "index.js"]

