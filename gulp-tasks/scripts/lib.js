var gulp = require('gulp');
var config = require('../config');
var bundleScripts = require('./bundler');

gulp.task('script-lib', function() {
    return bundleScripts(
        {
            entries: [
                config.paths.nodeModules + '/react-dom/dist/react-dom.js'
            ]
        }, {
            name: 'lib.js',
            dest: config.paths.scripts.build
        });
});
