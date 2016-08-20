#MongoDB
Address:[https://www.mongodb.com/download-center?jmp=nav#community](https://www.mongodb.com/download-center?jmp=nav#community)

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

```
path="C:\MongoDb\bin>mongod.exe"
```
**You can set up Window Service for "mongod.exe",like below:**

```
>mongod --help
```
You can find "mongod --install" command to install window service.

```
>mongod -f c:\MongoDB\mongod.cfg --install
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
## Install MongoDB on Ubuntu
