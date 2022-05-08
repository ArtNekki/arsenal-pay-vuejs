import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createMetaManager } from "vue-meta";
import { svgSpritePlugin } from "vue-svg-sprite";

createApp(App)
	.use(store)
	.use(router)
	.use(createMetaManager())
	.use(svgSpritePlugin, { url: "/assets/svg/sprite.svg", class: "icon" })
	.mount("#app");
