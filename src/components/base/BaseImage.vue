<template>
	<picture v-if="breakpoints">
		<source
			v-if="breakpoints.xl"
			media="(min-width: 1200px)"
			:srcset="
				'@/assets/images/' +
				src +
				'--xl.' +
				ext +
				' 1x, @/assets/images/' +
				src +
				'--xl@2x.' +
				ext +
				' 2x, @/assets/images/' +
				src +
				'--xl@3x.' +
				ext +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.lg"
			media="(min-width: 992px)"
			:srcset="
				'@/assets/images/' +
				src +
				'--lg.' +
				ext +
				' 1x, @/assets/images/' +
				src +
				'--lg@2x.' +
				ext +
				' 2x, @/assets/images/' +
				src +
				'--lg@3x.' +
				ext +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.md"
			media="(min-width: 768px)"
			:srcset="
				'@/assets/images/' +
				src +
				'--md.' +
				ext +
				' 1x @/assets/images/' +
				src +
				'--md@2x.' +
				ext +
				' 2x, @/assets/images/' +
				src +
				'--md@3x.' +
				ext +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.sm"
			media="(min-width: 576px)"
			:srcset="
				'@/assets/images/' +
				src +
				'--sm.' +
				ext +
				' 1x, @/assets/images/' +
				src +
				'--sm@2x.' +
				ext +
				' 2x, @/assets/images/' +
				src +
				'--sm@3x.' +
				ext +
				' 3x'
			"
		/>
		<img
			:src="'@/assets/images/' + src + '--xs.' + ext"
			:srcset="
				'@/assets/images/' + src + '--xs@2x.' + ext + ' 2x, @/assets/images/' + src + '--xs@3x.' + ext + ' 3x'
			"
			:width.attr="`${width}px`"
			:height.attr="`${height}px`"
			:style="{ maxWidth: maxWidth + 'px' }"
			:alt.attr="alt"
		/>
	</picture>
	<img
		v-else
		:src="require('@/assets/images/' + src + '.' + ext)"
		:srcset="
			require('@/assets/images/' + src + '@2x.' + ext) +
			' 2x,' +
			require('@/assets/images/' + src + '@3x.' + ext) +
			' 3x'
		"
		:width.attr="`${width}px`"
		:height.attr="`${height}px`"
		:style="{ maxWidth: maxWidth + 'px' }"
		:alt.attr="alt"
	/>
</template>
require('@/assets/chat.png')
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
		width: String,
		height: String,
		maxWidth: String,
		src: String,
		ext: {
			type: String,
			default: "png",
		},
		alt: String,
		breakpoints: Object,
	},
})
export default class BaseImage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
