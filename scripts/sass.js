const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './src/client/assets/css/site.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'));
});