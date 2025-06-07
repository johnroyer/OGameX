const mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Combine all JavaScript files into a single file. We don't use webpack for this because
// it conflicts with jQuery and global variables.

// ---
// Ingame
// ---
mix.scripts([
    'resources/js/ingame/jquery-1.12.4.min.js',
    'resources/js/ingame/jquery.js',
    'resources/js/ingame/chat.js',
    'resources/js/ingame/inventory.js',
    'resources/js/ingame/jquery-spinners.js',
    'resources/js/ingame/messages.js',
    'resources/js/ingame/tooltips.js',
    'resources/js/ingame/trader.js',
    //'resources/js/ingame/percentagebar.js',
    'resources/js/ingame/timerhandler.js',
    'resources/js/ingame/e7c74974620fa35b197315ebdbb8c2.js',
], 'public/js/ingame.js').minify('public/js/ingame.js').version();

// ---
// Outgame
// ---
mix.scripts([
], 'public/js/outgame.js').minify('public/js/outgame.js').version();

mix.postCss('resources/css/ingame.css', 'public/css', [
        //
    ]).version();
mix.postCss('resources/css/outgame.css', 'public/css', [
    //
]).version();