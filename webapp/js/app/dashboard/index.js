console.log("app/dashboard/index.js:Start");
define(["jquery", "app/common/util"], function($, util) {
	console.log("app/dashboard/index: defined");
	return function(options) {
		console.log("app/dashboard/index: initialized", options);
		var logger = util.logger('app/dashboard/index');
		logger.info("%s util.logger info", "hello");
		logger.debug("%s util.logger debug", "hello");
		logger.warn("%s util.logger warn", "hello");
		logger.error("%s util.logger error", "hello");
		logger.log("%s util.logger", "hello");
	}
});
console.log("app/dashboard/index.js:End");
