# Nginx change port tutorial

## Step 1 Check port

```
> netstat -ntpl | grep httpd
tcp        0      0 :::7080     :::*     LISTEN      31773/httpd
tcp        0      0 :::7081     :::*     LISTEN      31773/httpd
```

## Step 2 preserve a working configuration

```
>cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
```

## Backup

```
> cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example.com
```
