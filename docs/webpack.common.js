const path = require( 'path' )
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const config = {
        entry: './src/index.js',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve( __dirname, '../bundle'),
        clean: true
    },
    module: {
        rules: [ 
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    //minimize: true
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[fullhash].css'
        })  
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
}
module.exports = config;