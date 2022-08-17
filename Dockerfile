FROM ubuntu:20.04

LABEL maintainer="spencer.wong@forefront.com.my"
LABEL version="1.0"
LABEL description="A custom docker image for nginx & php-fpm services"

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Install php, php-curl, nginx, supervisord
RUN apt update -y
RUN apt install -y php-fpm curl php-curl nginx supervisor php-mysql\
	&& rm -rf /var/lib/apt/lists/* && \
	apt clean

ENV nginx_vhost /etc/nginx/sites-available/default
ENV php_conf /etc/php/7.4/fpm/php.ini
ENV nginx_conf /etc/nginx/nginx.conf
ENV supervisor_conf /etc/supervisor/supervisord.conf

# Enable PHP-fpm on nginx virtualhost configuration
COPY ./_docker-conf/default ${nginx_vhost}
RUN sed -i -e 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' ${php_conf} && \
	echo "\ndaemon off;" >> ${nginx_conf}


#Copy supervisor configuration
COPY ./_docker-conf/php.ini ${php_conf}

#Copy supervisor configuration
COPY ./_docker-conf/supervisord.conf ${supervisor_conf}

# Create a new directory for PHP-FPM sock file, change the ownership of the web-root directory '/var/www/html' and PHP-FPM directory '/run/php' to the default user 'www-data'.
RUN mkdir -p /run/php && \
	chown -R www-data:www-data /var/www/html && \
	chown -R www-data:www-data /run/php

# Volume configuration
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Copy start.sh script and define default command for the container
COPY start.sh /start.sh
CMD ["./start.sh"]

# Expose Port for the Application
EXPOSE 80 443

COPY ./public/wordpress /var/www/html
