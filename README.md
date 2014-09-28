multipage-requirejs-rjs
=======================

This project shows which javascript code is getting called when using requirejs
for a multi-page setup with shim configuration. 

* Shows how to use requirejs on a multi-page project with shim. Inspired from [requirejs/example-multipage-shim][ref1]
* Demonstrates loading multiple pages with a shared requirejs config.
* Demonstrates what parts of javascript is called when loading via console.log
* Shows example of using [grunt][ref2] & [grunt-contrib-requirejs][ref3]
* Grunt config to show how to avoid grunt.loadNpmTasks using grunt load-grunt-tasks.
* Show how to start two webserver connecting in dev mode and distribte mode to demonstrate requirejs loading before and after optimization.
* Example on running requirejs optimization through both grunt and through r.js using tools/build.js
* Extends multipage-shim example with html pages and javscript modules from different locations.

## Getting Started

The project can be built and run with grunt. This example requires node and npm to setup rest of the components. package.json lists all the node modules needed. All these can be installed with npm command. bower.json describes all the javascript libraries used and can be automitically downloaded suing bower command. Finally gurnt command builds and starts the project. 

* Clone [this github repositoy][ref4] or Download the zip [here][ref5].
* make sure node, npm are installed and install grunt-cli & bower globally by running following commands
```shell
	npm install -g grunt-cli
	npm install -g bower
```
* Install node packages from package.json using npm
```shell
	npm install 
```
* Install javascript components from bower.json using bower
```shell
	bower install
```
* Start the project using grunt. This will do jshint on the javascript, optimize using grunt-requirejs and finally start web servers for webapp and webapp/dist folders.
```shell
	grunt --force start
```

If you notice any URL conflict when starting up servers, you can change the ports in Gruntfile.js in connect task.

## Analyze script loading

Once you start up grunt, analyze how requiejs execution is happening by analyzing the chrome console. 
* Access development mode pages using following urls
	* [Dahboard page](http://localhost:9090/WEB-INF/views/index.html)
	* [Campaign module page](http://localhost:9090/WEB-INF/views/campaign/index.html)
* Access optmized mode pages using following urls
	* [Dahboard page](http://localhost:9091/WEB-INF/views/index.html)
	* [Campaign module page](http://localhost:9091/WEB-INF/views/campaign/index.html)

Open these URLs in chorome with Developer Tools open. Chek the Network tab on which files are getting loaded in both dev & dist modes. Check the Console tab to see what parts of javascript is getting and in which order.

## Resources

More information on requirejs: http://requirejs.org/docs/api.html

More information on requirejs optimizer: http://requirejs.org/docs/optimization.html

More information on npm: https://www.npmjs.org/doc/cli/npm.html

More information on bower configuration: http://bower.io/docs/config/

More information on grunt configuration: http://gruntjs.com/getting-started


[ref1]: https://github.com/requirejs/example-multipage-shim
[ref2]: http://gruntjs.com/
[ref3]: http://gruntjs.com/getting-started
[ref4]: https://github.com/vkkotha/multipage-requirejs-rjs.git
[ref5]: https://github.com/vkkotha/multipage-requirejs-rjs/archive/master.zip
