import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
});

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.(ts|tsx)?$/, loader: "ts-loader" },
      {
        // look for .css or .scss files
        test: /\.(css|scss)/,
        use: [
         /* {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },*/
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
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
  plugins: [htmlPlugin],
};

export default config;
