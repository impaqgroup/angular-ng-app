'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    app: 'app',

    watch: {
      livereload: {
        files: ['<%= app %>/**/*.js', '<%= app %>/**/*.html', '<%= app %>/**/*.css'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true
        }
      }
    }
  });

  grunt.registerTask('server', ['connect:livereload', 'watch']);
  grunt.registerTask('default', ['server']);
};
