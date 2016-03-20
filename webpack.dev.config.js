/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var pkg = require('./package.json')
var config = require('./.componentrc.json')
var stylePath = config.stylePath
var comonentConfigPath = path.resolve(stylePath);
var webpack = require('webpack')
var playgroundPath = path.join(__dirname, 'playground')
var srcPath = path.join(__dirname, 'src')
var DEBUG = true
var aliases = {
  'config': './config',
  'utils': path.join(__dirname, '/src/utils'),
  'primatives': path.join(__dirname, '/src/primatives'),
  //'primatives/Div': path.join(__dirname, '/src/primatives/Span')
}

//var IllustrationPlugin = require('react-component-illustrator-webpack')
var CSS = {CustomCSSPath: 'custom'}

var componentsList = fs.readdirSync('src/components/').filter(function (x) {
  aliases[x + '.css'] = './'+x+'.css'
  aliases[x + '.config'] = './'+x+'.config'
  return x !== '.DS_Store' && x !== 'index.js'
})

var cssOverride = fs.readdirSync(stylePath).filter(function (name) {
  /* TODO acctually resolve the correct path */
  var FileName = name.substr(0, name.lastIndexOf('.')) || name;
  /* set alias override */
  if (name.match(/\.css/)) {
    var newCSSPath = path.resolve(stylePath) + '/' + name
    aliases[name] = newCSSPath
    console.log('Notice: ' + name + ' is overriden by ' + newCSSPath)
  }

  if (name.match(/\.js/)) {
    var newConfigPath = path.resolve(stylePath) + '/' + name
    //var newConfigPath = path.resolve(stylePath) + '/atest.js'
    aliases[FileName] = newConfigPath
    console.log('Notice: ' + name + ' is overriden by ' + newConfigPath)
  }

  return name !== '.DS_Store' && name !== 'index.js'
})

console.log(aliases)
console.log('new path', path.resolve(stylePath))
console.log(path.resolve(__dirname, '..', 'Projects', 'component-themes', 'Demo'));
module.exports = {

  devtool: 'inline-source-map',

  target: 'web',

  entry: {
    'app': [
      'webpack-hot-middleware/client?http://localhost:7000',
      './playground/index.js'
     ],
  },

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  resolve: {
    //root: path.resolve(__dirname),
    root: [
       path.resolve(__dirname),
       //path.resolve(stylePath),
    ],
    alias: aliases,
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'],
        include: [srcPath, playgroundPath, path.resolve(stylePath)],
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.CSS_PREFIX': JSON.stringify(process.env.CSS_PREFIX || ''),
      'process.env.CSS_POSTFIX': JSON.stringify(process.env.CSS_POSTFIX || ''),
      'process.env.CSS_BASE_RESET': JSON.stringify(process.env.CSS_BASE_RESET || false),
      __DEV__: DEBUG,
      COMPONENT_CONFIG_PATH: JSON.stringify(comonentConfigPath),
      VERSION: JSON.stringify(pkg.version)
    })
  ],
  postcss: [
    /* enable css @imports like Sass/Less */
    require('postcss-import')({
      /* inject styles to webpack */
      addDependencyTo: webpack
      /* Is equivalent to
      onImport: function (files) {
       files.forEach(this.addDependency)
      }.bind(webpack)
      */
    }),
    /* autoprefix for different browser vendors */
    require('autoprefixer'),
    /* require global variables */
    require('postcss-simple-vars')({
      variables: function () {
        /* possible hot reloading https://github.com/postcss/postcss-simple-vars/issues/23#issuecomment-156815226 */
        var defaultVars = require('./src/css/variables')
        var mergeVars = merge_options(defaultVars, CSS)
        //console.log(mergeVars)
        return mergeVars
      }
    }),
    /* enable mixins like Sass/Less */
    require('postcss-mixins')({
      // mixinsDir: path.join(__dirname, '/src/mixins'),
      mixins: require('./src/css/mixins'),
      silent: true
    }),
    /* plugin that enables @if statements in your CSS. */
    require('postcss-conditionals'),
    /* reset inherited rules */
    require('postcss-initial')({
      reset: 'inherited' // reset only inherited rules
    }),
    /* flexbox polyfil must include https://github.com/10up/flexibility in your code */
    require('postcss-flexibility'),
    /* enable nested css selectors like Sass/Less */
    require('postcss-nested'),
    /* add :focus selector to every :hover */
    require('postcss-focus'),
    /* transform W3C CSS color function to more compatible CSS. */
    require('postcss-color-function'),
    /* Better localization maybe n future https://github.com/outpunk/postcss-modules/
    require('postcss-modules')({
      getJSON: function(cssFileName, json) {
        var path          = require('path');
        var cssName       = path.basename(cssFileName, '.css');
        var jsonFileName  = path.resolve('./build' + cssName + '.json');
        fs.writeFileSync(jsonFileName, JSON.stringify(json));
      }
    });
    */
    /* This plugin makes sure we get warnings in the console */
    require('postcss-reporter')({
      clearMessages: true
    }),
    /* Grab all selectors being used */
    require('list-selectors').plugin(doSomethingWithList)
  ],

}

function merge_options(obj1,obj2){
  var obj3 = {}
  for (var attrname in obj1) {
    obj3[attrname] = obj1[attrname]
  }
  for (var attrname in obj2) {
    obj3[attrname] = obj2[attrname]
  }
  return obj3
}

function doSomethingWithList (mySelectorList, args) {
  //console.log(mySelectorList)
  // var dest = path.resolve(__dirname) + '/cssoutput/'
  // var list = {};
  // for (var i = 0; i < mySelectorList.length; i++) {
  //     var icon = mySelectorList[i];
  //     var name = icon.replace('.svg', '');
  //     list[name] = {
  //         filename: icon,
  //         //cdnLink: ""
  //     };
  // }

  // var iconExports = `module.exports = ` + JSON.stringify(list, null, 2);

  // fs.writeFile(dest + "selector-list.js", iconExports, function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }
  // });

  // ... do other things
}