FROM node:18-alpine as base

WORKDIR /app
COPY optimumai-frontend/ /app/optimumai-frontend/
WORKDIR /app/optimumai-frontend
RUN npm i && npm run build
RUN mkdir -p /build/frontend
RUN cp -r /app/optimumai-frontend/build/* /build/frontend/

WORKDIR /app
COPY optimumai-dashboard /app/optimumai-dashboard
WORKDIR /app/optimumai-dashboard
RUN npm i && npm run build && npm i -g http-server
RUN mkdir -p /build/dashboard
RUN cp -r /app/optimumai-dashboard/build/* /build/dashboard/

FROM nginx:1.25.4
COPY --from=base /build /etc/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod -R 777 /etc/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT http-server -c-1 -p 443 /build