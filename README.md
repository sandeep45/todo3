mkdir todo3
cd todo3
npm init
touch README.md
npm install --save flux react react-dom react-router keymirror axios
npm install --save-dev webpack babel webpack-dev-server babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-1
touch webpack.config.js
echo 'module.exports = {
  devtool: "eval-source-map",
  entry: "./src/js/main.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      }
    ]
  }
};' > webpack.config.js
mkdir dist src
touch dist/index.html
cd src
mkdir js
cd js
mkdir components constants dispatchers stores utils config
touch main.js
touch config/routes.js
touch utils/WebUtil.js
touch components/App.js
git init
echo ".DS_STORE
node_modules
*~
*.pyc
static
.grunt
_SpecRunner.html
__benchmarks__
build/
coverage/
.module-cache
*.gem
docs/.bundle
docs/code
docs/_site
docs/.sass-cache
docs/js/*
docs/downloads
docs/vendor/bundle
examples/shared/*.js
test/the-files-to-test.generated.js
*.log*
chrome-user-data
*.sublime-project
*.sublime-workspace
.idea
*.iml
.vscode" > .gitignore