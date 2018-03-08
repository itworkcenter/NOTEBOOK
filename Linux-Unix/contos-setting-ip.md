# Centos setting ip

转自：[https://jingyan.baidu.com/article/e8cdb32b3f9bf237042bad57.html](https://jingyan.baidu.com/article/e8cdb32b3f9bf237042bad57.html)

必须使用root登录系统.

```
>vi /etc/sysconfig/network-scripts/ifcfg-em1文件中,记得先把onboot改成yes，然后再修改ip  网关  掩码。如图。
```
```
TYPE=Ethernet
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
NAME=em1
UUID=f1b6e4e1-5770-46d4-ac86-5f15d9cba0d4
ONBOOT=yes
IPADDR0=x.x.x.x
NETMASK=x.x.x.x
IPADDR1=x.x.x.x
NETMASK=x.x.x.x
GATEWAY0=x.x.x.x
DNS1=x.x.x.x
DOMAIN=
HWADDR=
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
```
修改完配置文件，记得保存退出,如下
```
：wq!
```

然后重启网络 
```
/etc/init.d/network restart，有提示ok就是成功了。
```
查看ip
```
>ip addr 查看ip这是是否配置正确
```

centos 7如何配置ip和查看ip地址
6
ping ip 能通，就是大功告成了
