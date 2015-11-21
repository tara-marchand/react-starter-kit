// paths are relative to home directory
var sourceBase = './source';
var buildBase = './build';

module.exports = {
    paths: {
        nodeModules: './node_modules',
        base: {
            source: sourceBase,
            build: buildBase
        },
        scripts: {
            source: sourceBase + '/scripts',
            build: buildBase + '/scripts'
        },
        styles: {
            source: sourceBase + '/styles',
            build: buildBase + '/styles'
        }
    },

    isDev: function() {
        return (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined);
    }
};
