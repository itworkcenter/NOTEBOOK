# Virtualbox

## Install Mac OS 10.12 sierra

**Step 1:** Download 
Latest preview: 10.12 Final (16A323). September 20, 2016

Download Image:

Google Drive (One Full): https://goo.gl/m1an1R

Google Drive (5 of 5): https://goo.gl/I7DCqA

Fix Download Limit: http://techsviewer.com/fix-download-limit



**Step 2:** Create New Virtual Machine

***Set Name and operating system***
```
Name: macOS 10.12 Sierra
Type: Mac OS X
Version: Mac OS X 10.11 El Capitan (64 bit) or 10.12 Sierra
Memory size is 4 GB( 70% of your Ram)

```
***Set Hard disk***
```
Use an existing virtual hard disk file
Virtual disk file: macOS 10.12 Sierra.vmdk
```
**Step 3:**  Edit Your Virtual Machine

***System***
```
//Processor:
Processor(s):  2
Execution Cap:  100%
Extended Features: Enable PAE/NX

//Motherboard:
Memory: 4096MB
Boot: Order: able Optical and Hard Disk
Chipset: ICH9
Pointing Device: USB Tablet
Extended Features:    Enable I/O APIC
                      Enable EFI
                      Hardware Clock in UTC Time

```
***Display***
```
//Screen
Video Memory：   128MB
```
***Storage***
```
//Storage Tree
Controller: SATA
            Disk: macOS 10.12 Sierra.vmdk:    
                                          HardDisk: SATA Port0
            CD:   Empty
```

**Step 4:** Add Code to VirtualBox with Command Prompt (cmd)

Code for Virtualbox 5.0.x:
```
cd "C:\Program Files\Oracle\VirtualBox\"
VBoxManage.exe modifyvm "Your VM Name" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```
Code for Virtualbox 4.x.x:
```
cd "C:\Program Files\Oracle\VirtualBox\"
VBoxManage.exe modifyvm "Your VM Name" --cpuidset 00000001 000306a9 04100800 7fbae3ff bfebfbff
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "MacBookPro11,3"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata "Your VM Name" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```

