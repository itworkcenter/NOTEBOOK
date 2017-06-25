# X-Cart Installation Guidline

After LAMP is ready.

## Setting up Apache

Enabling mod_rewrite
```
> sudo a2enmod rewrite
> vi /etc/apache2/apache2.conf

<Directory /var/www/html>
                Options Indexes FollowSymLinks MultiViews
                ***AllowOverride All***
                Order allow,deny
                allow from all
</Directory>

> sudo service apache2 restart
```


|Name|Notice|e.g.|
|---|---|---|
|2. Uncompress|tar -xzpf x-cart-5.3.2.12-en.tgz|
