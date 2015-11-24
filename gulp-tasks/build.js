var gulp = require('gulp');
var path = require('path');
var postcss = require('gulp-postcss');
var config = require('./config');
var bundleScripts = require('./script-bundler');
var handleErrors = require('./error-handler');

gulp.task('build.markup', function() {
    return gulp.src(path.join(config.paths.base.source, '/**/*.html'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.paths.base.build));
});

gulp.task('build.styles', function() {
    return gulp.src(path.join(config.paths.styles.source, '/**/*.css'))
        .pipe(postcss([ require('precss')({ /* options */ }) ]))
        .pipe(gulp.dest(config.paths.styles.build));
});

gulp.task('build.scripts', function() {
    // library scripts bundle and watchify
    bundleScripts(
        {
            entries: [ path.join(config.paths.nodeModules, '/react-dom/dist/react-dom.js') ]
        }, {
            name: 'lib.js',
            dest: config.paths.scripts.build,
            isDev: false // uses browserify instead of watchify
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
            dest: config.paths.scripts.build,
            isDev: false, // uses browserify instead of watchify
            name: 'app.js'
        }
    );
});

gulp.task('build', [ 'build.markup', 'build.styles', 'build.scripts' ]);
