import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    // '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
  },  
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        // look for .css or .scss files
        test: /\.(css|scss)/,
        use: [
          MiniCssExtractPlugin.loader, // NO used style-loader because MiniCssExtractPlugin do the same
            // { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          
         
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()],
};

export default config;
