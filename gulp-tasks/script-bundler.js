var gulp = require('gulp');
var config= require('./config');
var handleErrors = require('./error-handler');
var browserify = require('browserify');
var objectAssign = require('object-assign');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var gutil = require('gulp-util');

// based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
module.exports = function(bundleProperties, options) {
    var bundler = browserify(objectAssign(bundleProperties, { extensions: ['.jsx'] }));
    var isDev = options.isDev;

    if (isDev) {
        watchify(bundler);
    }

    bundler.transform('babelify', {
        presets: [
            'es2015',
            'react'
        ]
    });

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
