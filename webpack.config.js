const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
						presets: ['es2015']
				}
			},
      {
        test: /\.(ts|js|tsx)$/,
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
      },
			{
				test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000, 
							fallback: 'file-loader',
							name: '[name].[ext]?[hash]',
							outputPath: 'img', 
							publicPath: '../img' 
						},
					},
				],
			},
		],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js",".jsx",".ts",".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
  },
  mode: "development",
};