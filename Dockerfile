# Origin image
FROM node:18-alpine3.15

# Workdir (inside of container)
WORKDIR /app

# Add `/app/node_modules/bin` to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Caching dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts -g

# Start application
CMD ["npm", "start"]