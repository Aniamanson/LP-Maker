'use stric';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
         stream: true}))
});

gulp.task('sass:watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

var paths = {
    html:['/.html'],
    css:['./sass/**/*.scss']
};

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('/.html', ['html']);
});