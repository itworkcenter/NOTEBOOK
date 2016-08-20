#MongoDB
## Install MongoDB On Windows
1.**Install**
```
C:\>md data
C:\md data\db
```
2.**Specify path**

Suppose my installation folder is D:\set up\mongodb
```
D:\>cd "set up"
D:\set up>cd mongodb
D:\set up\mongodb>cd bin
D:\set up\mongodb\bin>mongod.exe --dbpath "d:\set up\mongodb\data" 
```
3.**Testing**
```
D:\set up\mongodb\bin>mongo.exe
MongoDB shell version: 2.4.6
connecting to: test
>db.test.save( { a: 1 } )
>db.test.find()
{ "_id" : ObjectId(5879b0f65a56a454), "a" : 1 }
>
```
## Install MongoDB on Ubuntu
