# Centos7 forgot password

来自： [https://jingyan.baidu.com/article/9225544642b73e851648f49d.html](https://jingyan.baidu.com/article/9225544642b73e851648f49d.html)

CentOS7忘记root密码
方法/步骤
step 1

首先在这个界面按【e】键


ps：如果你使用的是VMware虚拟机，可以按【Ctrl+Alt】切换到你的电脑，以便边看教程边操作

CentOS7忘记root密码
step2

按【e】进入启动文件界面后

按【↓】拉到底部

在 "LANG=zh_cn.UTF-8" 同行后面加上“init=/bin/sh” 

然后按【Ctrl+X】进入“单用户模式”

CentOS7忘记root密码
step3

输入【ls】,回车

再输入【mount –o remount ,rw / 】，回车 （注意空格，参考图片）

CentOS7忘记root密码
step4

输入【passwd】（注意：密码不能少于8位）

如图所示，重复输入两次密码

（要注意的是，你输入的密码可能会看不到，但这不是输入故障，密码已经输入了只是不可见）

CentOS7忘记root密码
5
step5

输入【touch /.autorelabel】，回车

再输入【exec /sbin/init】回车

以便重启系统

6
如果你的启动界面是这样的

点击【No listed】

CentOS7忘记root密码
7
输入用户名和密码就可以进入系统了

CentOS7忘记root密码
CentOS7忘记root密码
END
