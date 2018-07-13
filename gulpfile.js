const gulp = require('gulp');
require('./scripts/copy');
require('./scripts/sass');
require('./scripts/babel');

gulp.task('default', ['copy', 'babel']);