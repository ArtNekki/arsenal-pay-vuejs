<template>
	<picture v-if="breakpoints">
		<source
			v-if="breakpoints.xxxl"
			media="(min-width: 1920px)"
			:srcset="
				require('@/assets/images/' + src + '--xxxl.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--xxxl@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--xxxl@3x.' + ext) +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.xxl"
			media="(min-width: 1440px)"
			:srcset="
				require('@/assets/images/' + src + '--xxl.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--xxl@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--xxl@3x.' + ext) +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.xl"
			media="(min-width: 1280px)"
			:srcset="
				require('@/assets/images/' + src + '--xl.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--xl@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--xl@3x.' + ext) +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.lg"
			media="(min-width: 900px)"
			:srcset="
				require('@/assets/images/' + src + '--lg.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--lg@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--lg@3x.' + ext) +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.md"
			media="(min-width: 768px)"
			:srcset="
				require('@/assets/images/' + src + '--md.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--md@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--md@3x.' + ext) +
				' 3x'
			"
		/>
		<source
			v-if="breakpoints.sm"
			media="(min-width: 600px)"
			:srcset="
				require('@/assets/images/' + src + '--sm.' + ext) +
				' 1x,' +
				require('@/assets/images/' + src + '--sm@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--sm@3x.' + ext) +
				' 3x'
			"
		/>
		<img
			:src="require('@/assets/images/' + src + '--xs.' + ext)"
			:srcset="
				require('@/assets/images/' + src + '--xs@2x.' + ext) +
				' 2x,' +
				require('@/assets/images/' + src + '--xs@3x.' + ext) +
				' 3x'
			"
			:width="width"
			:height="height"
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
		:width="width"
		:height="height"
		:style="{ maxWidth: maxWidth + 'px' }"
		:alt.attr="alt"
	/>
</template>

<script lang="ts">
interface Breakpoints {
	xs?: boolean;
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	xl?: boolean;
	xxl?: boolean;
	xxxl?: boolean;
}

import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		width: {
			type: String,
			default: null,
		},
		height: {
			type: String,
			default: null,
		},
		maxWidth: {
			type: String,
			default: null,
		},
		src: String,
		ext: {
			type: String,
			default: "png",
		},
		alt: String,
		breakpoints: {
			xs: Boolean,
			sm: Boolean,
			md: Boolean,
			lg: Boolean,
			xl: Boolean,
			xxl: Boolean,
			xxxl: Boolean,
		},
	},
})
export default class BaseImage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
