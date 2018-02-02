# mysql installation

```
docker run -d --name=mysql -e MYSQL_ROOT_PASSWORD=11 -v /database/mysql:/var/lib/mysql mysql
```
Enter in docker container

```
docker exec -it mysql bash
```
