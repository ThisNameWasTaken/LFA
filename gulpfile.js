const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['htmlmin']);

gulp.task('htmlmin', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});