console.log("app/campaign/index.js:Start");
define(["jqueryui"], function() {
	console.log("app/campaign/index: defined");
	return function(options) {
		console.log("app/campaign/index: initialized", options);
	}
});
console.log("app/campaign/index.js:End");
