const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function build_css() {
    return src("src/scss/*.scss")
        .pipe(sass())
        .pipe(dest("public/css"));
}

function build_images() {
    return src("src/images/*")
        .pipe(dest("public/images"))
}

function build_fonts() {
    return src("src/fonts/*")
        .pipe(dest("public/fonts/"))
}

function build_scripts() {
    return src("js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(dest("public/js"));
}

exports.build_css = build_css;
exports.build_images = build_images;
exports.build_scripts = build_scripts;
exports.live = function() {
    return watch(['src/'], {}, parallel(build_css, build_images, build_fonts, build_scripts));
};
exports.default = parallel(build_css, build_images, build_fonts, build_scripts);
