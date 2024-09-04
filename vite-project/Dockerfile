# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Vite runs on
EXPOSE 5173

# Set the environment variable for the host (necessary for some Docker environments)
ENV HOST=0.0.0.0

# Start the app using npm run dev with --host option to bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host"]