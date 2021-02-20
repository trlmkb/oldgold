/**
 * Grunt commands
 *
 *  default         - watches styles
 *  dev             - builds dev
 *  build           - builds production
 *  
 *
 */


module.exports = function (grunt) {

  // Load grunt modules

  require('load-grunt-tasks')(grunt);

  // Vars

  var path      = 'public';
  var resources = 'resources/assets';
  var libsass   = false;
  var stylesDevTask, stylesWatchTask, stylesBuildTask

  // Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*-------------------------------------/
    //  Style tasks
    //------------------------------------*/

    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: {
          'public/js/particles.js' : 'resources/assets/babel/particles.js'
        }
      }
    },

    compass: {
      options: {
        require : ['modernizr-mixin', 'sass-globbing']
      },
      dev: {
        options: {
          httpPath       : path,
          cssDir         : path + "/precss",
          sassDir        : resources + "/sass",
          imagesDir      : path + "/images",
          javascriptsDir : path + "/js",
          fontsDir       : path + "/fonts",
          outputStyle    : "expanded",
          relativeAssets : true,
          noLineComments : true,
          boring         : false,
          sourcemap      : true,
          watch          : true
        }
      },
      build: {
        options: {
          httpPath       : path,
          cssDir         : path + "/precss",
          sassDir        : resources + "/sass",
          imagesDir      : path + "/images",
          javascriptsDir : path + "/js",
          fontsDir       : path + "/fonts",
          outputStyle    : "compressed",
          environment    : 'production',
          relativeAssets : true,
          noLineComments : true,
          boring         : true,
          sourcemap      : false
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourceMap: true
        },
        files: [{
           expand: true,
           cwd: resources + '/sass',
           src: ['**/*.sass'],
           dest: path + '/precss',
           ext: '.css'
        }]
      },
      build: {
        options: {
          sourceMap: false
        },
        files: [{
           expand: true,
           cwd: 'scss/',
           src: ['**/*.scss'],
           dest: 'css/',
           ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        syntax: require('postcss-scss'),
        parser: require('postcss-scss')
      },
      dev: {
        options: {
          map: true,
          processors: [
            require('postcss-strip-inline-comments'),
            require('postcss-sorting'),
            require('postcss-assets')({loadPaths: [path+ '/images/']}),
            require('autoprefixer')({browsers: ['> 0%']})
          ]
        },
        files: [{
          expand: true,
          cwd: path + "/precss/",
          src: ["*.css", "pages/**/*.css"],
          dest: path + "/css"
        }]
      },
      build: {
        options: {
          map: false,
          processors: [
            require('postcss-strip-inline-comments'),
            require('postcss-sorting'),
            require('postcss-assets')({loadPaths: [path+ '/images/']}),
            require('autoprefixer')({browsers: ['> 0%']}),
            require('cssnano')()
          ]
        },
        files: [{
          expand: true,
          cwd: path + "/precss",
          src: ["*.css", "pages/**/*.css"],
          dest: path + "/css"
        }]
      },
      lint: {
        options: {
          processors: [
            require("stylelint")({ /* your options */ }),
            require("postcss-reporter")({ clearMessages: true })
          ]
        },
        files: [{
          expand: true,
          cwd: path + "/precss/",
          src: ["*.css", "pages/**/*.css"],
          dest: path + "/css"
        }]
      }
    }, // postcss

    /*-------------------------------------/
    //  Clean
    //------------------------------------*/

    clean: {
      cssmaps: [path + "/css/*.css.map"],
      precss: [path + "/precss"]
    },

    /*------------------------------------//
    //  Concat
    //------------------------------------*/
    concat: {
      options: {
      },
      vendor: {
        src: [path + '/js/vendor/*.js'],
        dest: path + '/js/vendor.js'
      },
    },
    /*------------------------------------//
    //  Minify
    //------------------------------------*/
    uglify: {
      vendor: {
        files: {
          'public/js/vendor.min.js' : ['public/js/vendor.js']
        }
      },
      app: {
        files: {
          'public/js/app.min.js' : ['public/js/app.js']
        }
      }
    },
    
    /*-------------------------------------/
    //  Concurrent
    //------------------------------------*/
    
    concurrent: {
      watch: {
        tasks: ['watch', 'compass:dev'],
        // tasks: ['watch', 'sass:dev'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    /*-------------------------------------/
    //  Assets
    //------------------------------------*/
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: [path + "/images/**/*.{png,jpg,gif,jpeg}"]
        }]
      }
    },

    /*-------------------------------------/
    //  Watch
    //------------------------------------*/

    watch: {
      // sass: {
      //   files: [resources + "/sass/**/*.sass"],
      //   tasks: ['sass:dev']
      // },
      jsvendor: {
        files: [path + "/js/vendor/**/*.js"],
        tasks: ['concat:vendor', 'uglify:vendor']
      },
      jsapp: {
        files: [path + "/js/app.js"],
        tasks: ['uglify:app']
      },
      babel: {
        files: ['resources/assets/babel/**/*.js'],
        tasks: ['babel']
      },
      postcss: {
        files: [path + "/precss/**/*.css"],
        tasks: ['postcss:dev']
      },
      css: {
        files: [path + "/css/**/*.css"]
      },
      livereload: {
        files: [path + "/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    },
    notify: {
      js_compiled: {
        options: {
          title: 'Task Complete', 
          message: 'Grunt finished running.',
        }
      }
    }
  });


  // Tasks
  // 

  if(libsass) {
    stylesWatchTask = 'watch';
    stylesDevTask   = 'sass:dev';
    stylesBuildTask = 'sass:build';
  }
  else {
    stylesWatchTask = 'concurrent:watch';
    stylesDevTask   = 'compass:dev';
    stylesBuildTask = 'compass:build';

  }

  // Default task.
  grunt.registerTask('default', [
    stylesWatchTask
  ]);

  // Build vendor js
  grunt.registerTask('vendor', [
    'concat:vendor',
    'uglify:vendor'
  ]);

  // Build app js
  grunt.registerTask('app', [
    'uglify:app'
  ]);

  // Dev
  grunt.registerTask('dev', [
    'postcss:dev',
    stylesDevTask
  ]);

  // Build
  grunt.registerTask('build', [
    // 'imagemin',
    stylesBuildTask,
    'postcss:build',
    'concat:vendor',
    'uglify:vendor',
    'uglify:app',
    'clean:precss'
  ]);

};