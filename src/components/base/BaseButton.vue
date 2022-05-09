<template>
	<button
		v-if="!href"
		:type="type"
		class="button"
		:class="{
			['button_view_' + view]: view,
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
		href: String,
		view: {
			type: String,
			default: "primary",
		},
		position: String,
	},
})
export default class BaseButton extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
	padding: 5px;
	max-width: 320px;
	width: 100%;
	height: 52px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-family: var(--font-family);
	font-size: 17px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: -0.2px;
	text-transform: uppercase;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: var(--border-radius-lg);
	box-sizing: border-box;
	background-color: transparent;
	transition: background-color, color var(--transition-time);
	user-select: none;
	cursor: pointer;

	&_view_primary {
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
