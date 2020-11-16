/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const compressionRegex = /\.(js|png|jpg|html|css)$/;

module.exports = {
	mode: "production",
	entry: path.join(__dirname, "/src/index.tsx"),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(jpg|png)$/,
				loader: "file-loader",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		globalObject: "this",
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/",
		filename: "main.[contenthash].wp.js",
		chunkFilename: "[contenthash].js",
	},
	optimization: {
		splitChunks: {
			chunks: "async",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "mgamlem3.com",
			minify: true,
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[hash].css",
			chunkFilename: "[id].css",
			ignoreOrder: false,
		}),
		new CompressionPlugin({
			cache: true,
			filename: "[path][base].br",
			algorithm: "brotliCompress",
			test: compressionRegex,
		}),
		new CompressionPlugin({
			cache: true,
			filename: "[path][base].gz",
			test: compressionRegex,
		}),
	],
};
