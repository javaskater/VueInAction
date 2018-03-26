const gulp = require('gulp');
const del = require('del');
const markdown = require('gulp-markdown');
var markdownDocs = require('gulp-markdown-docs');
const rename = require('gulp-rename');
 
const srcDocs = "docs";
const distDocs = "htmldocs";

/*
* https://github.com/sindresorhus/gulp-markdown/issues/1
* to rename the generated file from md to html
* but the real usage i now https://www.npmjs.com/package/gulp-rename#usage
*/
gulp.task('md_html', () =>
    gulp.src(`${srcDocs}/**/*.md`)
        .pipe(markdown())
        .pipe(rename(function (path) {
            path.extname = ".html"
          }))
        .pipe(gulp.dest(distDocs))
);

gulp.task('md_html_highlight', function(){
    return gulp.src(`${srcDocs}/**/*.md`)
        .pipe(markdownDocs('concatenated_mds.html',{}))
        .pipe(gulp.dest(distDocs))
});


gulp.task('default',['md_html','md_html_highlight']);


gulp.task('clean_html_doc', function(){
    return del(`${distDocs}/**`, {force:true});
});

gulp.task('clean', ['clean_html_doc']);