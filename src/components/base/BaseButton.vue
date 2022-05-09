<template>
	<button
		v-if="!href"
		:type="type"
		class="button"
		:class="{
			['button_view_' + view]: view,
			['button_size_' + size]: size,
			['button_position_' + position]: position,
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
			['button_position_' + position]: position,
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
		position: String,
	},
})
export default class BaseButton extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-family: var(--font-family);
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
		font-size: 12.2px;
		line-height: 0.88;
		letter-spacing: -0.23px;
		text-transform: none;
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
		font-size: 17px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: -0.2px;
		border-radius: var(--border-radius-lg);
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

	&_position_center {
		margin-right: auto;
		margin-left: auto;
	}
}
</style>
