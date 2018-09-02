## Install MongoDB on Mac

### 1. MongoDB data
```
$ sudo mkdir -p /data/db
$ whoami
mkyong
$ sudo chown mkyong /data/db
```
**Note**
Permissin is required to avoid following locking error :
Unable to create/open lock file: /data/db/mongod.lock

### 2. Add mongodb/bin to $PATH
Create a ~/.bash_profile file and assign /usr/local/mongodb/bin to $PATH environment variable, so that you can access Mongo’s commands easily.

```
$ cd ~
$ pwd
/Users/mkyong
$ touch .bash_profile
$ vim .bash_profile

export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

## restart terminal

$ mongo -version
MongoDB shell version: 2.2.3

```
### 3. Auto Start MongoDB

***Create xxx.plist file***
```
$ sudo vim /Library/LaunchAgents/___.mongo.plist
```
Puts following content :

/Library/LaunchAgents/___.mongo.plist
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">  
<plist version="1.0">  
<dict>  
    <key>Label</key>
    <string>___.mongo</string>
    <key>RunAtLoad</key>
    <true/>
    <key>ProgramArguments</key>
    <array>
        <string>/0works/mongodb/bin/mongod</string>
        <string>--dbpath</string>
        <string>/0works/mongodb/data/db</string>
        <string>--logpath</string>
        <string>/0works/mongodb/data/mongodb.log</string>
    </array>
</dict>  
</plist>

```
***Load above code***
```
$ launchctl load /Library/LaunchAgents/___.mongo.plist
$ launchctl start ___.mongo
```
***Check running***
```
$ launchctl list

$ ps -ef | grep mongo
    0    71     1   0  1:50PM ??         0:22.26 /usr/local/mongodb/bin/mongod
  501   542   435   0  2:23PM ttys000    0:00.00 grep mongo
```
