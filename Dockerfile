# stage 1: Build the React App
FROM node:20-alpine AS builder

# set working directory inside the docker container
WORKDIR /app

# copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# COpy all source code

COPY . .

# BUild the production app
RUN npm run build

# stage 2: Serve with Nginx

FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Nginx runs by default
CMD ["nginx", "-g", "daemon off;"]