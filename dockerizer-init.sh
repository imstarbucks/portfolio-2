#!/bin/bash

# Get directory name
dir_name=${PWD##*/}
# Install Wordpress
WP_VERSION=5.9.3
wp core download --skip-content --version=${WP_VERSION}

# Use directory name as custom server name for nginx
CUSTOM_SERVER_NAME=$dir_name.local.ffshost

# Use directory name as DB_NAME to .env file
echo "DB_NAME=$dir_name" >> .env

# Adding custom server name into etc/hosts file
cd /
sudo -- sh -c -e "echo '127.0.0.1  $CUSTOM_SERVER_NAME\n::1  $CUSTOM_SERVER_NAME' >> /etc/hosts"
