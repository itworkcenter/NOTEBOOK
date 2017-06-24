# Installation Guidline

## Install and configure PHP 7.0

Since Ubuntu 16.04, PHP 7.0 has replaced PHP 5.x and become the default version of PHP in the official Ubuntu application repository. You can install and configure PHP 7.0 on your Ubuntu 16.04 system as follows.

First of all, you can list all of the available PHP 7.0-related packages for review:
```
apt-cache pkgnames | grep php7.0
```
Then you can install the package your to-be-deployed application requires.

For example, if you want to deploy your application based on the LAMP stack, usually, you can install the below packages after installing Apache:
```
sudo apt-get install -y apache2
sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0-cli php7.0-common php7.0-mbstring php7.0-gd php7.0-intl php7.0-xml php7.0-mysql php7.0-mcrypt php7.0-zip
```
Alternatively, if you want to deploy your application based on the LEMP stack, you can install the following packages after installing Nginx:
```
sudo apt-get install -y nginx
sudo apt-get install -y php7.0 php7.0-fpm php7.0-cli php7.0-common php7.0-mbstring php7.0-gd php7.0-intl php7.0-xml php7.0-mysql php7.0-mcrypt php7.0-zip
```
After the installation, you can confirm that with:
```
php -v
```
The output should resemble:

PHP 7.0.15-0ubuntu0.16.04.4 (cli) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.0.15-0ubuntu0.16.04.4, Copyright (c) 1999-2017, by Zend Technologies
The main config file of PHP 7.0 will be saved as /etc/php/7.0/apache2/php.ini (Apache) or /etc/php/7.0/fpm/php.ini (Nginx). You can use the vi text editor to modify relevant settings in that file.
```
sudo vi /etc/php/7.0/apache2/php.ini
```
or:
```
sudo vi /etc/php/7.0/fpm/php.ini
```
Remember to restart Apache or Nginx if you make any changes to that file or any other PHP config files:
```
sudo systemctl restart apache2.service
```
or:
```
sudo systemctl restart nginx.service php7.0-fpm.service
```
