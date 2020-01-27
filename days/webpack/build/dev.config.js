const WebMerge = require("webpack-merge");
const baseConfig = require("./base.config.js");
module.exports = new WebMerge(baseConfig, {

    devServer: {
        contentBase: './dist/',
        inline: true
    }

})