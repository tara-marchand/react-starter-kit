var gulp = require('gulp');
var config= require('./config');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var gutil = require('gulp-util');

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // keep gulp from hanging on this task
}

// based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
// options: { name: String, dest: String}
module.exports = function(bundleProperties, options) {
    var bundler = browserify(bundleProperties);

    if (config.isDev()) {
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

    if (options.isDev) {
        bundler.on('update', function() {
            rebundle();
            gutil.log('Rebundle...');
        });
    }

    return bundle();
};
