<?php

/**
 * The name of the database for WordPress.
 * @var string
 */
define('DB_NAME', 'portfolio-2');

/**
 * The MySQL database username.
 * @var string
 */
define('DB_USER', 'forefront');

/**
 * The MySQL database password.
 * @var string
 */
define('DB_PASSWORD', 'ffs12345');

/**
 * The MySQL hostname.
 * Use 'localhost' during staging or production
 * @var string
 */
define('DB_HOST', 'db');

/**
 * The database charset to use in creating database tables.
 * @var string
 */
define('DB_CHARSET', 'utf8');

/**
 * The database collate type. Don't change this if in doubt.
 * @var string
 */
define('DB_COLLATE', '');

/**
 * Authentication unique keys and salts. You can generate these at
 * https://api.wordpress.org/secret-key/1.1/salt/
 * @var string
 */
define( 'AUTH_KEY',         'insert your unique phrase here!' );
define( 'SECURE_AUTH_KEY',  'insert your unique phrase here!' );
define( 'LOGGED_IN_KEY',    'insert your unique phrase here!' );
define( 'NONCE_KEY',        'insert your unique phrase here!' );
define( 'AUTH_SALT',        'insert your unique phrase here!' );
define( 'SECURE_AUTH_SALT', 'insert your unique phrase here!' );
define( 'LOGGED_IN_SALT',   'insert your unique phrase here!' );
define( 'NONCE_SALT',       'insert your unique phrase here!' );

/**
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/**
 * The WordPress database table prefix.
 * @var string
 */
$table_prefix = 'wp_';
