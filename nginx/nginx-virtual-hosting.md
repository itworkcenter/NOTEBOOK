# Nginx change port tutorial

## Step 1 Check port

```
> netstat -ntpl | grep httpd
tcp        0      0 :::7080     :::*     LISTEN      31773/httpd
tcp        0      0 :::7081     :::*     LISTEN      31773/httpd
```

## Copy default to new domain to config

```
> sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example.com
```

## Edit domain configuration

```
> sudo nano /etc/nginx/sites-available/example.com
```
/etc/nginx/sites-available/example.com
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                try_files $uri $uri/ =404;
        }
}
```
** Only one of our server blocks on the server can have the default_server option enabled.
