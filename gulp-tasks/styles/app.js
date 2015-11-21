var gulp = require('gulp');
var postcss = require('gulp-postcss');
var config = require('../config');

gulp.task('styles-app', function() {
    return gulp.src(config.paths.styles.source + '/app.css').pipe(
        postcss([
            require('precss')({ /* options */ })
        ])
    ).pipe(
        gulp.dest(config.paths.styles.build)
    );
});
