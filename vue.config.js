const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,

	pluginOptions: {
		svgSprite: {
			/*
			 * The directory containing your SVG files.
			 */
			dir: "src/assets/icons",
			/*
			 * The regex that will be used for the Webpack rule.
			 */
			test: /\.(svg)(\?.*)?$/,
			/*
			 * @see https://github.com/kisenka/svg-sprite-loader#configuration
			 */
			loaderOptions: {
				extract: true,
				spriteFilename: "img/icons.svg", // or 'img/icons.svg' if filenameHashing == false
			},
			/*
			 * @see https://github.com/kisenka/svg-sprite-loader#configuration
			 */
			pluginOptions: {
				plainSprite: true,
			},
		},
	},

	css: {
		loaderOptions: {
			sass: {
				additionalData: `
				  @import "@/assets/scss/global/utils/_breakpoints.scss";
				  @import "@/assets/scss/global/utils/_functions.scss";
				  @import "@/assets/scss/global/utils/_mixins.scss";
				  @import "@/assets/scss/_utils.scss";
				  @import "@/assets/scss/global/_fonts.scss";
				  @import "@/assets/scss/_settings.scss";
				  @import "@/assets/scss/components/_index.scss";
				  @import "~plyr/dist/plyr.css";
				  @import "element-plus/dist/index.css";

				`,
			},
		},
	},

	chainWebpack: (config) => {
		config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
	},
});
