 ### 1. Connection
```
screen /dev/tty.usbmodem1a21 9600
```
### 2. Configration
```
Router>enable //进入特权模式
Router#conf t //进入全局模式，全拼 configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#hostname cisco  //设置路由器名
cisco(config)#enable password 123 //设置进入特权状态的密码(password)，此密码只在没有密文时起作用，并且在设置以后会以明文方式显示
cisco(config)#enable secret 456 //设置进入特权状态的密文
//console端口登录的密码
cisco(config)#line console 0 
cisco(config-line)#password xxxxx
cisco(config-line)#login
//远程telnet端登陆的密码
cisco(config-line)#line vty 0 15
cisco(config-line)#password xxxxx
cisco(config-line)#login
cisco(config-line)#exit
cisco(config)#exit

cisco#copy running-config startup-config //保存当前配置为下次启动配置
Destination filename [startup-config]? 
Building configuration...
[OK]
cisco#reload //重启路由器

```

注意：**copy running-config startup-config 务必执行，保证了当前配置被保存到路由器中，否则下次重启会恢复为初始设置。
