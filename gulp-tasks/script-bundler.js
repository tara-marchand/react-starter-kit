var gulp = require('gulp');
var config= require('./config');
var handleErrors = require('./error-handler');
var browserify = require('browserify');
var objectAssign = require('object-assign');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var babelify = require('babelify');

// based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
module.exports = function(bundleProperties, options) {
    var isDev = options.isDev;

    var bundler = browserify(objectAssign(bundleProperties, {
        extensions: [ '.jsx' ] ,
        transform: [ [ babelify, {} ] ]
    }));

    if (isDev) {
        watchify(bundler);
    }

    function bundle() {
        return bundler.bundle()
            .on('error', handleErrors)
            .pipe(source(options.name))
            .pipe(gulp.dest(options.dest));
    }

    if (isDev) {
        bundler.on('update', function() {
            if (options.browserSync) {
                // reload browsers
                bundle().pipe(options.browserSync.stream({
                    once: true
                }));
            }
            gutil.log('Bundle...');
        });
    }

    return bundle();
};
