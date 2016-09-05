var gulp = require('gulp');
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


/**
 * Copy any needed files
 * 
 * Do a 'gulp copyfiles' after bower updates
 */
gulp.task("copyfiles", function(){
    gulp.src("bower_components/jquery/dist/jquery.js")
        .pipe(gulp.dest("resources/assets/js/"));

    gulp.src("bower_components/bootstrap/less/**")
        .pipe(gulp.dest("resources/assets/less/bootstrap"));

    gulp.src("bower_components/bootstrap/dist/bootstrap.js")
        .pipe(gulp.dest("resources/assets/js/"));

    gulp.src("bower_components/bootstrap/dist/fonts/**")
        .pipe(gulp.dest("resources/assets/fonts"));
});

/**
 * Default gulp is to run this elixir stuff
 */
elixir(function(mix) {
    mix.scripts([
            'js/jquery.js',
            'js/bootstrap.js'
        ],
        'public/assets/js/admin.js',
        'resources/assets'
    );

    mix.less('admin.less', 'public/assets/css/admin.css');
});
