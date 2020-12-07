/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const DotenvPlugin = require("dotenv-webpack");

const SERVER_PATH = path.join(__dirname, "/server/server.ts");

module.exports = {
	entry: SERVER_PATH,
	mode: "development",
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		filename: "server.dev.wp.js",
	},
	target: "node",
	node: {
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts"],
	},
	plugins: [new DotenvPlugin()],
};
