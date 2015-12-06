var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var config = require('./config');
var bundleScripts = require('./script-bundler');
var handleErrors = require('./error-handler');

/**
 * Markup (HTML)
 */

gulp.task('serve.markup', function() {
    return gulp.src(path.join(config.paths.base.source, '/**/*.html'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.paths.base.tmp));
});
gulp.task('serve.markup.watch', [ 'serve.markup' ], browserSync.reload);

/**
 * Styles (CSS)
 */

gulp.task('serve.styles', function() {
    // copy bootstrap CSS
    fs.createReadStream(path.join(config.paths.nodeModules, '/bootstrap/dist/css/bootstrap.min.css'))
        .pipe(fs.createWriteStream(path.join(config.paths.styles.tmp, 'bootstrap.min.css')));
    // compile our CSS
    return gulp.src(path.join(config.paths.styles.source, '/**/*.css'))
        .pipe(postcss([ require('precss')({ /* options */ }) ]))
        .pipe(gulp.dest(config.paths.styles.tmp));
});
gulp.task('serve.styles.watch', [ 'serve.styles' ], browserSync.reload);

/**
 * Scripts (JS)
 */

gulp.task('serve.scripts.lib', function() {
    // library scripts bundle and watchify
    return bundleScripts(
        {
            require: config.dependencies
        }, {
            name: 'lib.js',
            dest: config.paths.scripts.tmp,
            isDev: true // uses watchify instead of browserify
        }
    );
});

gulp.task('serve.scripts.app', function() {
    // app scripts bundle and watchify
    return bundleScripts(
        {
            bundleExternal: false,
            debug: true,
            entries: [ path.join(config.paths.scripts.source, '/index.jsx') ],
            external: config.dependencies
        }, {
            browserSync: browserSync,
            dest: config.paths.scripts.tmp,
            isDev: true, // uses watchify instead of browserify
            name: 'app.js'
        }
    );
});

/**
 * Overall task including markup, styles, and scripts
 */

gulp.task('serve', [ 'serve.markup', 'serve.styles', 'serve.scripts.lib', 'serve.scripts.app' ], function() {
    browserSync.init({
        server: config.paths.base.tmp
    });

    gulp.watch(path.join(config.paths.base.source, '/**/*.html'), [ 'serve.markup.watch' ]);
    gulp.watch(path.join(config.paths.styles.source, '/**/*.css'), [ 'serve.styles.watch' ]);
});
