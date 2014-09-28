console.log("app/modules/common.js:Start");
define(["app/common/index"], function(common) {	
	console.log("app/modules/common:defined");
	return function(options) {
		console.log("app/modules/common:initialized");
	}
});
console.log("app/modules/common.js:End");
