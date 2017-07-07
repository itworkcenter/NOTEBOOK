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

```
#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```
