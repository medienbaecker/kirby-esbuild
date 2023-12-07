// --------------------------------------------------
// 🧰 Tools
// --------------------------------------------------

import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import browserSync from "browser-sync";

// --------------------------------------------------
// 🔧 Setup
// --------------------------------------------------

// Setting the valet domain by appending .test to the directory name
const directoryPath = process.cwd(); 
const directoryName = directoryPath.split("/").pop();
const domain = `${directoryName}.test`;

// JavaScript files
const jsFiles = [
  "assets/js/main.js"
]

// CSS files
const cssFiles = [
  "assets/scss/style.scss",
  "assets/scss/panel.scss",
]

// --------------------------------------------------
// ⚡ BrowserSync
// --------------------------------------------------

const browserSyncInstance = browserSync.create();

browserSyncInstance.init({
  proxy: domain, // Set the proxy to the valet domain
  host: domain, // Set the host to the valet domain
  open: "external", // Automatically open the valet domain in the browser
  reloadOnRestart: true, // Reload the browser when we restart the server
  notify: false, // I don't want to see the BrowserSync notification in the browser
  ui: false, // Disable the BrowserSync UI
});

// --------------------------------------------------
// ✨ JavaScript
// Bundles and minifies JavaScript files
// --------------------------------------------------

const jsContext = await esbuild.context({
  entryPoints: jsFiles,
  outdir: "assets/js",
  outExtension: {
    ".js": ".min.js"
  },
  minify: true,
  bundle: true,
  sourcemap: true,
})

await jsContext.watch();

// --------------------------------------------------
// 🎨 CSS
// Compiles SCSS files to CSS with vendor prefixes
// --------------------------------------------------

const cssContext = await esbuild.context({
  entryPoints: cssFiles,
  outdir: "assets/css",
  minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, {
          from: undefined // This is needed to prevent postcss from trying to resolve the file path
        });
        return css;
      },
    })
  ]
})

await cssContext.watch();

// --------------------------------------------------
// 📁 Other files
// --------------------------------------------------

browserSyncInstance.watch([
  "assets/css/*.css",
  "assets/js/*.min.js",
  "assets/images/**",
  "site/*/**",
  "!site/sessions/**",
  "!site/cache/**",
  "!site/logs/**",
  "content/**/*.*"
]).on("change", (file) => {
  browserSyncInstance.reload(file);
});