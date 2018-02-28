# Switch
## Switch vlan setting
```
SW1#vlan database
SW1(vlan)#vlan 10
SW1(vlan)#vlan 20
SW1(vlan)#exit
SW1#conf terminal
SW1(config)#int fastEthernet 1/2
SW1(config-if)#switchport mode access
SW1(config-if)#switchport access vlan 10
SW1(config-if)#exit
SW1(config)#int fastEthernet 1/3
SW1(config-if)#switchport mode access
SW1(config-if)#switchport access vlan 20
SW1(config-if)#exit
SW1(config)#int fastEthernet 1/1
SW1(config-if)#switchport mode trunk
SW1(config-if)#exit
SW1(config)#int fastEthernet 1/0
SW1(config-if)#switchport mode trunk
```
Interface range port setting
```
interface range Fa1/0 - 15
```
## Setting Nat on Router cisco RT2911

#Cisto router

##Config NAT

```
> config t
Enter configuration commands, one per line.  End with CNTL/Z.
RT2911-Edge(config)#

```

进入路由器后

config t

#把HTTPS服务发布出去
>ip nat inside source static tcp 10.100.103.xx（内网IP） 443(端口号） 47.180.184.xx（外网IP） 443（端口号）

#把HTTP服务发布出去
>ip nat inside source static tcp 10.100.103.xx（内网IP） 80(端口号） 47.180.184.xx（外网IP） 80（端口号）


#把整个服务器发布出去，所有端口都对公网开放。谨慎使用。
>ip nat inside source static 10.100.103.xx 47.180.184.xx

#保存
>do wr

#检查NAT配置
```
>config t
Enter configuration commands, one per line.  End with CNTL/Z.
RT2911-Edge(config)# do SHOW run | include nat
```
>do SHOW run|include nat
