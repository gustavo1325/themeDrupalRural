var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "styles/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "styles"
    }
  };


// Define tasks after requiring dependencies
function style() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)

    return gulp
      .src(paths.styles.src)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest(paths.styles.dest));


}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

function watch(){
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change

    style();

    gulp.watch(paths.styles.src, style);
}

// Don't forget to expose the task!
exports.watch = watch
