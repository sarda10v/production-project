import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development", // development - на этапе разработки, production - при публикации приложения
  entry: path.resolve(__dirname, "src", "index.ts"), // точка входа приложения
  output: {
    // сборка нашего приложения
    filename: "[name].[contenthash].js", // [contenthash] - для генерации уникальные индификаторы
    path: path.resolve(__dirname, "build"),
    clean: true, // для очистки output, при новой сборке
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // для того чтобы использовался как шаблон, и в него встраивались скрипты
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config
