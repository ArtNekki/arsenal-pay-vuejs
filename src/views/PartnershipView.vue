<template>
	<section class="page-section page-section_type_cut page-section_skew_no">
		<div class="page-section__container page-section__container--partnership">
			<h1 class="text text_type_title.level_1">Станьте нашим агентом</h1>
			<p class="text text_level_1">Приводите клиентов и получайте ежемесячный доход.</p>
			<div class="page-section__button">
				<BaseButton>Стать агентом</BaseButton>
			</div>
			<!--						<button type="button" class="page-section__btn page-section__btn&#45;&#45;partnership page-section__btn&#45;&#45;mgb-36" @click="showModal(modalIds.partnership)"></button>-->
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					10% от нашей прибыли по каждому клиенту
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Вы ежемесячно получаете 10% от нашей прибыли по каждому клиенту, которому были подключены
					онлайн-платежи. Рассказывайте о продуктах и услугах ArsenalPay своим знакомым, и когда они захотят
					подключиться, передайте их контактные данные нам. После их подключения, вы начнете получать
					ежемесячный доход.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Удобно и прозрачно</h3>
				<p class="text text_level_3 text_lh_28.on_screen_md text_mgb_no">
					Вы не привязаны к рабочему месту и сами выбираете график работы.<br class="br br--show-lg" />
					Вознаграждения прозрачны. Все данные по привлеченным клиентам и сумме вашего вознаграждения вы
					сможете контролировать в онлайн-режиме в личном кабинете.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BasePluginBox from "@/components/base/BasePluginBox.vue";

@Options({
	components: {
		BaseButton,
		BaseIcon,
		BaseLink,
	},
})
export default class PartnershipView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 128px;
		padding-bottom: 118px;

		@include media-breakpoint-up(md) {
			padding-top: 166px;
			padding-bottom: 158px;
		}
	}

	.page-section__button {
		margin-top: 18px;
		margin-bottom: 50px;

		@include media-breakpoint-up(md) {
			max-width: 304px;
		}
	}
}
</style>
