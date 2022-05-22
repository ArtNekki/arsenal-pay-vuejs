<template>
	<div
		class="rate-box"
		:class="{
			['rate-box_size_' + size]: size,
			['rate-box_prefix_inline']: prefixInline,
		}"
	>
		<div class="rate-box__count">
			<span :data-prefix="prefix">{{ count }}</span>
			<sub>%</sub>
		</div>
		<div class="rate-box__body">
			<slot />
		</div>
	</div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		count: String,
		prefix: String,
		prefixInline: Boolean,
		size: String,
	},
})
export default class BaseRateBox extends Vue {}
</script>

<style scoped lang="scss">
.rate-box {
	text-align: center;

	@include media-breakpoint-up(md) {
		display: grid;
		grid-template-columns: 60px 280px;
		grid-column-gap: 18.4px;
		justify-items: start;
		align-items: center;
		text-align: left;
	}

	&_size_sm {
		text-align: left;

		@include media-breakpoint-up(md) {
			display: block;
		}
	}

	&__count {
		span {
			position: relative;
			margin-right: 11.6px;
			margin-left: 37px;
			display: inline-block;
			font-size: 51.6px;
			font-weight: 300;
			line-height: 63px;
			letter-spacing: -1.33px;

			@include media-breakpoint-up(md) {
				margin-left: 0;
			}

			&[data-prefix]::before {
				content: attr(data-prefix);
				position: absolute;
				left: -38.4px;
				display: inline-block;

				.rate-box_prefix_inline & {
					position: relative;
					left: -2px;
				}
			}
		}

		sub {
			bottom: -5px;
			display: inline-block;
			vertical-align: super;
			font-size: 25px;
			font-weight: 300;
			letter-spacing: -0.96px;
		}

		.rate-box_size_sm & {
			margin-bottom: 16px;

			span {
				margin-right: 5px;
				margin-left: 0;
				font-size: 28.2px;
				line-height: 26px;
				letter-spacing: 0;

				&[data-prefix]::before {
					margin-right: 5px;
					margin-left: 2px;
				}
			}

			sub {
				font-size: 16px;
				line-height: 26px;
				letter-spacing: 0;
			}
		}
	}
}
</style>
