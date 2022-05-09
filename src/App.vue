<template>
	<metainfo>
		<template v-slot:title="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>
		<template v-slot:description="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>
		<template v-slot:twitter:title="{ content }">{{ content ? `${content}` : `Arsenalpay` }}</template>
	</metainfo>
	<ThePageHeader />
	<TheMobileNav />
	<router-view />
	<ThePaymentsBlock />
	<ThePageFooter />
</template>

<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";
import { useMeta } from "vue-meta";

import ThePageHeader from "./components/ThePageHeader.vue";
import ThePageFooter from "@/components/ThePageFooter.vue";
import TheMobileNav from "./components/TheMobileNav.vue";
import ThePaymentsBlock from "./components/ThePaymentsBlock.vue";

@Options({
	components: {
		ThePageHeader,
		ThePageFooter,
		TheMobileNav,
		ThePaymentsBlock,
	},
})
export default class App extends Vue {
	mobileMenuOpened = false;

	meta = setup(() =>
		useMeta({
			title: "Hello",
			htmlAttrs: { lang: "en", amp: true },
		})
	);
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
