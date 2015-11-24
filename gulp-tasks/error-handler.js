var notify = require('gulp-notify');

module.exports = function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // keep gulp from hanging on this task
};
