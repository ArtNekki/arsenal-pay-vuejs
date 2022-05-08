<template>
	<header class="page-header">
		<nav class="page-header__container">
			<a href="https://arsenalpay.ru/" class="page-header__logo">
				<BaseIcon name="header-logo" width="75" height="42" color="pink" />
			</a>
			<TheMainNav />
			<button type="button" class="page-header__burger" data-open-mobile>
				<span></span>
			</button>
		</nav>
	</header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheMainNav from "@/components/TheMainNav.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";

@Options({
	components: {
		TheMainNav,
		BaseIcon,
	},
})
export default class ThePageHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	padding-top: 10px;

	//@include media-breakpoint-up(lg) {
	//	padding-top: 20px;
	//}

	&__container {
		@include container();

		padding-right: 19.7px;
		padding-left: 18px;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		@include media-breakpoint-up(sm) {
			padding-right: 19.7px;
			padding-left: 18px;
		}

		@include media-breakpoint-up(xl) {
			padding-right: 11px;
			padding-left: 10px;
		}
	}

	&__logo {
		@include clear-link-outline();

		margin-right: auto;
		display: block;
		text-decoration: none;
	}

	&__burger {
		--line-width: 28px;
		--line-height: 1px;
		--line-color: var(--color-bg-black-lighten);

		@include btn-default();

		position: relative;
		top: -1px;
		left: -2px;
		width: var(--line-width);
		height: 18px;
		display: block;

		@include media-breakpoint-up(lg) {
			display: none;
		}

		span {
			position: relative;
			display: block;
			width: var(--line-width);
			height: var(--line-height);
			background-color: var(--color-bg-black-lighten);

			&::before,
			&::after {
				content: "";
				position: absolute;
				left: 0;
				width: var(--line-width);
				height: var(--line-height);
				background-color: var(--color-bg-black-lighten);
			}

			&::before {
				top: -8px;
			}

			&::after {
				top: 8px;
			}
		}
	}
}
</style>
