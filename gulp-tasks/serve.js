var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var config = require('./config');
var bundleScripts = require('./script-bundler');
var handleErrors = require('./error-handler');

gulp.task('serve.markup', function() {
    return gulp.src(path.join(config.paths.base.source, '/**/*.html'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.paths.base.tmp));
});
gulp.task('serve.markup.watch', [ 'serve.markup' ], browserSync.reload);

gulp.task('serve.styles', function() {
    return gulp.src(path.join(config.paths.styles.source, '/**/*.css'))
        .pipe(postcss([ require('precss')({ /* options */ }) ]))
        .pipe(gulp.dest(config.paths.styles.tmp));
});
gulp.task('serve.styles.watch', [ 'serve.styles' ], browserSync.reload);

gulp.task('serve.scripts', function() {
    // library scripts bundle and watchify
    bundleScripts(
        {
            require: config.dependencies
        }, {
            name: 'lib.js',
            dest: config.paths.scripts.tmp,
            isDev: true // uses watchify instead of browserify
        }
    );

    // app scripts bundle and watchify
    bundleScripts(
        {
            bundleExternal: false,
            debug: true,
            entries: [ path.join(config.paths.scripts.source, '/app.js') ],
            external: config.dependencies
        }, {
            browserSync: browserSync,
            dest: config.paths.scripts.tmp,
            isDev: true, // uses watchify instead of browserify
            name: 'app.js'
        }
    );
});

gulp.task('serve', [ 'serve.markup', 'serve.styles', 'serve.scripts' ], function() {
    browserSync.init({
        server: config.paths.base.tmp
    });

    gulp.watch(path.join(config.paths.base.source, '/**/*.html'), [ 'serve.markup.watch' ]);
    gulp.watch(path.join(config.paths.styles.source, '/**/*.css'), [ 'serve.styles.watch' ]);
});
