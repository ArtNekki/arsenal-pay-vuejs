<template>
	<div class="rate-box">
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

			&::before {
				content: attr(data-prefix);
				position: absolute;
				left: -38.4px;
				display: inline-block;
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
	}

	&__body {
	}
}
</style>
