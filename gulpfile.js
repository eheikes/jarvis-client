var gulp = require('gulp');

require('./gulp/client');

gulp.task('build', ['build:client']);
gulp.task('serve', ['serve:client']);
