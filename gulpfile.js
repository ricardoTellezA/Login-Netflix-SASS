const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

function css(){
    return gulp
           .src('scss/app.scss')
           .pipe(autoPrefixer({
               overrideBrowsersList:['last 2 versions'],
               cascade:false
           }))
           .pipe(sass({
               outputStyle:'expanded', //nested,compact,compressed
           }))
           .pipe(gulp.dest('css'));
}

function watchFiles(){
    gulp.watch('scss/*.scss',css);
    gulp.watch('index.html');
}
//REGISTRAR FUNCIONES COMO TAREA

gulp.task('css',css);

gulp.task('watch', gulp.parallel(watchFiles));
 

