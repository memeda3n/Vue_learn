const path=require("path");

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//在当前路径中拼接dist
        filename:'buddle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }
        ]
      }
}