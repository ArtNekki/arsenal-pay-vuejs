import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import { createMetaManager } from "vue-meta";
import { svgSpritePlugin } from "vue-svg-sprite";

const app = createApp(App);

app.use(store)
	.use(router)
	.use(createMetaManager())
	.use(svgSpritePlugin, { url: "/assets/svg/sprite.svg", class: "icon" })
	.use(ElementPlus, { size: "large", zIndex: 3000 })
	.mount("#app");
