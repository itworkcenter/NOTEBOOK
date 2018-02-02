# mysql installation

## 1. Installation
```
docker pull mysql
```
## 2. Running
```
docker run -d --name=gogs-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=11 -v /0database/mysql:/var/lib/mysql mysql
```
-v local_database_address: docker_mysql_database_address

## 3. [optional] Enter in docker container
```
docker exec -it mysql bash
```
```
root@49c1d4318746:/# su mysql
$ mysql -u root -p
```
## 4. Daemon for mysql
```
docker run -dit --restart always --name=gogs-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=11 -v /0database/gogs-mysql:/var/lib/mysql mysql
```
