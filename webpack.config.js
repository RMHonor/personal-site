var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var SpritePlugin = require('sprite-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Webpack Config
var webpackConfig = {
    context: path.resolve(__dirname, './src'),
    entry: {
        'main': './main.browser.ts'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new FaviconsWebpackPlugin({
            logo: './app/assets/images/logo.png',
            icons: {
                favicons: true,
                firefox: true,
                opengraph: true,
                twitter: true
            }
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, './src'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),

        // new webpack.optimize.CommonsChunkPlugin('commons', 'common.js'),

        new SpritePlugin({
            source : __dirname + '/src/app/assets/images/sprites',
            imgPath: __dirname + '/src/app/assets/images',
            cssPath: __dirname + '/src/app/assets/style/generic',
            processor: 'scss'
        })
    ],

    module: {
        loaders: [
            // .ts files for TypeScript
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            { test: /\.(scss|sass)$/, exclude: /node_modules/, loaders: ['to-string-loader', 'css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']},
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=assets/images/[name].[ext]'}

        ]
    },

    resolve: {
        modules: ["node_modules"]
    }
};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'source-map',

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, 'node_modules') ]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

var prodConfig = {
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, 'node_modules') ]
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports = webpackMerge(prodConfig, webpackConfig);
} else {
    module.exports = webpackMerge(defaultConfig, webpackConfig);
}
