const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src(['./node_modules/bootstrap/less/bootstrap.less', './src/client/assets/css/site.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/assets/css'));
});
