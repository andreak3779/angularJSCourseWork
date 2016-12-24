//File: chapter3
module.exports = function(config) {
    config.set({
        //base path that will be used to resolve files and exclude 
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'angular.min.js',
            'angular-mocks.js',
            'controller.js',
            'simpleSpec.js',
            'controllerSpec.js'
        ],

        exclude: [],

        port: 8080,

        logLevel: config.LOG_INFO,

        browsers: ['Chrome'],
        singleRun: false
    });
};