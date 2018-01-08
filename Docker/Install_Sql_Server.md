# Install Sql Server
Reference to [http://database.guide/how-to-install-sql-server-on-a-mac/](http://database.guide/how-to-install-sql-server-on-a-mac/)

## 1, Download SQL Server
```
docker pull microsoft/mssql-server-linux
```
## 2, Launch the Docker Image
```
docker run -d --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Abcdefg123' -p 1433:1433 microsoft/mssql-server-linux
```
## 3, Install sql-cli (unless already installed) required NodeJs
```
sudo npm install -g sql-cli
```
## 4, Connect to SQL Server
```
mssql -u sa -p Abcdefg123
```
## 5, Run a Quick Test

```
select @@version
```

## Still run container 

```
docker run -d --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Abcdefg123' -p 1433:1433 -dit --restart unless-stopped microsoft/mssql-server-linux
```
