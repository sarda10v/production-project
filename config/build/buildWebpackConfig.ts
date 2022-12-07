import { BuildOptions } from "./types/config";
import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode, // development - на этапе разработки, production - при публикации приложения
    entry: paths.entry, // точка входа приложения
    output: {
      // сборка нашего приложения
      filename: "[name].[contenthash].js", // [contenthash] - для генерации уникальные индификаторы
      path: paths.build,
      clean: true, // для очистки output, при новой сборке
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoders(),
    },
    resolve: buildResolvers(),
  };
}
