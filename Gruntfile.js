module.exports = function(grunt) {

  var latest = '<%= pkg.name %>';
  var releaseDir = 'release/';
  var devRelease = releaseDir + latest + '.js';
  var bannerContentMin = '/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> \n' +
                  '<%= pkg.author.name %> |' +
                  '<%= pkg.author.address %> | ' +
                  '<%= pkg.author.email %> | ' +
                  '<%= pkg.author.twitter %> | ' +
                  'License: <%= pkg.license %> */\n';

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    clean: [releaseDir],
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      target: {
        src: ['src/**/*.js']
      }
    },
    uglify: {
      options: {
        banner: bannerContentMin,
        report: 'min',
        sourceMap: true
      },
      target: {
        src: [releaseDir + latest + '.js'],
        dest: releaseDir + latest + '.min.js'
      }
    },
    copy: {
      publicJS: {
        expand: true,
        cwd: releaseDir,
        src: ['*.min.js', '*.min.js.map'],
        dest: 'public/scripts/',
        flatten: true,
        filter: 'isFile'
      },
      publicCSS: {
        expand: true,
        cwd: releaseDir,
        src: '*.css',
        dest: 'public/css/',
        flatten: true,
        filter: 'isFile'
      }
    },
    exec: {
      test: 'npm test',
      coverage: 'browserify -t coverify test/*.js | testling | coverify',
      browserify: 'mkdir release && browserify ./src/vector2d-lib.js --standalone Vector -o ' + devRelease
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['jshint'],
    },
    plato: {
      options: {},
      your_target: {
        files: {
          'reports': ['src/**/*.js'],
        }
      }
    },
    jsdoc : {
        dist : {
            src: ['src/*.js', 'README.md'],
            options: {
                destination: 'doc'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('default', ['clean', 'exec:browserify', 'copy:publicJS']);
  grunt.registerTask('release', ['clean', 'jshint', 'exec:browserify', 'uglify', 'copy:publicJS', 'jsdoc', 'plato']);
  grunt.registerTask('test', ['exec:test']);
  grunt.registerTask('coverage', ['exec:coverage']);
  grunt.registerTask('report', ['plato']);
  grunt.registerTask('doc', ['jsdoc']);
  grunt.registerTask('lint', ['jshint']);

};

