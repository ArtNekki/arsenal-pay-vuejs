<template>
	<picture
		class="img"
		:class="{
			['img_shadow_' + shadow]: shadow,
			['img_radius_' + radius]: radius,
		}"
		v-if="breakpoints"
	>
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
			:sizes="sizes"
			:width="width"
			:height="height"
			:style="{ maxWidth: maxWidth + 'px' }"
			:alt.attr="alt"
		/>
	</picture>
	<picture
		class="img"
		:class="{
			['img_shadow_' + shadow]: shadow,
			['img_radius_' + radius]: radius,
		}"
		v-else
	>
		<img
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
	</picture>
</template>

<script lang="js">

const Media = {
	xs: '(min-width: 360px)',
	sm: '(min-width: 600px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 900px)',
	xl: '(min-width: 1280px)',
	xxl: '(min-width: 1440px)',
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
		breakpoints: Object,
		shadow: String,
		radius: String,
	},
})
export default class BaseImage extends Vue {
	sizes = [];

	mounted() {
		if (this.breakpoints) {
			this.sizes = Object.entries(this.breakpoints)
				.map(([key, value]) => {
					return `${Media[key]} ${value}px`
				})
				.join(',');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img {
	//position: relative;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&_shadow_md {
		box-shadow: var(--box-shadow-md);
	}

	&_radius_md {
		border-radius: 32px;
	}

	img {
		width: inherit;
		height: inherit;
	}
}
</style>
