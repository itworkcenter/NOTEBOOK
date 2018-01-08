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
|docker ps [--all , -a]	|Show all containers (default shows just running)|
|docker rmi ImageName|Remove image|
|docker rm ContainerName|Remove container|
|docker run -i -t --rm ubuntu /bin/bash|switch to ubuntu system|
|docker container start ContainerName|
|docker image ls|List all image|
|docker run -dit --restart no YourContainerName |Restart the container unless it is explicitly stopped or Docker itself is stopped or restarted.|
|docker run -dit --restart on-failure YourContainerName|Restart the container if it exits due to an error, which manifests as a non-zero exit code.|
|docker run -dit --restart unless-stopped YourContainerName|Restart the container unless it is explicitly stopped or Docker itself is stopped or restarted.|
|docker run -dit --restart always YourContainerName|Always restart the container if it stops.|

```
#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```
