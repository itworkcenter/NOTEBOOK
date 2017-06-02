#Mac commond

|name|detail|notice|
|---|---|---|
|refresh|cmd+r||
|force refresh|shift+cmd+r||
|automator|||
|touch|create new, empty files.||
|lsof|sudo lsof -i :27017||
|kill|sudo kill -9 85||
|whoami|review user||
|chown|change permission|chown username|
|chmod|change permission||
|launchctl|interfaces with launchd to load, unload daemons/agents and generally control launchd. ||
|launchctl load|||
|launchctl start|||
|launchctl list|||
|launchctl remove|||
|ls -l|review file permission||
|crontab|run on a regular schedule||

#Create service
|LaunchAgents|Permission scope|
|---|---|
|~/Library/LaunchAgents/ |For a specific user|
|/Library/LaunchAgents/ |For all users|
|/System/Library/LaunchAgents/ |For OS X use only|

##Step 1. Create .plist file
```
>cd /Library/LaunchDaemons
>touch yourdomain.plist
>vi yourdomain.plist
```
***yourdomain.plist*** for example as follow:
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
        <dict>
                <key>Label</key>
                <string>org.node.anywhere</string>
                <key>RunAtLoad</key>
                <true/>
                <key>KeepAlive</key>
                <true/>
                <key>StartInterval</key>
                <integer>3600</integer>
                <key>ProgramArguments</key>
                <array>
                        <string>. /0project/run/node.sh</string>
                </array>
        </dict>
</plist>
```
***check*** .plist
```
>plutil yourdomain.plist
```
##Step 2. Modify file permission

##Step 3. Start 
```
>sudo launchctl load /Library/LaunchDaemons/yourdomain.plist
>sudo launchctl start /Library/LaunchDaemons/yourdomain.plist
```
