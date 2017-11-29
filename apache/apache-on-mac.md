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
### Change Indexes
```
Change:
Options FollowSymLinks Multiviews
to:
Options FollowSymLinks Multiviews Indexes
```

## Modify directory root permission
```
chown -R _www:_www 0projects/
```
