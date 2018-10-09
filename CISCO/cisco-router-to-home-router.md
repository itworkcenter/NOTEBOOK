
# Connection Cisco router to home router


Your home router gateway is 192.168.0.1

## Cisco Router config
```
Router>
Router> en
Router#
Router#config t
Router(config)#
Router(config)# int g0/0
Router(config-if)# no shut
Router(config-if)# ip address dhcp
Router(config-if)# 
Router(config-if)# do ping www.google.com   //check
...
Success rate is 100 percent(5/5)
...
Router(config-if)# int g0/1
Router(config-if)# ip address 192.168.2.1 255.255.255.0
Router(config-if)# no shut
Router(config-if)# 
Router(config-if)# exit
Router(config)# ip dhcp pool labuser(name)
Router(dhcp-config)# network 192.168.2.0 /24
Router(dhcp-config)# default-router 192.168.2.1
Router(dhcp-config)# dns-server 8.8.8.8 // google dns
Router(dhcp-config)# exit
Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.0.1
Router(config)# do ping 192.168.0.1  //check
...
Success rate is 100 percent(5/5)
...
Router(config)# interface g0/0 
Router(config-if)# ip nat outside
Router(config-if)# exit
Router(config)#
Router(config)# int g0/1
Router(config-if)# ip nat inside
Router(config-if)# exit
Router(config)# ip access-list standard 1
Router(config-std-nacl)#
Router(config-std-nacl)# permit any
Router(config-std-nacl)# exit
Router(config)#
Router(config)# ip nat inside source list 1 interface g0/0 overload
Router(config)# exit
Router#
Router# write //Save config
```

## Cisco Switch config
```
```
