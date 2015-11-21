var gulp = require('gulp');
var config = require('../config');
var bundleScripts = require('./bundler');

gulp.task('script-app', function() {
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
