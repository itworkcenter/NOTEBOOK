# Node tutorial
[http://www.tutorialspoint.com/nodejs/index.htm](http://www.tutorialspoint.com/nodejs/index.htm);

# Node Template Engine (Benchmarks, Comparsion)
[http://paularmstrong.github.io/node-templates/](http://paularmstrong.github.io/node-templates/)

***CoffeeKup*** - Markup as CoffeeScript.

***[EJS](https://github.com/tj/ejs)*** - Embedded JavaScript templates

***Haml-js*** - Haml ported to server-side Javascript. This is a traditional server-side templating language.

***Haml.js*** - Faster / Express compliant Haml implementation

***[Jade](http://jade-lang.com/)*** - Robust, elegant, feature rich template engine for Node.js.

***JQTpl*** - Port of jQuery's Template Engine to Node.js.

***Mu2*** - A Mustache template engine for Node.js.

***[Swig](https://github.com/paularmstrong/swig)*** - Swig is a template engine inspired by the Django syntax.

***Templ8*** - JavaScript client/server template engine.

***Whiskers*** - A mustachioed templating library.

#REST API frameworks

#Node forever
|name|detail|notice
|---|---|---|
|forever| forever -w --watchDirectory /var/www/project_path start app.js | forever restart if change any file.

#Node express --website server

#Node swig --template engine

#Node Rest API framework Compare
||LoopBack	|Express	|Hapi	|Sails|	Restify	|Meteor|
|---|---|---|---|---|---|---|
|Type|	API framework|	HTTP server library|	HTTP server framework|	Web MVC framework|	REST HTTP library|	Full-stack JavaScript app platform|
|Top Features|	Enterprise connectivity, API Explorer, generators, client SDKs, websocket microservices	|HTTP routing, middleware	|Modularity, security	|Rails |familiarity, MVC	|Simplicity, REST routing	|Universal JavaScript, reactive rendering, websocket microservices|
|Suitable For|	Web apps, APIs	|Simple web apps	|Web apps, APIs	|Web apps, APIs	|Simple REST APIs	|Web apps|
|Github Stars|	5k	|19k	|4k	|10k	|3k	|28k|
|Support	|StrongLoop|	StrongLoop	|N/A	|N/A	|N/A	|Meteor Development Group|
|Pure Node runtime|	Yes	|Yes	|Yes	|Yes	|Yes	|No|
|Client SDKs|	Angular, Browser, Node.js, iOS, Android, Xamarin	|N/A	|None	|None	|None	|JavaScript, Cordova for iOS and Android, React, AngularJS
|Export API Definition|	Yes	|With strong-remoting	|None	|None	|None	|With meteor-rest|
|Tools|	Visual API composer, Explorer, CLI code generators	|CLI app generator	|Yeoman generator	|Yeoman generator	|Yeoman generator	|CLI tool
|Visual API composition|	Yes	|No	|No	|No	|No	|No|
|StrongLoop Arc Build & Deploy, Monitoring, Profiling|	Yes	|Yes	|Yes	|Yes	|Yes	|Yes|
|Extensions|	Push, File Storage, Passport, OAuth 2.0, Express Middleware	|Express / Connect Middleware	|Hapi Plugins	|	|	|Proprietary package system and repository, npm|
|Data sources|	In-memory/file, MongoDB, MySQL, Oracle, PostgreSQL, SQL Server, ATG, Email, REST, SOAP	|None	|None	|In-memory, File, PostgreSQL, MySQL, MongoDB	|None	|MongoDB, MySQL and PostgreSQL via 3rd-party packages|
|ACLs|	Yes	|No	|No	|No	|No	|Basic allow/deny|
