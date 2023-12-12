// --------------------------------------------------
// 🧰 Tools
// --------------------------------------------------

import esbuild from "esbuild";
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
  "assets/css/style.css"
]

// --------------------------------------------------
// ⚡ BrowserSync
// --------------------------------------------------

const browserSyncInstance = browserSync.create();

browserSyncInstance.init({
  proxy: domain, // Set the proxy to the valet domain
  host: domain, // Set the host to the valet domain
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
// Compiles and minifies CSS files
// --------------------------------------------------

const cssContext = await esbuild.context({
  entryPoints: cssFiles,
  outdir: "assets/css",
  outExtension: {
    ".css": ".min.css"
  },
  minify: true,
  sourcemap: true,
  bundle: true,
  external: ["*.png", "*.jpg", "*.jpeg", "*.gif", "*.svg", "*.woff", "*.woff2", "*.ttf", "*.otf", "*.eot"],
  target: ["chrome88", "firefox78", "safari14"],
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
  "content/**/*.*"
]).on("change", (file) => {
  browserSyncInstance.reload(file);
});