const gulp = require('gulp');
require('./scripts/copy');
require('./scripts/less');
require('./scripts/babel');

gulp.task('default', ['copy', 'less', 'babel']);