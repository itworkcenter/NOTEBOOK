# connect the router/ switch by usb-console on Mac

Connecting to the Console Port with Mac OS X
To connect a Mac OS X system USB port to the console using the built-in OS X Terminal utility:

1. Use the Finder to go to Applications > Utilities > Terminal.

2. Connect the OS X USB port to the router.

3. Enter the following commands to find the OS X USB port number:
```
macbook:user$ cd /dev
macbook:user$ ls -ltr /dev/*usb*
crw-rw-rw- 1 root wheel 9, 66 Apr 1 16:46 tty.usbmodem1a21 
DT-macbook:dev user$
```
 
4. Connect to the USB port with the following command followed by the router USB port speed:
```
macbook:user$ screen /dev/tty.usbmodem1a21 9600
```


将多个端口分配给单个 VLAN
可以将交换机上的多个接口分配给单个 VLAN。发出以下命令：
1. Switch(config)#interface range fastethernet [mod/slot - mod/slot]
2. Switch(config-if-range)#switchport access vlan vlan_number
3. Switch(config-if-range)#switchport mode access
4. Switch(config-if-range)#no shut
