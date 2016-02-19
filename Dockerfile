# Use this as a base image
FROM nginx:latest

# Maintainer Info
MAINTAINER Ighor Martins <ighor.martins@gmail.com>

# copy application code to /var/www/events-clock
COPY build/app /var/www/events-clock/app

# copy nginx configuration file
COPY dist/nginx/default.conf /etc/nginx/conf.d/
