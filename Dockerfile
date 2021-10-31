## use the latest docker image for NGINX
FROM nginx:latest
LABEL author="Kevin"

ARG API_URL=http://ph-saas-api.propertyhatch.com:50574
ENV API_URL $API_URL
#ENV BUCKET $BUCKET

## Remove default NGINX web files
RUN rm -rf /usr/share/nginx/html/*
## Copy the dist files to NGINX web folder
##COPY ./dist/* /usr/share/nginx/html/
ADD ./dist /usr/share/nginx/html/

#COPY ./dist/UI/fr /usr/share/nginx/html
## Set the permission for NGINX web folder
RUN chmod 777 -R /usr/share/nginx/html
## Overwrit the default NGINX config using the custom config file
COPY ./custom-nginx-file.conf /etc/nginx/conf.d/default.conf
## Expose the docker port
EXPOSE 8080 443
## Initiate the NGINX
#CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
