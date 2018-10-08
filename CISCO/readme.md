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
