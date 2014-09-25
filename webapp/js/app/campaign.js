define(["common", "all-libs", "app/campaign/index"], function(common, all, campaignIndex) {
	return function(options) {
		console.log("loading app/campaign.js");
		campaignIndex(options);
	}
});
