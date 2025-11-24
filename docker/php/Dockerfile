FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libzip-dev zip libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        gd \
        intl \
        pdo \
        pdo_mysql \
        mysqli \
        zip \
        opcache \
    && docker-php-ext-enable opcache \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql mysqli

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html