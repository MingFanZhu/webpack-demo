const common = require('./webpack.common');
const merge = require('webpack-merge').merge;

module.exports = merge(common,{
    mode:'development',
    devtool:'source-map',
    devServer:{
        static:'./dist'
    }
});