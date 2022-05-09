<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container">
			<!--			 {{{ icon name="card-big" width="112" height="112" mods="pink" }}}-->
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h2 class="page-section__title">Подключить платежи в Instagram*</h2>
			<p class="text text--mgb-36 text--md-size-lg">
				Для подключения нужен только ИНН юрлица, ИП&nbsp;или&nbsp;самозанятого.
			</p>
			<BaseButton> Подключиться </BaseButton>
			<!--			<a href="" class="page-section__btn" style="margin-bottom: 0">Подключиться</a>-->
			<!--			<a href="{{ footerLink }}" class="page-section__btn" style="margin-bottom: 0">Подключиться</a>-->
		</div>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "./base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";

@Options({
	components: {
		BaseNotice,
		BaseButton,
	},
})
export default class ThePaymentsBlock extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	padding-top: 95px;
	padding-bottom: 90px;
	background-color: var(--color-bg-pink);
	align-items: center;
	text-align: center;

	@include media-breakpoint-up(md) {
		padding-top: 125px;
		padding-bottom: 118px;
	}

	&__notice {
		margin: 26px 0 15px 0;
		width: 100%;
		align-self: center;
		z-index: 1;

		@include media-breakpoint-up(sm) {
			margin-left: -4px;
			max-width: 400px;
		}
	}
}
</style>
