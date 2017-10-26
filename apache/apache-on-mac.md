# Installation Apache on mac.

/etc/apache2/httpd.conf

### Changing website root
```
DocumentRoot "/Library/WebServer/Documents"
<Directory "/Library/WebServer/Documents">
```
### AllowOverride All
```
AllowOverride All
```

## Modify directory root permission
```
chown -R _www:_www 0projects/
```
