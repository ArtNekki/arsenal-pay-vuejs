<template>
	<article
		class="prompt"
		:class="{
			['prompt_color_' + color]: color,
			['prompt_width_full']: fullWidth,
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
		color: {
			type: String,
			default: "blue",
		},
		fullWidth: Boolean,
	},
})
export default class BasePrompt extends Vue {}
</script>

<style scoped lang="scss">
.prompt {
	position: relative;
	//margin-bottom: 24px;
	padding: 24px 20px 14px;
	width: 100%;
	max-width: 348px;
	box-shadow: var(--box-shadow-lg);
	border-radius: var(--border-radius-sm);
	box-sizing: border-box;
	text-align: left;

	@include media-breakpoint-up(md) {
		//margin-top: 25px;
		text-align: center;
	}

	@include media-breakpoint-up(lg) {
		//margin-top: 40px;
	}

	&_color_blue {
		background-color: var(--color-bg-blue);
	}

	&_color_green {
		background-color: var(--color-bg-green);
	}

	&_width_full {
		max-width: 100%;
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
