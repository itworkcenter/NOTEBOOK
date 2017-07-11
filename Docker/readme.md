# Docker tutorial

## Directory
```
____
  |-dockerfile
  |-requirements.txt
```
## Command
|Order|Note|e.g.|
|---|---|---|
|docker ps|List container|
|docker rmi ImageName|Remove image|
|docker rm ContainerName|Remove container|
|docker run -i -t --rm ubuntu /bin/bash|switch to ubuntu system|

```
#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```
