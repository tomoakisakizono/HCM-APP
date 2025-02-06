FROM php:8.3-apache

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    default-mysql-client \
    && docker-php-ext-install pdo pdo_mysql

# Apacheのドキュメントルート設定
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# 必要なモジュールを有効化
RUN a2enmod rewrite
