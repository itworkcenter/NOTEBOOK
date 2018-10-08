# CISCO Router Command

***Notice***: annotation is that: `// annotation content here`
### Set login password
```
Router> //local mode
Router> en  // Full command: enable
Router#  
Router# config t //Global mode. Full command: config terminal
Router(config)# 
Router(config)# int g0/0
Router(config-if)# enable secret password here
Router(config-if)# exit
Router(config)#exit
Router# copy run start  //Full command: copy running-config startup-config
Router# reload

```
### Show ip interface

```
Router# show ip int brief  //Full command: show ip interface brief
Interface                  IP-Address      OK? Method Status                Protocol
Embedded-Service-Engine0/0 unassigned      YES NVRAM  administratively down down
GigabitEthernet0/0         unassigned      YES NVRAM  up                    up
GigabitEthernet0/1         unassigned      YES NVRAM  administratively down down
```
