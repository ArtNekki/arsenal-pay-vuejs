<template>
	<article
		class="prompt"
		:class="{
			['prompt_color_' + color]: color,
		}"
	>
		<div class="prompt__text">
			<slot />
		</div>
		<div class="prompt__tail">
			<BaseIcon name="prompt-tail" width="46" height="26"></BaseIcon>
		</div>
	</article>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import BaseIcon from "@/components/base/BaseIcon.vue";

@Options({
	components: {
		BaseIcon,
	},
	props: {
		color: String,
	},
})
export default class BasePrompt extends Vue {}
</script>

<style scoped lang="scss">
.prompt {
	position: relative;
	margin-bottom: 24px;
	padding: 24px 20px 14px;
	width: 100%;
	max-width: 320px;
	box-shadow: var(--box-shadow-lg);
	border-radius: var(--border-radius-sm);
	box-sizing: border-box;
	text-align: left;

	@include media-breakpoint-up(md) {
		margin-top: 25px;
		max-width: 646px;
		text-align: center;
	}

	@include media-breakpoint-up(lg) {
		margin-top: 40px;
	}

	&_color_blue {
		background-color: var(--color-bg-blue);
	}

	&_color_green {
		background-color: var(--color-bg-green);
	}

	&__tail {
		content: "";
		position: absolute;
		bottom: -25px;
		right: 50px;
		width: 46px;
		height: 26px;

		.prompt_color_blue & {
			color: var(--color-bg-blue);
		}

		.prompt_color_green & {
			color: var(--color-bg-green);
		}
	}
}
</style>
