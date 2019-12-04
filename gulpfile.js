

const gulp = require('gulp');
const { series, src, dest } = gulp
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const del = require('del');

const mainPath = './main';
const themePath = mainPath + '/packages/theme';
const distPath = {
    locale: './lib/locale',
    utils: './lib/utils',
    theme: './lib/theme'
}

function compile(cb) {
    src(themePath + '/src/**/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest(themePath + '/lib'));
    cb()
}

function copyfont(cb) {
    src(themePath +'/src/font/**')
        .pipe(cssmin())
        .pipe(dest(themePath + '/lib/font'))
    cb()
}

function copy(cb){
    // 复制编译好的style
    src(themePath + '/lib/**/**')
        .pipe(dest(distPath.theme))
    // 复制locale目录
    src(mainPath + '/locale/**/**')
        .pipe(dest(distPath.locale))
    // 复制utils目录
    src(mainPath + '/utils/**/**')
        .pipe(dest(distPath.utils))
    cb()
}


function clean(cb){
    del.sync([
        distPath.theme,
        distPath.locale
    ])
    cb()
}

exports.compile = compile
exports.copyfont = copyfont
exports.copy = copy
exports.clean = clean
exports.build = series(compile, copyfont)