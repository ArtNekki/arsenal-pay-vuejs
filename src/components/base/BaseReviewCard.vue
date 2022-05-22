<template>
	<article class="review-card">
		<div class="review-card__header">
			<BaseImage :src="data?.src" width="80" height="80" :alt="data?.name" />
			<span>{{ data?.name }}</span>
		</div>
		<b class="text text_level_3 text_increase_no.on_screen_md text_weight_bold text_mgb_14" v-html="data.title"></b>
		<p class="text text_level_3 text_increase_no.on_screen_md text_mgb_no" v-html="data.text"></p>
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
	display: flex;
	flex-direction: column;
	text-align: left;
	background-color: var(--color-bg-white);
	box-shadow: var(--box-shadow-md);
	border-radius: var(--border-radius-2xl);
	box-sizing: border-box;

	&__header {
		margin-bottom: 18px;
		display: flex;
		align-items: center;

		picture.img {
			width: 80px;
			height: 80px;
			box-shadow: var(--box-shadow-md);
			border-radius: var(--border-radius-half);
		}

		span {
			margin-left: 20px;
			display: inline-block;
			font-size: 17.2px;
			font-weight: 500;
			line-height: normal;
			letter-spacing: -0.59px;
			color: rgba(#000000, 0.9);
		}
	}

	:deep(i) {
		font-size: 19px;
		font-style: normal;
	}

	//&__text {
	//	margin: 14px 0 23px 0;
	//	font-size: 15.2px;
	//	line-height: 24px;
	//	letter-spacing: -0.3px;
	//
	//	&:last-child {
	//		margin-bottom: 0;
	//	}
	//}
}
</style>
