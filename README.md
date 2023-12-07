# Kirby esbuild

I'm not a big fan of complex build setups. So this is the easiest way to compile JavaScript and CSS files with live reloading I could come up with.

![preview](https://github.com/medienbaecker/esbuild-plainkit/assets/7975568/d15bc7ef-cab3-4c5c-8439-1e1e13cac10c)

## Features

✨ Bundles and minifies JavaScript with [esbuild](https://esbuild.github.io/).

🎨 Compiles and minifies CSS with [esbuild](https://esbuild.github.io/). This means you can use native CSS nesting and it will be transpiled to CSS that works in older browsers (Chrome >88, Firefox >78 and Safari >14).

⚡ Live reloading with [Browsersync](https://browsersync.io/) for files in `assets/`, `content/` and `site/`.

🐘 Automatically sets the `.test` domain for [Laravel Valet](https://github.com/laravel/valet).

## Setup

Put the [assets.config.js](assets.config.js) in your `/assets` folder.

Install the dependencies I defined in the [package.json](package.json).
Run `npm run dev` to start the development server.

Have a look at [assets.config.js](assets.config.js) to see how to configure the build process. By default the script compiles `assets/js/main.js` and `assets/css/style.css` but you can change this by editing the `jsFiles` and `cssFiles` variables.

I tried to keep it as simple as possible and commented the file as good as I could. If you have any questions, feel free to open an issue.