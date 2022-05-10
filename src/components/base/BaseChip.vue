<template>
	<div
		class="chip"
		:class="{
			['chip_view_' + view]: view,
		}"
	>
		<span class="chip__text">
			<slot></slot>
		</span>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		view: String,
	},
})
export default class BaseChip extends Vue {
	msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chip {
	position: relative;
	z-index: var(--layer-2);
	margin-bottom: 12px;
	padding: 4px 9px;
	display: inline-flex;
	justify-content: center;
	align-self: flex-start;
	border-radius: var(--border-radius-sm);

	&_view_pink {
		color: var(--color-text-pink);
		background-color: var(--color-bg-pink);
	}

	&__text {
		font-size: 11.4px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.1px;
	}
}
</style>
