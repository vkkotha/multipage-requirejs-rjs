({
    appDir: "../webapp",
    mainConfigFile : "../webapp/js/main.js",
    baseUrl : "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "../webapp/dist",
    optimize: "none",
    wrapShim: true,
    modules: [{
        name: "main"
    }, {
        name: "app/modules/dashboard",
        exclude: ["main"]
    }, {
        name: "app/modules/campaign",
        exclude: ["main", "jqueryui"]
    }]
})