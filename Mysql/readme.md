# Installation guidline
1. Installation
```
> sudo apt-get install mysql-server
```
2. Test if it's working
```
> mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 7
Server version: 5.7.18-0ubuntu0.16.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```
3. Set up security.
```
> service mysqld restart
> mysql_secure_installation
```
# Command
|Name|Note|e.g.|
|---|---|---|
|sudo apt-get install mysql-server| install mysql|[https://www.linode.com/docs/databases/mysql/install-mysql-on-ubuntu-14-04](https://www.linode.com/docs/databases/mysql/install-mysql-on-ubuntu-14-04)|
|show databases;| show list|
|create database database_nanme;|create|
|drop database database_name;| Delete|
|exit|
