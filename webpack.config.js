const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    let plugins = [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: 'dev/index.html'
        })
    ];

    return {
        devServer: {
            contentBase: __dirname  + '/app/res/'
        },

        entry: "./dev/App.tsx",

        resolve: {
            extensions: ['*', '.ts', '.tsx', '.js', '.scss']
        },

        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    loader: 'ts-loader'
                },            {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader?name=img/[name].[ext]'
                }, {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }, 
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
                }
            ]
        },

        devtool: 'source-map',

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        enforce: true
                    }
                }
            }
        },

        output: {
            path: __dirname  + '/app/res/',
            publicPath: env.type == 'dev' ? '/' : './',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: env.type == 'dev' ? plugins.concat([
            new webpack.NamedModulesPlugin()
        ]) : plugins,

        watch: (env.type == 'dev')
    };
};
