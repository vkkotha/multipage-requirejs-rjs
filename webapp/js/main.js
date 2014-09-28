console.log("main.js:Start");

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
  }
});	

require(["jquery", "bootstrap", "underscore", "app/modules/common"], function() {
   console.log("main: defined/Loaded common code and libraries");
});

console.log("main.js:End");
