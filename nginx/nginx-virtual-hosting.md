## Nginx virtual hosting

### Check listen port
```
> netstat -ntlp
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      698/mysqld  
```

### Create the Second Server Block File 

### Copy default to new domain to config

```
> sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example.com
```

### Edit domain configuration

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
**Only one of our server blocks on the server can have the default_server option enabled.**

server non-matching requests, so we'll remove the default_server from this and the next server block. 

/etc/nginx/sites-available/example.com
```
server {
        listen 80;
        listen [::]:80;

        . . .
}
```

### Check default_server

```
> grep -R default_server /etc/nginx/sites-enabled/
```

### Adding domain alias
/etc/nginx/sites-available/example.com
```
server {
        listen 80;
        listen [::]:80;

        root /var/www/example.com/html;
        index index.html index.htm index.nginx-debian.html;

        server_name example.com www.example.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

### Create the Second Server Block File 
Repeat above step again.

### Enable your Server Blocks and Restart Nginx
```
> sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
### avoid a possible hash bucket memory problem to config "server_names_hash_bucket_size"
```
> sudo nano /etc/nginx/nginx.conf
```
/etc/nginx/nginx.conf
```
http {
    . . .

    server_names_hash_bucket_size 64;

    . . .
}
```

### Check syntax errors for Nginx
```
> sudo nginx -t
```
### Restart Nginx 
If no problems were found, restart Nginx to enable your changes:
```
> sudo systemctl restart nginx
```

### Modify your local hosts files for testing.

```
> sudo nano /etc/hosts
```
/etc/hosts
```
127.0.0.1   localhost
. . .

203.0.113.5 example.com www.example.com
203.0.113.5 test.com www.test.com
```
