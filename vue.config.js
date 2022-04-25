const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
          @import "@/assets/scss/global/utils/_breakpoints.scss";
          @import "@/assets/scss/global/utils/_functions.scss";
          @import "@/assets/scss/global/utils/_mixins.scss";
          @import "@/assets/scss/global/_fonts.scss";
          @import "@/assets/scss/_settings.scss";
          @import "@/assets/scss/components/_index.scss";
        `,
			},
		},
	},
});
