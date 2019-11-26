

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
            browsers: ['ie > 9', 'last 2 versions'],
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
    return src(mainPath + '/locale/lang/**')
        .pipe(dest('./lib/locale/lang'))
}

function clean(cb){
    del.sync([
        './lib/theme',
        themePath + '/lib'
    ])
    cb()
}

exports.compile = compile
exports.copyfont = copyfont
exports.copy = copy
exports.i18n = i18n
exports.clean = clean
exports.build = series(compile, copyfont)