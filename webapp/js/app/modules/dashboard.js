console.log("app/modules/dashboard.js:Start");
define(["app/dashboard/index"], function(dashboardIndex) {	
	console.log("app/modules/dashboard:defined");
	return function(options) {
		console.log("app/modules/dashboard:initialized", options);
		dashboardIndex(options);
	}
});
console.log("app/modules/dashboard.js:End");
