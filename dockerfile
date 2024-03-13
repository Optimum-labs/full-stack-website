FROM node:18-alpine as base

WORKDIR /usr/src/app
COPY optimumai-frontend optimumai-frontend
WORKDIR /usr/src/app/optimumai-frontend
RUN npm i && npm run build
RUN mkdir -p /usr/src/build/frontend
RUN cp -r /usr/src/app/optimumai-frontend/build /usr/src/build/frontend

WORKDIR /usr/src/app
COPY optimumai-dashboard optimumai-dashboard
WORKDIR /usr/src/app/optimumai-dashboard
RUN npm i && npm run build
RUN mkdir -p /usr/src/build/dashboard
RUN cp -r /usr/src/app/optimumai-dashboard/dist /usr/src/build/dashboard

FROM nginx:1.25.4
COPY --from=base /usr/src/build /etc/nginx/html/build
# COPY --from=base /usr/src/app/optimumai-frontend /usr/src/app/optimumai-frontend
# COPY --from=base /usr/src/app/optimumai-dashboard /usr/src/app/optimumai-dashboard

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"] 