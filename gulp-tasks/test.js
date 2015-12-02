var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');

/**
* Test JavaScript
*/

gulp.task('test', function() {
    return gulp.src('./tests/components/**/*.js', {
            read: false
        })
        .pipe(mocha(
            {
                compilers: {
                    // uses .babelrc options
                    js: babel
                }
            }
        ));
});
