module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, ['grunt-*']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['webapp/dist'],
    jshint: {
      files: ['Gruntfile.js', 'webapp/js/**/*.js', !'webapp/js/lib/**'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: "webapp",
          mainConfigFile : "webapp/js/main.js",
          baseUrl : "js",
          removeCombined: true,
          findNestedDependencies: true,
          dir: "webapp/dist",
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
        }
      }
    },
    connect: {
      serverDev: {
        options: {
          port: 9090,
          base: 'webapp'
        }
      },
      serverDist: {
        options: {
          port: 9091,
          base: 'webapp/dist'
        }
      }
    },
    watch: {
      js: {
        files: ['webapp/js/**/*.js'],
        tasks: ['jshint', 'requirejs']
      },
      html: {
        files: ['webapp/WEB-INF/**/*.html'],
        tasks: ['requirejs']
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['jshint', 'requirejs']
      }
    }
  });


  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint', 'clean', 'requirejs']);

  grunt.registerTask('start', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['build']);

};