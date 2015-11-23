var gulp = require('gulp');
var config = require('./config');
var bundleScripts = require('./script-bundler');

gulp.task('app', function() {
    return bundleScripts(
        {
            bundleExternal: false,
            entries: [
                config.paths.scripts.source + '/app.js'
            ]
        }, {
            name: 'app.js',
            dest: config.paths.scripts.build
        });
});
