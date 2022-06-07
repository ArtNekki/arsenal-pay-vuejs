<template>
	<!--	<metainfo>-->
	<!--		<template v-slot:title="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>-->
	<!--		<template v-slot:description="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>-->
	<!--		<template v-slot:twitter:title="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>-->
	<!--	</metainfo>-->
	<ThePageHeader />
	<router-view />
	<ThePaymentsBlock :page="page.toString()" />
	<ThePageFooter />
	<TheCookie />
</template>

<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";
import { useMeta } from "vue-meta";

import ThePageHeader from "./components/ThePageHeader.vue";
import ThePageFooter from "@/components/ThePageFooter.vue";
import TheMobileNav from "./components/TheMobileNav.vue";
import ThePaymentsBlock from "./components/ThePaymentsBlock.vue";
import TheCookie from "./components/TheCookie.vue";
import { watch } from "vue";

@Options({
	components: {
		ThePageHeader,
		ThePageFooter,
		TheMobileNav,
		ThePaymentsBlock,
		TheCookie,
	},
	data() {
		return {
			page: String,
		};
	},
	watch: {
		$route: {
			deep: true,
			handler(to, from) {
				this.show = false;
				this.page = to.name.toString();
			},
		},
	},
})
export default class App extends Vue {
	// meta = setup(() =>
	// 	useMeta({
	// 		title: "Arsenal pay",
	// 		htmlAttrs: { lang: "en", amp: true },
	// 	})
	// );
}
</script>

<style lang="scss">
@charset "utf-8";

@import "../node_modules/normalize.css/normalize";

html,
body {
	height: 100%;
	font-family: var(--font-family);
	font-size: 13px;
	line-height: 14px;
	color: var(--color-text-primary);
	//scroll-behavior: smooth;
}

b {
	font-weight: 500;
}

//img {
//	width: 100%;
//	height: auto;
//	display: block;
//}

//media query + scrollbar fix in safari
@media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
	html {
		overflow: hidden;
		height: 100%;
	}
	body {
		position: relative;
		overflow-y: scroll;
		height: 100%;
		-webkit-overflow-scrolling: touch; /* So iOS Safari gets the inertia & rubber-band effect */
	}
}
</style>
