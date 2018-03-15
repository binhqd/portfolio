const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// import config from './constants/config';
const config = require('./src/constants/config');

let {
  NODE_ENV,
  PORT,
  API_URL
} = process.env;

if (!PORT) {
  PORT = config.PORT;
}

if (!API_URL) {
  API_URL = config.API_URL;
}

const sourcePath = path.join(__dirname, './');

let _module = {
  rules: [
    {
      test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg)/,
      loader: 'file-loader'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', {
          modules: false
        }], 'react', 'stage-2'],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
      }
    }, {
      test: /\.less$/,
      //use: ['css-loader', 'less-loader']
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'less-loader'
        ]
      })
    }, {
      test: /\.(scss|css)$/,
      include: /components\/partials\//,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[local]'
            }
          },
          'sass-loader'
        ]
      })
    }, {
      test: /\.(css|scss)$/,
      exclude: /components\/partials\//,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[local]'
            }
          },
          'sass-loader'
        ]
      })
    }, {
      test: /\.(txt)$/,
      loader: 'raw-loader',
      include: path.resolve(__dirname, './components/layout/main/modules')
    }, {
      test: /\.(md)$/,
      loader: ExtractTextPlugin.extract({
        use: [
          'html', 'highlight', 'markdown'
        ]
      })
    }
  ],
  noParse: [/jszip.js$/]
};

module.exports = function (env) {
  const isProd = NODE_ENV === 'production';

  const envars = {
    NODE_ENV: JSON.stringify(NODE_ENV),
    API_URL: JSON.stringify(API_URL),
    PORT: JSON.stringify(PORT)
  };

  const plugins = [
    new webpack.EnvironmentPlugin(envars),
    new webpack.DefinePlugin({
      'process.env': envars
    }),
    new ExtractTextPlugin({filename: (isProd ? '[hash]-docs.css' : 'docs.css'), allChunks: true}),
    new webpack.NamedModulesPlugin()
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true,
        options: {
          context: __dirname
        }
      })
    );
  }

  let appVendors = [
    'babel-polyfill',
    'jquery',
    'bootstrap/dist/js/bootstrap.min.js',
    '@fancyapps/fancybox/dist/jquery.fancybox.js'
  ];

  let appEntry = {
    vendor: appVendors,
    app: [
      'base/index.js',
      'base/libs/main.js',
      'font-awesome/less/font-awesome.less',
      'bootstrap/dist/css/bootstrap.min.css',
      '@fancyapps/fancybox/dist/jquery.fancybox.css'
    ]
  };

  let appResolver = {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    alias: {
      base_styles: path.resolve(__dirname, './assets/styles/global_styles/'),
      node_modules: path.resolve(__dirname, './node_modules/'),
      components: path.resolve(__dirname, './src/components/'),
      pages: path.resolve(__dirname, './pages/'),
      assets: path.resolve(__dirname, './assets/'),
      jquery: path.resolve(__dirname, 'node_modules') + '/jquery/src/jquery.js',
      slick: path.resolve(__dirname, './node_modules/slick-carousel/slick'),
      'rc-slider': path.resolve(__dirname, './node_modules/rc-slider/lib'),
      'react-collapse': path.resolve(__dirname, './node_modules/react-collapse/lib'),
      slider: path.resolve(__dirname, './node_modules/react-slick/lib'),
      'react-draft-wysiwyg': path.resolve(__dirname, './node_modules/react-draft-wysiwyg'),
      api: path.resolve(__dirname, './api/'),
      base: path.resolve(__dirname, './src/'),
      lib: path.resolve(__dirname, './lib/'),
      dummy: path.resolve(__dirname, './dummy/'),
      constants: path.resolve(__dirname, './src/constants/')
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
      sourcePath
    ]
  };

  let devServerConfig = {
    contentBase: './',
    publicPath: '/static',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 3002,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  };

  let commonConfig = {
    devtool: isProd ? 'source-map' : 'eval-source-map',
    context: sourcePath,
    entry: appEntry,
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: isProd ? './' : '/static',
      filename: isProd ? '[hash]-bundle.js' : 'bundle.js'
    },
    module: _module,
    resolve: appResolver,
    plugins,
    optimization: {
      minimize: false,
      runtimeChunk: {
        name: 'vendor'
      }
    },
    performance: isProd && {
      hints: 'warning'
    },
    stats: {
      colors: {
        green: '\u001b[32m'
      }
    },
    node: {
      fs: 'empty',
      child_process: 'empty',
      global: true,
      process: true,
      Buffer: true,
      __filename: true,
      __dirname: true,
      setImmediate: false
    },
    externals: [
      {
        './cptable': 'var cptable'
      }
    ]
  };

  let clientAppEntry = [
    ...appEntry.app
  ];
  // clientAppEntry.unshift('base/index.js');

  let clientConfig = {
    ...commonConfig,
    entry: {
      vendor: appEntry.vendor,
      app: clientAppEntry
    },
    plugins: [
      ...commonConfig.plugins,
      new HtmlWebpackPlugin({
        template: path.resolve('./src/', 'index.production.html'),
        favicon: path.join('src/assets/images', 'favicon.ico')
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Tether: 'tether'
      }),
      new ManifestPlugin()
    ],
    devServer: devServerConfig
  };

  if (!isProd) {
    clientConfig = {
      ...clientConfig,
      entry: {
        ...clientConfig.entry,
        vendor: [
          ...clientConfig.entry.vendor,
          'webpack-hot-middleware/client'
        ]
      }
    };
  }

  return clientConfig;
};
