# docker for gogs

## 1. Installation mysql
[docker-for-mysql](./docker-for-mysql.md)

```
docker run -dit --restart always --name=gogs-mysql --link='mysql:gogs-mysql' -e MYSQL_ROOT_PASSWORD=11 -v /0database/mysql:/var/lib/mysql mysql
```

## 2. Installation gogs
```
# Pull image from Docker Hub.
$ docker pull gogs/gogs

# Create local directory for volume.
$ mkdir -p /var/gogs

# Use `docker run` for the first time.
$ docker run --name=gogs -p 10022:22 -p 10080:3000 -v /0docker/gogs:/data gogs/gogs

# Use `docker start` if you have stopped it.
$ docker start gogs
```
## 3.[optional] daemon for gogs and mysql

```
docker run -dit --restart always --name=gogs -p 10022:22 -p 10080:3000 -v /0docker/gogs:/data gogs/gogs
```
