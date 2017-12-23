const fs = require('fs')
const gulp = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')

const outputPath = 'docs'
const themePath = 'themes/simple/template.ejs'

gulp.task('ejs', () => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  const template = themePath

  for (let i = 0; i < data.length; i++) {
    gulp.src(template)
      .pipe(ejs({
        meta: {
          title: data[0].title
        },
        data: {
          all: data,
          item: data[i]
        }
      }))
      .pipe(rename(`${data[i].id}.html`))
      .pipe(gulp.dest(outputPath))
  }
})
