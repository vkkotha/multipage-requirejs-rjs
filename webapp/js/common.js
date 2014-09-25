require.config({
  paths: {
    bootstrap: 'lib/bootstrap/dist/js/bootstrap',
    jquery: 'lib/jquery/dist/jquery',
    jqueryui: 'lib/jquery-ui/jquery-ui',
    underscore: 'lib/underscore/underscore'
  },
  shim: {
    bootstrap: {
      deps: [ 'jquery' ]
    },
    'underscore': {
      exports: '_'
    },
    jqueryui: {
      deps: ['jquery']
    }
  }/*,
  bundles: {
    "core-libs": ["jquery", "bootstrap", "underscore"],
    "all-libs": ["jqueryui"]
  }*/
});	

require(["core-libs", "all-libs", "app/common/index"], function() {
  console.log("Loaded Common/index");
});