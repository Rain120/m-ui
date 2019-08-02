const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const less = require('gulp-less');
const path = require('path');

const browsers = [
    "last 4 version",
    "> 1%",
    "Firefox ESR",
    "ie >= 9",
    "iOS >= 8",
    "Android >= 4"
];

const getFilesPath = str => path.resolve(__dirname, str);

const paths = {
  dest: {
    lib: getFilesPath('./lib'),
    es: getFilesPath('./es'),
  },
  styles: [
    getFilesPath('./components/**/*.less')
  ],
  scripts: [
    getFilesPath('./components/**/*.ts'),
    getFilesPath('./components/**/*.tsx')
  ]
};

const copyLess2Dest = () => {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.es));
};

const buildLess2Css = () => {
  return gulp
    .src(paths.styles)
    .pipe(less())
    .pipe(autoprefixer(browsers))
    .pipe(cssnano({ reduceIdents: false, zindex: false }))
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.es));
};

exports.build = exports.default = gulp.parallel(copyLess2Dest, buildLess2Css);
