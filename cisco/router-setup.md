# Connecting to the Console Port with Microsoft Windows
To connect to the router console port using Microsoft Windows:

### 1. Start a terminal emulator application, such as Windows HyperTerminal (included with some versions of Windows OS) or PuTTY.

### 2. Configure the terminal emulation software with the parameters described in About the Console Port.

### 3. Connect to the router.

# Connecting to the Console Port with Mac OS X
To connect a Mac OS X system USB port to the console using the built-in OS X Terminal utility:

### 1. Use the Finder to go to Applications > Utilities > Terminal.

### 2. Connect the OS X USB port to the router.

### 3. Enter the following commands to find the OS X USB port number:

```
macbook:user$ cd /dev
macbook:user$ ls -ltr /dev/*usb*
crw-rw-rw- 1 root wheel 9, 66 Apr 1 16:46 tty.usbmodem1a21 
DT-macbook:dev user$
```
 
### 4. Connect to the USB port with the following command followed by the router USB port speed:

```
macbook:user$ screen /dev/tty.usbmodem1a21 9600
```
### To Disconnect the OS X USB Console from the Terminal Window

Enter Ctrl+A followed by Ctrl+\

# Connecting to the Console Port with Linux
To connect a Linux system USB port to the console using the built-in Linux Terminal utility:

### 1. Open the Linux Terminal window.

### 2. Connect the Linux USB port to the router.

### 3. Enter the following commands to find the Linux USB port number:
```
root@usb-suse# cd /dev
root@usb-suse /dev# ls -ltr *ACM*
crw-r--r-- 1 root root 188, 0 Jan 14 18:02 ttyACM0
root@usb-suse /dev#
```
 
### 4. Connect to the USB port with the following command followed by the router USB port speed:
```
root@usb-suse /dev# screen /dev/ttyACM0 9600
```
### To Disconnect the Linux USB Console from the Terminal Window

Enter Ctrl+A followed by :, and then type quit.
