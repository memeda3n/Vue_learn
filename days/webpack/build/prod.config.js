const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebMerge=require("webpack-merge");
const baseConfig=require("./base.config.js");

module.exports=new WebMerge(baseConfig,{
    plugins: [
       
    ]
});


