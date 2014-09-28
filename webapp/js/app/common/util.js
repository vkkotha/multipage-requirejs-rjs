console.log("app/common/util.js:Start");
define(["jquery", "./LoggerFactory"], function($, LoggerFactory) {
	console.log("app/common/util:defined");
	
	return {
		logger: function(name) {
			return LoggerFactory.getLogger(name);
		}
	}
});
console.log("app/common/util.js:End");
