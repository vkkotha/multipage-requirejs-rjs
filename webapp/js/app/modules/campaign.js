console.log("app/modules/campaign.js:Start");
define(["app/campaign/index"], function(campaignIndex) {	
	console.log("app/modules/campaign:defined");
	return function(options) {
		console.log("app/modules/campaign:initialized", options);
		campaignIndex(options);
	}
});
console.log("app/modules/campaign.js:End");
