#MongoDB
***Download Address:*** [https://www.mongodb.com/download-center?jmp=nav#community](https://www.mongodb.com/download-center?jmp=nav#community)

***Tutorial:*** [http://www.tutorialspoint.com/mongodb/index.htm](http://www.tutorialspoint.com/mongodb/index.htm)

## Install MongoDB On Windows
1.**Create db path**
```
C:\MongoDB> md data\db
```
2.**Specify path**
 
 a.**Directly:**
 
Suppose my installation folder is "**C:\MongoDB**"
```
C:\>cd "MongoDB"
C:\MongoDB>cd bin
C:\MongoDB\bin>mongod.exe --dbpath "C:\MongoDB\data" 
```
This will show waiting for connections message on the console output indicates that the mongod.exe process is running successfully.

b.**Configure MongoDB**

Add a text file called  "**c:\MongoDB\mongod.cfg**" that contains the following:
```
systemLog:
   destination: file
   path: c:\MongoDB\data\log\mongodb.log
   logAppend: true
storage:
    dbPath: c:\MongoDB\data\db
net:
   bindIp: 127.0.0.1
   port: 27017
```
```
C:\MongoDb\bin>mongod.exe -f ..\mongod.cfg
```
**You can set up Environment Variables for "mongod.exe" in Window System.**

***1 User variables***
```
path="C:\MongoDb\bin\"
```

***2 System variables***
```
path="C:\MongoDb\bin\"
```
**You can set up Window Service for "mongod.exe",like below:**

```
>mongod --help
```
You can find "mongod --install" command to install window service.

```
>mongod -f "c:\MongoDB\mongod.cfg" --install --serviceName "MongoDB"
```
**To start MongoDB Service**
```
net start MongoDB
```
**To stop MongoDB Service**
```
net stop MongoDB
```
**To remove MongoDB Service**
```
C:\MongoDb\bin>mongod --remove
```

3.**Testing**

Now to run the mongodb you need to **open another command prompt** and **issue the following command**.

```
C:\MongoDB\bin>mongo.exe
MongoDB shell version: 2.4.6
connecting to: test
>db.test.save( { a: 1 } )
>db.test.find()
{ "_id" : ObjectId(5879b0f65a56a454), "a" : 1 }
>
```
## Install MongoDB on Mac

###2. MongoDB data
```
$ sudo mkdir -p /data/db
$ whoami
mkyong
$ sudo chown mkyong /data/db
```
**Note**
Permissin is required to avoid following locking error :
Unable to create/open lock file: /data/db/mongod.lock

###3. Add mongodb/bin to $PATH
Create a ~/.bash_profile file and assign /usr/local/mongodb/bin to $PATH environment variable, so that you can access Mongo’s commands easily.

```
$ cd ~
$ pwd
/Users/mkyong
$ touch .bash_profile
$ vim .bash_profile

export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

##restart terminal

$ mongo -version
MongoDB shell version: 2.2.3

```
###5. Auto Start MongoDB

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


#Mongodb import/export data

**Use mongoimport**
```
mongoimport --db users --collection contacts --type csv --headerline --file /opt/backups/contacts.csv
mongoimport --db users --type csv --headerline --file /opt/backups/contacts.csv
mongoimport --db users --collection contacts --file contacts.json
mongoimport --db sales --collection contacts --stopOnError --dbpath /srv/mongodb/
mongoimport --host mongodb1.example.net --port 37017 --username user --password pass --collection contacts --db marketing --file /opt/backups/mdb1-examplenet.json
```
