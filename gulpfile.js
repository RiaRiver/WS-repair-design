const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});