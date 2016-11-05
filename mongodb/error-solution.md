#Error solution

## 'E11000 duplicate key error collection: meter.users index: username_1 dup key: { : null }'

***Solution:***
```
>mongo
>use meter
>db.users.getIndexes()
[
        {
                "v" : 1,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "meter.users"
        },
        {
                "v" : 1,
                "unique" : true,
                "key" : {
                        "username" : 1
                },
                "name" : "username_1",
                "ns" : "meter.users",
                "background" : true
        }
]
>db.users.dropIndex({username:1})
```
