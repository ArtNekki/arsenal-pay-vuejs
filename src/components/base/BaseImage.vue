<template>
	<picture v-if="breakpoints">
		<source
			v-if="breakpoints.xl"
			media="(min-width: 1200px)"
			:srcset="(src + '--xl.' + ext + ' 1x', src + '--xl@2x.' + ext + ' 2x', src + '--xl@3x.' + ext + ' 3x')"
		/>
		<source
			v-if="breakpoints.lg"
			media="(min-width: 992px)"
			:srcset="(src + '--lg.' + ext + ' 1x', src + '--lg@2x.' + ext + ' 2x', src + '--lg@3x.' + ext + ' 3x')"
		/>
		<source
			v-if="breakpoints.md"
			media="(min-width: 768px)"
			:srcset="(src + '--md.' + ext + ' 1x', src + '--md@2x.' + ext + ' 2x', src + '--md@3x.' + ext + ' 3x')"
		/>
		<source
			v-if="breakpoints.sm"
			media="(min-width: 576px)"
			:srcset="(src + '--sm.' + ext + ' 1x', src + '--sm@2x.' + ext + ' 2x', src + '--sm@3x.' + ext + ' 3x')"
		/>
		<img
			:src="src + '--xs.' + ext"
			:srcset="src + '--xs@2x.' + ext + ' 2x,' + src + '--xs@3x.' + ext + ' 3x'"
			:width.attr="`${width}px`"
			:height.attr="`${height}px`"
			:style="{ maxWidth: maxWidth + 'px' }"
			:alt.attr="alt"
		/>
	</picture>
	<img
		v-else
		:src="src + '--xs.' + ext"
		:srcset="src + '--xs@2x.' + ext + ' 2x,' + src + '--xs@3x.' + ext + ' 3x'"
		:width.attr="`${width}px`"
		:height.attr="`${height}px`"
		:style="{ maxWidth: maxWidth + 'px' }"
		:alt.attr="alt"
	/>
</template>

<script lang="ts">
interface Breakpoints {
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	xl?: boolean;
}

import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		width: Number,
		height: Number,
		maxWidth: Number,
		src: String,
		ext: String,
		alt: String,
		breakpoints: Object,
	},
})
export default class BaseImage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
