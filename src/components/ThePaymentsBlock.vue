<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container">
			<BaseIcon name="card-size-lg" width="112" height="112" size="lg" color="pink" />
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h2 class="text text_type_title.level_1">Подключить платежи в Instagram*</h2>
			<p class="text text_level_1">Для подключения нужен только ИНН юрлица, ИП&nbsp;или&nbsp;самозанятого.</p>
			<div class="page-section__button">
				<BaseButton>Подключиться</BaseButton>
			</div>
			<!--			<a href="" class="page-section__btn" style="margin-bottom: 0">Подключиться</a>-->
			<!--			<a href="{{ footerLink }}" class="page-section__btn" style="margin-bottom: 0">Подключиться</a>-->
		</div>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "./base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseIcon from "./base/BaseIcon.vue";

@Options({
	components: {
		BaseNotice,
		BaseButton,
		BaseIcon,
	},
})
export default class ThePaymentsBlock extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-pink-light);

	&__container {
		padding-top: 100px;
		padding-bottom: 90px;
		align-items: center;
		text-align: center;

		@include media-breakpoint-up(md) {
			padding-top: 131px;
			padding-bottom: 118px;
		}
	}

	&__notice {
		margin-top: 28px;
		margin-bottom: 16px;
		width: 100%;
		align-self: center;
		z-index: 1;

		@include media-breakpoint-up(sm) {
			margin-left: -4px;
			max-width: 400px;
		}
	}

	&__button {
		margin-top: 24px;
		width: 100%;
		max-width: 320px;

		@include media-breakpoint-up(sm) {
			max-width: 305px;
		}
	}
}
</style>
