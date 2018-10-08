# CISCO Router Command

***Notice***: annotation is that: `// annotation content here`
### Set login password
```
Router> //local mode
Router> en  // Full command: enable
Router#  
Router# config t //Global mode. Full command: config terminal
Router(config)# 
Router(config)# enable secret password here
Router(config)#exit
Router# copy run start  //Full command: copy running-config startup-config 
Router# reload

```
### Save command
```
Router# copy run start  //Full command: copy running-config startup-config 
```
Or
```
Router# write //Full command: copy running-config startup-config 
```

### Show ip interface

```
Router# show ip int brief  //Full command: show ip interface brief
Interface                  IP-Address      OK? Method Status                Protocol
Embedded-Service-Engine0/0 unassigned      YES NVRAM  administratively down down
GigabitEthernet0/0         unassigned      YES NVRAM  up                    up
GigabitEthernet0/1         unassigned      YES NVRAM  administratively down down
```

### interface state change to up
```
Router> //local mode
Router> en  // Full command: enable
Router#  
Router# config t //Global mode. Full command: config terminal
Router(config)# 
Router(config)# int g0/0
Router(config-if)# no shut //Full command: no shutdown
Router(config-if)# exit
Router(config)#exit
Router# copy run start  //Full command: copy running-config startup-config
Router# reload

```
