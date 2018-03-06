# Centos setting ip

转自：[https://jingyan.baidu.com/article/e8cdb32b3f9bf237042bad57.html](https://jingyan.baidu.com/article/e8cdb32b3f9bf237042bad57.html)

必须使用root登录系统。如图

centos 7如何配置ip和查看ip地址
2
ip地址一样编辑在vi /etc/sysconfig/network-scripts/ifcfg-em1文件中,记得先把onboot改成yes，然后再修改ip  网关  掩码。如图。

centos 7如何配置ip和查看ip地址
3
修改完配置文件，记得‘ ：wq! ’ 保存退出，如图。

centos 7如何配置ip和查看ip地址
4
然后重启网络 /etc/init.d/network restart，有提示ok就是成功了。

centos 7如何配置ip和查看ip地址
5
输入# ip addr 查看ip这是是否配置正确

centos 7如何配置ip和查看ip地址
6
ping ip 能通，就是大功告成了。如图

使用127.0.0.1  回送地址勿喷，请见谅。

centos 7如何配置ip和查看ip地址
END
