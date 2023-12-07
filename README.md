# Kirby esbuild

This is a simple and efficient build setup for compiling JavaScript and CSS files with live reloading. It utilizes [esbuild](https://esbuild.github.io/) for bundling and minifying JavaScript, and [esbuild-sass-plugin](https://github.com/glromeo/esbuild-sass-plugin) for compiling and minifying SCSS.

## Features

✨ Bundles and minifies JavaScript with [esbuild](https://esbuild.github.io/).

🎨 Compiles and minifies SCSS with [esbuild](https://esbuild.github.io/) and [esbuild-sass-plugin](https://github.com/glromeo/esbuild-sass-plugin).

⚡ Live reloading with [Browsersync](https://browsersync.io/) for files in `assets/`, `content/`, and `site/`.

🐘 Automatically sets the `.test` domain for [Laravel Valet](https://github.com/laravel/valet).

## Setup

1. Put the [assets.config.js](assets/assets.config.js) file in your assets folder.
2. Adjust your package.json or use mine.
3. Install the dependencies defined in the [package.json](package.json) file.
4. Run `npm run dev` to start the development server.

To customize the build process, refer to the [assets.config.js](assets/assets.config.js) file. By default, the script compiles `assets/js/main.js`, `assets/scss/style.scss` and `assets/scss/panel.scss`, but you can modify the `jsFiles` and `cssFiles` variables.