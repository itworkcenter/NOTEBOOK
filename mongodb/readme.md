#MongoDB
Address:[https://www.mongodb.com/download-center?jmp=nav#community](https://www.mongodb.com/download-center?jmp=nav#community)

## Install MongoDB On Windows
1. **Install**
```
C:\>md data
C:\md data\db
```
2. **Specify path**

Suppose my installation folder is D:\set up\mongodb
```
D:\>cd "set up"
D:\set up>cd mongodb
D:\set up\mongodb>cd bin
D:\set up\mongodb\bin>mongod.exe --dbpath "d:\set up\mongodb\data" 
```
This will show waiting for connections message on the console output indicates that the mongod.exe process is running successfully.

3. **Testing**

Now to run the mongodb you need to **open another command prompt** and **issue the following command**.

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
