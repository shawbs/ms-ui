

const gulp = require('gulp');
const { series, src, dest } = gulp
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const del = require('del');
const mainPath = './src/main';
const themePath = './src/main/packages/theme';

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
    src(themePath + '/lib/**/**')
        .pipe(dest('./lib/theme'))
    cb()
}

function i18n(){
    return src(mainPath + '/locale/**/**')
        .pipe(dest('./lib/locale/'))
}

function clean(cb){
    del.sync([
        './lib/theme',
        './lib/locale'
    ])
    cb()
}

exports.compile = compile
exports.copyfont = copyfont
exports.copy = copy
exports.i18n = i18n
exports.clean = clean
exports.build = series(compile, copyfont)