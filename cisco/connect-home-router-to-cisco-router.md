# Connect home wifi router to CISCO router


```
Router> en
Router# config t
Router(config)# int g0/0
Router(config-if)# no shut //开启端口,全称  no shutdown
Router(config-if)# ip address dhcp //dhcp 获取ip
Router(config-if)# do ping 192.168.0.4

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.0.4, timeout is 2 seconds:
.!!!!
Success rate is 80 percent (4/5), round-trip min/avg/max = 4/22/72 ms

Router(config-if)#do ping 8.8.8.8   //ping Google Dns

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 8.8.8.8, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 16/16/16 ms

Router(config-if)#


Router(config-if)#int g0/1
Router(config-if)#ip add
Router(config-if)#ip address 192.168.2.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#no shutdown 
```
