# Ubuntu Command

|Name|Note|e.g.|
|---|---|---|
|sudo apt-get update|system update|
|sudo apt-get upgrade| system upgrade|
|apt list --installed|

#To install Node.js, type the following command in your terminal:

**sudo apt-get install nodejs**

Then install the Node package manager, npm:

**sudo apt-get install npm**

Create a symbolic link for node, as many Node.js tools use this name to execute.

**sudo ln -s /usr/bin/nodejs /usr/bin/node**

Now we should have both the Node and npm commands working:

$ node -v

v0.10.25

$ npm -v

1.3.10
