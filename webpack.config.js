const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // remove resource for automatic webpack decide to create base64 encoded images <-- for small images, less than 8 KB***
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }, // With this option, webpack can adjust the url() of the images in Css/Scss in the output file***
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "sass-loader", // loaders order is important***
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
  ],
};
