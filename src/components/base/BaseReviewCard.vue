<template>
	<article class="review-card">
		<BaseImage :src="data?.src" width="80" height="80" :alt="data?.name" />
		<span class="review-card__name">{{ data?.name }}</span>
		<b class="review-card__title" v-html="data.title"></b>
		<p class="review-card__text" v-html="data.text"></p>
		<BaseLink v-if="data?.link" :href="data?.link?.href">{{ data?.link?.text }}</BaseLink>
	</article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseImage from "./BaseImage.vue";
import BaseLink from "@/components/base/BaseLink.vue";

@Options({
	props: {
		data: {
			src: String,
			name: String,
			title: String,
			text: String,
			link: {
				href: String,
				text: String,
			},
		},
	},
	components: {
		BaseImage,
		BaseLink,
	},
})
export default class BaseReviewCard extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.review-card {
	padding: 20px 20px 32px;
	text-align: left;
	background-color: var(--color-bg-white);
	box-shadow: var(--box-shadow-md);
	border-radius: var(--border-radius-xl);
	box-sizing: border-box;

	&__img {
		display: inline-block;
		width: 80px;
		height: 80px;
		box-shadow: var(--box-shadow-md);
		border-radius: var(--border-radius-half);
		vertical-align: middle;
	}

	&__name {
		margin-left: 15px;
		display: inline-block;
		font-size: 17.2px;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.59px;
		color: rgba(#000000, 0.9);
		vertical-align: middle;
	}

	&__title {
		margin-top: 18px;
		display: block;
		font-size: 15.2px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: -0.2px;
		color: var(--gray-color);
	}

	&__title i {
		font-size: 19px;
		font-style: normal;
	}

	&__text {
		margin: 14px 0 23px 0;
		font-size: 15.2px;
		line-height: 24px;
		letter-spacing: -0.3px;

		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
