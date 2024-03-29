const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('tarea', function(cb){
    console.log('Contruyendo el sitio');
    setTimeout(cb, 1200);
});

gulp.task('serve', function(cb){
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('default', gulp.series('tarea', 'serve'))