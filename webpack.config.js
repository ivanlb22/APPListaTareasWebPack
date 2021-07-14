const { merge } = require( 'webpack-merge' );
const commonConfig = require( './config/webpack.common')

module.exports = ( env, argv ) => {
    const mode = ( argv.mode === 'development' ) ? 'development' : 'production';
    const modeConfig = require( `./config/webpack.${ mode }`)
    return merge( commonConfig, modeConfig );
}