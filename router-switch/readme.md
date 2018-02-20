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
