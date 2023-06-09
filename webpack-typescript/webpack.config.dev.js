const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = merge(commonConfig,{
    mode: 'development',
    plugins: [new ESLintPlugin()],

})