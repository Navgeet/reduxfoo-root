module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      main: {
        options: {
	port: 9001,
        keepalive: true,
        hostname: '*'
      }}
    },

    wiredep: {
      app: {
        src: 'index.html'
      }
    },

    useminPrepare: {
      html: 'index.html',
      options: {
        flow: {
          html: {
            steps: {
              js: ['concat']
            },
            post: {}
          }
        }
      }
    }
  });

  grunt.registerTask('build', [ 'wiredep', 'useminPrepare', 'concat:generated' ]);
  grunt.registerTask('serve', [ 'wiredep', 'connect:main' ]);
  
};
