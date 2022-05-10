<template>
	<article
		class="notice"
		:class="{
			['notice_state_' + state]: state,
		}"
	>
		<BaseIcon name="check-mark-circle" width="48" height="38" currentColor="true" />
		<div class="notice__text">
			<slot />
		</div>
	</article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseIcon from "./BaseIcon.vue";

@Options({
	components: {
		BaseIcon,
	},
	props: {
		state: String,
	},
})
export default class BaseNotice extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.notice {
	padding: 4px 16px 10px;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: var(--border-radius-md);

	@include media-breakpoint-up(sm) {
		padding: 0 16px 0 0;
		flex-direction: row;
		text-align: left;
	}

	&_state_success {
		background-color: var(--color-bg-success);
		color: var(--color-text-success);
	}

	&_state_error {
		background-color: var(--color-bg-error);
		color: var(--color-text-error);
	}

	&__text {
		margin-top: -2px;
		font-size: 13.2px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: -0.25px;

		@include media-breakpoint-up(sm) {
			margin-left: -2px;
		}

		@include media-breakpoint-up(md) {
			margin-left: -5px;
		}
	}
}
</style>
