# Stage 1: Build Frontend
FROM node:14 AS frontend-build

WORKDIR /usr/src/app/optimumai-frontend
COPY optimumai-frontend/package*.json ./
RUN npm install
COPY optimumai-frontend .
RUN npm run build

# FROM node:18-alpine as base

# WORKDIR /usr/src/app
# COPY optimumai-frontend optimumai-frontend
# WORKDIR /usr/src/app/optimumai-frontend
# RUN npm i && npm run build
# RUN mkdir -p /usr/src/build/frontend
# RUN cp -r /usr/src/app/optimumai-frontend/build /usr/src/build/frontend

WORKDIR /usr/src/app
COPY optimumai-dashboard optimumai-dashboard
WORKDIR /usr/src/app/optimumai-dashboard
RUN npm i && npm run build
RUN mkdir -p /usr/src/build/dashboard
RUN cp -r /usr/src/app/optimumai-dashboard/dist /usr/src/build/dashboard

# Stage 2: Build Dashboard
FROM node:14 AS dashboard-build

WORKDIR /usr/src/app/optimumai-dashboard
COPY optimumai-dashboard/package*.json ./
RUN npm install
COPY optimumai-dashboard .
RUN npm run build

# Stage 3: Production Build
FROM nginx:1.21.3-alpine

# FROM nginx:1.25.4
## COPY --from=base /usr/src/build /etc/nginx/html/build
## COPY --from=base /usr/src/app/optimumai-frontend /usr/src/app/optimumai-frontend
## COPY --from=base /usr/src/app/optimumai-dashboard /usr/src/app/optimumai-dashboard


# Copy built frontend files
COPY --from=frontend-build /usr/src/app/optimumai-frontend/build /usr/share/nginx/html/frontend

# Copy built dashboard files
COPY --from=dashboard-build /usr/src/app/optimumai-dashboard/build /usr/share/nginx/html/dashboard

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]