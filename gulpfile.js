var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('./src/js/app.jsx')
        .pipe(browserify({
            transform: ['6to5ify', 'reactify']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['default']);
});
