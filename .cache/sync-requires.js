const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\portfolio-v3\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("C:\\Users\\tyler\\repo\\portfolio-v3\\src\\pages\\404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("C:\\Users\\tyler\\repo\\portfolio-v3\\src\\pages\\index.jsx"))),
  "component---src-pages-page-2-jsx": hot(preferDefault(require("C:\\Users\\tyler\\repo\\portfolio-v3\\src\\pages\\page-2.jsx")))
}

