# Node processor management
## 1. PM2
### Startup on mac

**Installation**
```
$ [sudo] npm install pm2 -g
```
**Usage**
```
$ pm2 start app.js
[PM2] restartProcessId process id 0
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────────────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ memory      │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────────────┼──────────┤
│ my-app   │ 0  │ fork │ 64029 │ online │ 1       │ 0s     │ 17.816 MB   │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────────────┴──────────┘
 Use the `pm2 show <id|name>` command to get more details about an app.
```
**Startup script**
[http://pm2.keymetrics.io/docs/usage/startup/](http://pm2.keymetrics.io/docs/usage/startup/)

[https://expressjs.com/en/advanced/pm.html#pm2](https://expressjs.com/en/advanced/pm.html#pm2)

```
# Detect available init system, generate configuration and enable startup system
pm2 startup
```
**Disabling startup system**
```
pm2 unstartup
```
### Startup on windows
```
npm install pm2 -g
npm install pm2-windows-startup -g
pm2-startup install
pm2 start myApp.js --name mySuperApp
pm2 save
reboot
pm2 ls
```
