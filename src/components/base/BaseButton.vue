<template>
	<button
		v-if="!href"
		:type="type"
		class="button"
		:class="{
			['button_view_' + view]: view,
			['button_size_' + size]: size,
			['button_text-transform_' + textTransform]: textTransform,
			['button_icon_' + iconPosition]: iconPosition,
			['button_width_full']: fullWidth,
		}"
	>
		<slot name="icon" />
		<span class="button__text">
			<slot />
		</span>
	</button>
	<a
		v-else
		:href="href"
		class="button"
		:class="{
			['button_view_' + view]: view,
			['button_size_' + size]: size,
			['button_text-transform_' + textTransform]: textTransform,
			['button_icon_' + iconPosition]: iconPosition,
			['button_width_full']: fullWidth,
		}"
	>
		<slot name="icon" />
		<span class="button__text">
			<slot />
		</span>
	</a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		type: {
			type: String,
			default: "button",
		},
		view: {
			type: String,
			default: "blue",
		},
		size: {
			type: String,
			default: "md",
		},
		href: String,
		iconPosition: String,
		fullWidth: Boolean,
		textTransform: {
			type: String,
			default: "uppercase",
		},
	},
})
export default class BaseButton extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
	position: relative;
	z-index: var(--layer-2);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-family: var(--font-family);
	font-weight: 500;
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	border: 1px solid transparent;
	box-sizing: border-box;
	background-color: transparent;
	transition: background-color, color var(--transition-time);
	user-select: none;
	cursor: pointer;

	&_size_xs {
		width: 67px;
		margin: 0 0 0 8px;
		padding: 0 8px;
		height: 22px;
		border-radius: var(--border-radius-2xs);

		@supports (-moz-appearance: none) {
			padding: initial;
		}
	}

	&_size_md {
		padding: 5px;
		max-width: 320px;
		width: 100%;
		height: 52px;
		border-radius: var(--border-radius-2xl);
	}

	&_width_full {
		max-width: 100%;
	}

	&_view_purple {
		border-color: var(--color-bg-purple-dark);
		color: var(--color-text-purple);

		@include hover {
			background-color: var(--color-bg-purple-dark);
			color: var(--color-text-inverse);
		}
	}

	&_view_blue {
		border-color: var(--color-bg-blue);
		color: var(--color-text-blue);

		@include hover {
			background-color: var(--color-bg-blue);
			color: var(--color-text-inverse);
		}
	}

	&_icon_left {
		.icon {
			margin-right: auto;
			margin-left: -2px;
		}
	}

	&_text-transform_uppercase {
		text-transform: uppercase;
	}

	&_text-transform_normal {
		text-transform: unset;
	}

	&__text {
		position: relative;

		.button_size_xs & {
			font-size: 12.2px;
			line-height: 0.88;
			letter-spacing: -0.23px;
			text-transform: none;
		}

		.button_size_md & {
			font-size: 17px;
			line-height: 20px;
			letter-spacing: -0.2px;
		}

		.button_icon_left & {
			margin-right: auto;
			margin-left: auto;
			transform: translate3d(-10px, 0, 0);
		}

		.icon + & {
			font-size: 15.8px;
			line-height: 24px;
			letter-spacing: -0.24px;
		}
	}
}
</style>
