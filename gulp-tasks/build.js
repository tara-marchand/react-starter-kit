var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var postcss = require('gulp-postcss');
var config = require('./config');
var bundleScripts = require('./script-bundler');
var handleErrors = require('./error-handler');

/**
 * Markup (HTML)
 */

gulp.task('build.markup', function() {
    return gulp.src(path.join(config.paths.base.source, '/**/*.html'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.paths.base.build));
});

/**
 * Styles (CSS)
 */

gulp.task('build.styles', function() {
    // copy bootstrap CSS
    fs.createReadStream(path.join(config.paths.nodeModules, '/bootstrap/dist/css/bootstrap.min.css'))
        .pipe(fs.createWriteStream((path.join(config.paths.styles.build, 'bootstrap.min.css'))));
    return gulp.src(path.join(config.paths.styles.source, '/**/*.css'))
        .pipe(postcss([ require('precss')({ /* options */ }) ]))
        .pipe(gulp.dest(config.paths.styles.build));
});

/**
 * Scripts (JS)
 */

gulp.task('build.scripts.lib', function() {
    // library scripts bundle and watchify
    return bundleScripts(
        {
            entries: [ path.join(config.paths.nodeModules, '/react-dom/dist/react-dom.js') ]
        }, {
            name: 'lib.js',
            dest: config.paths.scripts.build,
            isDev: false // uses browserify instead of watchify
        }
    );
});

gulp.task('build.scripts.app', function() {
    // app scripts bundle and watchify
    return bundleScripts(
        {
            bundleExternal: false,
            debug: true,
            entries: [ path.join(config.paths.scripts.source, '/app.js') ],
            external: config.dependencies
        }, {
            dest: config.paths.scripts.build,
            isDev: false, // uses browserify instead of watchify
            name: 'app.js'
        }
    );
});

/**
 * Overall task including markup, styles, and scripts
 */

gulp.task('build', [ 'build.markup', 'build.styles', 'build.scripts.lib', 'build.scripts.app' ]);
