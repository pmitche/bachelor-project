module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage'],


    // list of files / patterns to load in the browser
    files: [
      'public_html/libs/angular/angular.min.js',
      'public_html/libs/angular/angular-mocks.js',
      'public_html/Javascript/*.js',
      'public_html/javascript/**/*.js',
      'public_html/test/*.js'

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

  //  preprocessors: {'tmp/scripts/**/*.js': 'coverage'
    //},

reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [{
                    type: 'cobertura',
                    dir: 'coverage/',
                    subdir: 'firefox',
                    file: 'firefox.xml'
                },{
                    type: 'json',
                    dir: 'coverage/',
                    subdir: 'json',
                    file: 'coverage.json'
                }]
        },
        preprocessors: {'**/public_html/javascript/**/*.js': ['coverage']},
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['dots','progress','coverage'],
    //preprocessors: {
    //    '**/Javascript/*.js':'coverage'
    //},





    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};