const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');


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

exports.build_css = build_css;
exports.build_images = build_images;
exports.live = function() {
    return watch(['src/'], {}, parallel(build_css, build_images, build_fonts));
};
exports.default = parallel(build_css, build_images, build_fonts);
