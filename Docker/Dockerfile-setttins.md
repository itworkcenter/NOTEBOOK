# Dockerfile setting

Reference : [https://github.com/docker/docker-registry/issues/890](https://github.com/docker/docker-registry/issues/890)

```
FROM node:boron

WORKDIR /0docker/node-app-run

COPY package.json .

RUN npm install

ENV http_proxy

COPY . .

EXPOSE 9090

CMD ["npm", "start"]
~                       
```
