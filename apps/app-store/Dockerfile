# Stage 1: Build the client project
FROM node:current-alpine as app-store-builder

WORKDIR /app

# Copy the package.json and yarn.lock files from the root folder
COPY package.json yarn.lock nx.json webpack.config.js babel.config.json .eslintrc.json jest.config.ts tsconfig.base.json ./
COPY apps/app-store/project.json apps/app-store/.babelrc apps/app-store/.eslintrc.json apps/app-store/jest.config.ts apps/app-store/webpack.config.js apps/app-store/proxy.conf.json apps/app-store/tsconfig.app.json apps/app-store/tsconfig.json apps/app-store/tsconfig.spec.json ./


# Copy the project files for the client project
COPY apps/app-store ./apps/app-store

# Install dependencies for the client project
RUN yarn install --frozen-lockfile

# Build the client project
RUN yarn nx build app-store --prod

# Stage 2: Serve the projects with Nginx
FROM nginx:1.23.3-alpine

# Copy the built app-store project from the client-builder stage
COPY --from=app-store-builder /app/dist/apps/app-store /usr/share/nginx/html/app-store

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configurations for the client and app-store projects
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose the ports
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
