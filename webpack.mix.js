const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts('resources/assets/js/app.js', 'public/js/app.js')
   .scripts(['resources/assets/js/controllers/Login.js',
   'resources/assets/js/controllers/Dashboard.js'], 'public/js/controllers.js')
   .scripts(['resources/assets/js/factory/intercepter.js',
   'resources/assets/js/factory/facebook.js'], 'public/js/factory.js')
   
   .sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
'resources/assets/css/dashboard.css',
'resources/assets/css/signin.css'], 'public/css/all.css');

