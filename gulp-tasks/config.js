var path = require('path');

// paths are relative to home directory
var sourceBase = './source';
var buildBase = './build';
var tmpBase = './.tmp';

var scriptsDir = '/scripts';
var stylesDir = '/styles';

module.exports = {
    paths: {
        nodeModules: './node_modules',
        base: {
            source: sourceBase,
            build: buildBase,
            tmp: tmpBase
        },
        scripts: {
            source: path.join(sourceBase, scriptsDir),
            build: path.join(buildBase, scriptsDir),
            tmp: path.join(tmpBase, scriptsDir)
        },
        styles: {
            source: path.join(sourceBase, stylesDir),
            build: path.join(buildBase, stylesDir),
            tmp: path.join(tmpBase, stylesDir)
        }
    },
    // external dependencies, to be bundled separately in "lib"
    dependencies: [ 'react', 'react-dom', 'object-assign', 'redux', 'react-redux' ]
};
