<template>
	<PageHeader />
	<router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PageHeader from "./components/PageHeader.vue";

@Options({
	components: {
		PageHeader,
	},
})
export default class App extends Vue {}
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

img {
	width: 100%;
	height: auto;
	display: block;
}

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
