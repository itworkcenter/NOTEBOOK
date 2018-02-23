# Docker for mongoDB

## get mongo
```
docker pull mongo
```
## run mongo
```
docker run -dit --restart always --name=mongodb  -p 27017:27017 -v /0database/docker-mongodb:/data/db
```
