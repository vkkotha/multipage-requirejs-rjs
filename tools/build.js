({
    appDir: "../webapp",
    mainConfigFile : "../webapp/js/common.js",
    baseUrl : "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "../webapp/dist",
    optimize: "none",
    modules: [{
    	name: "core-libs"
    }, {
        name: "all-libs",
        exclude: ["core-libs"]
    }, {
        name: "common",
        exclude: ["core-libs", "all-libs"]
    }, {
    	name: "app/dashboard",
    	exclude: ["common", "core-libs", "all-libs"]
    }, {
        name: "app/campaign",
        exclude: ["common", "core-libs", "all-libs"]
    }]
})