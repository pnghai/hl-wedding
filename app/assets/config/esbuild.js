const watch = process.argv.includes("--watch") && {
  onRebuild(error) {
    if (error) console.error("[watch] build failed", error);
    else console.log("[watch] build finished");
  },
};

// remember to yarn add esbuild-sass-plugin for this to work properly!
const { sassPlugin } = require("esbuild-sass-plugin")
//esbuild app/javascript/*.* --loader:.png=file --loader:.jpg=file --public-path=/assets --bundle --sourcemap --outdir=app/assets/builds  --asset-names=[name]-[hash].digested"
require("esbuild")
  .build({
    entryPoints: ["app/javascript/application.js"],
    bundle: true,
    outdir: "app/assets/builds/",
    watch: watch,
    publicPath: "/assets",
    loader: {".png": "file", ".jpg": "file", ".woff2": "file", ".woff": "file"},
    sourcemap: process.env.NODE_ENV === 'development',
    assetNames: "[name]-[hash].digested",
    plugins: [
      sassPlugin({cssImports: true})
    ]
  })
  .catch(() => process.exit(1));