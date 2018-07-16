const print = require('gulp-print').default;
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const sources = {
    client: './src/client/'
};

gulp.task('copy:html', function() {
    return gulp.src(`${sources.client}**/*.html`)
        .pipe(print())
        .pipe(gulp.dest('dist'));
});
gulp.task('copy:css', function() {
    return gulp.src([`${sources.client}**/*.css`])
        .pipe(print())
        .pipe(gulp.dest('dist/assets/css'));
});
gulp.task('copy:js', function() {
    return gulp.src(`${sources.client}**/*.js`)
        .pipe(print())
        .pipe(gulp.dest('dist/'));
});
gulp.task('copy:json', function() {
    return gulp.src(`${sources.client}**/*.json`)
        .pipe(print())
        .pipe(gulp.dest('dist/'));
});
gulp.task('copy:libs', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.js', './node_modules/@json-editor/json-editor/dist/jsoneditor.js'])
        .pipe(print())
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('copy:fonts', function() {
    return gulp.src(['./node_modules/bootstrap/fonts/*'])
        .pipe(print())
        .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('copy', ['copy:js', 'copy:css', 'copy:html', 'copy:libs', 'copy:json', 'copy:fonts']);