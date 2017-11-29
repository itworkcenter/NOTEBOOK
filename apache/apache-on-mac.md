# Installation Apache on mac.
```
> sudo apachectl start
> apchectl -v
Server version: Apache/2.4.27 (Unix)
Server built:   Jul 15 2017 15:41:46
```

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
Change:
```
Options FollowSymLinks Multiviews
```
to:
```
Options FollowSymLinks Multiviews Indexes
```

## Modify directory root permission
```
chown -R _www:_www 0projects/
```
