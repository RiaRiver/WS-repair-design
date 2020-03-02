const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const minifyCSS = require("gulp-csso");
const rename = require("gulp-rename");

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});

gulp.task("min-css", () => {
  return gulp
    .src("./src/css/*.css")
    .pipe(minifyCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./dist/css"));
});