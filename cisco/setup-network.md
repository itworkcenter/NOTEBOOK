# Setup Network


```
Router> en
Router# config t
Router(config)# int g0/0
Router(config-if)# no shut //开启端口,全称  no shutdown
Router(config-if)# ip address dhcp //dhcp 获取ip
```
