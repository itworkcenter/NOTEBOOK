# connect ECONNREFUSED 151.101.196.162:443

The problem is that "https://registry.npmjs.org/" SSL can not connect. The resulation is below:

## ERROR FROM

```
npm info it worked if it ends with ok
npm info using npm@3.10.10
npm info using node@v6.11.4
npm info attempt registry request try #1 at 6:19:11 PM
npm http request GET https://registry.npmjs.org/forever
npm info retry will retry, error on last attempt: Error: connect ECONNREFUSED 151.101.196.162:443
npm info attempt registry request try #2 at 6:20:36 PM
```


## RESOLUTION TO
```
FROM node:argon

ENV http_proxy http://127.0.0.1:3128/
ENV https_proxy http://127.0.0.1:3128/

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# setup proxies
RUN git config --global http.proxy http://127.0.0.1:3128/ && \
    npm config set strict-ssl=false \
    npm config set registry=http://registry.npmjs.org/ \
    npm config set proxy=http://127.0.0.1:3128/ && \
    npm config set https-proxy=http://127.0.0.1:3128/

# Install dependencies for node.js
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
```
