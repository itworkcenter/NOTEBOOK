# Install Sql Server
##Step 1

##Step 2
docker run -d --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Abcdefg123' -p 1433:1433 microsoft/mssql-server-linux
