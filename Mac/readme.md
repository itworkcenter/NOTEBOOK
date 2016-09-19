#Mac commond
|name|detail|notice|
|---|---|---|
|automator|||
|touch|create new, empty files.||
|lsof|sudo lsof -i :27017||
|kill|sudo kill -9 85||

#Create service
##Step 1.
```
>cd /Library/LaunchDaemon
>touch yourdomain.plist
>vi yourdomain.plist
```
yourdomain.plist for example as follow:
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
##Step 2.
```
>sudo launchctl load /Library/LaunchDaemon/yourdomain.plist
>sudo launchctl start /Library/LaunchDaemon/yourdomain.plist
```
