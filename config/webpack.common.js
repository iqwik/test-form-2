const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { cssProcessing, BUNDLE_FOLDER } = require('./utils')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, `../${BUNDLE_FOLDER}`),
        globalObject: 'self',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        // @SEE - https://webpack.js.org/guides/asset-modules/#custom-output-filename
        assetModuleFilename: 'assets/[name][ext]?[hash]',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendors',
                    enforce: true
                },
            }
        }
    },
    stats: {
        children: false
    },
    cache: {
        type: 'filesystem',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            cssProcessing({ withModules: false }),
            cssProcessing({ withModules: true }),
            {
                test: /\.(png|jpe?g|gif|woff(2)?|eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[name].css',
        }),
    ],
    target: 'web',
}
