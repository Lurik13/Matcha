#RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
#RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'.PHP_EOL; } else { echo 'Installer corrupt'.PHP_EOL; unlink('composer-setup.php'); exit(1); }"
#RUN php composer-setup.php
#RUN php -r "unlink('composer-setup.php');"
#RUN sudo mv composer.phar /usr/local/bin/composer
#RUN curl -1sLf &#039;https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh&#039; | sudo -E bash &amp;&amp;
#RUN sudo apt install symfony-cli \
#                    php8.1-xml \
#                    php8.1-mbstring \
#                    php8.1-intl \
#                    php8.1-mysql

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
    && docker-php-ext-enable opcache

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html