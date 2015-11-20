var gulp = require('gulp');

var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var destinationPath = './dist';
var typescriptPath = './keepclone/**/*.ts';
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build.typescript', function (release) {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(gulp.dest('./dist'));
});

var viewsPath = './keepclone/**/*.html';
gulp.task('copyviews', function (release) {
    gulp.src(viewsPath)
        .pipe(gulp.dest('./dist/keepclone'));
    return gulp.src('./views/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copylib', function () {

    gulp.src('./node_modules/font-awesome/css/*.*')
        .pipe(gulp.dest('./dist/font-awesome/css'));
    gulp.src('./node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('./dist/font-awesome/fonts'));

    gulp.src('./node_modules/systemjs/dist/system.js')
        .pipe(gulp.dest('./dist/systemjs'));
    gulp.src('./node_modules/jquery/dist/**/*.*')
        .pipe(gulp.dest('./dist/jquery'));
    gulp.src('./node_modules/materialize-css/dist/**/*.*')
        .pipe(gulp.dest('./dist/materialize-css'));

    gulp.src('./node_modules/underscore/underscore.js')
        .pipe(gulp.dest('./dist/underscore'));

    return gulp.src('./node_modules/angular2/bundles/angular2.js')
        .pipe(gulp.dest('./dist/angular2'));
});

gulp.task('build', function () {
    var tasks = ['build.typescript', 'copyviews', 'copylib'];
    runSequence(tasks);
});

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('watch', function () {
    gulp.watch(typescriptPath, ['build.typescript']);
    gulp.watch(viewsPath, ['copyviews']);
    gulp.watch('./views/index.html', ['copyviews'])
});