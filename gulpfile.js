var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var destFolder = './build/scripts';

function bundleLib() {
    return browserify(['./node_modules/react/dist/react.js', './node_modules/react-dom/dist/react-dom.js'])
        .bundle({ debug: true })
        .pipe(source('lib.js'))
        .pipe(gulp.dest(destFolder));
}

function bundleApp() {
    return browserify('./source/scripts/app.js')
        .bundle({ debug: true })
        .pipe(source('app.js'))
        .pipe(gulp.dest(destFolder));
}

gulp.task('lib', bundleLib);
gulp.task('app', bundleApp);

gulp.task('watch', function() {
    var bundleThis = function(sources, destName) {
        var bundle = browserify(["./js/" + source + ".js"]).bundle();

        bundle.pipe(source(source + "Bundle.js"))
              .pipe(gulp.dest(destDir));
    };

    bundleThis(['app', 'lib']);
});

gulp.task('build', [
    'app',
    'lib'
]);

gulp.task('default', ['browserify', 'watch']);
