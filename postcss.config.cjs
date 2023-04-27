const postcssPresetEnv = require("postcss-preset-env");

const config =   {
	plugins: [postcssPresetEnv(/* pluginOptions */)],
};

module.exports = config;
