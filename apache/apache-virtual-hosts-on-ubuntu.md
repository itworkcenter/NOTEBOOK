# How To Set Up Apache Virtual Hosts on Ubuntu 14.04 LTS

```
sudo apt-get update
sudo apt-get install apache2
```
## Step One — Create the Directory Structure
```
sudo mkdir -p /var/www/example.com/public_html
sudo mkdir -p /var/www/test.com/public_html

```
## Step Two — Grant Permissions
```
sudo chown -R $USER:$USER /var/www/example.com/public_html
sudo chown -R $USER:$USER /var/www/test.com/public_html
```

```
sudo chmod -R 755 /var/www
```

## Step Three — Create Demo Pages for Each Virtual Host
```
nano /var/www/example.com/public_html/index.html
```

```
<html>
  <head>
    <title>Welcome to Example.com!</title>
  </head>
  <body>
    <h1>Success!  The example.com virtual host is working!</h1>
  </body>
</html>
```

```
cp /var/www/example.com/public_html/index.html /var/www/test.com/public_html/index.html
```

```
nano /var/www/test.com/public_html/index.html
```

```
<html>
  <head>
    <title>Welcome to Test.com!</title>
  </head>
  <body>
    <h1>Success!  The test.com virtual host is working!</h1>
  </body>
</html>
```

## Step Four — Create New Virtual Host Files

### Create the First Virtual Host File
```
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/example.com.conf
```

```
<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/example.com/public_html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

### Copy First Virtual Host and Customize for Second Domain
```
sudo cp /etc/apache2/sites-available/example.com.conf /etc/apache2/sites-available/test.com.conf
```

```
<VirtualHost *:80>
    ServerAdmin admin@test.com
    ServerName test.com
    ServerAlias www.test.com
    DocumentRoot /var/www/test.com/public_html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## Step Five — Enable the New Virtual Host Files

```
sudo a2ensite example.com.conf
sudo a2ensite test.com.conf
```

```
sudo service apache2 restart
```

## Step Six — Set Up Local Hosts File (Optional)

```
sudo nano /etc/hosts
```

The details that you need to add are the public IP address of your VPS server followed by the domain you want to use to reach that VPS.

For the domains that I used in this guide, assuming that my VPS IP address is 111.111.111.111, I could add the following lines to the bottom of my hosts file:

```
127.0.0.1   localhost
127.0.1.1   guest-desktop
111.111.111.111 example.com
111.111.111.111 test.com
```

This will direct any requests for example.com and test.com on our computer and send them to our server at 111.111.111.111. This is what we want if we are not actually the owners of these domains in order to test our virtual hosts.

Save and close the file.
