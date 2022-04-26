<template>
	<section class="page-section page-section_type_cut page-section_skew_no">
		<div class="page-section__container page-section__container--partnership">
			<h1 class="page-section__title page-section__title--partnership">Станьте нашим агентом</h1>
			<div class="page-section__text">
				<p class="text text--mgb-32 text--mgb-sm-32 text--mgb-md-32 text--ls-26 text--md-size-lg">
					Приводите клиентов и получайте ежемесячный доход.
				</p>
			</div>
			<!--			<button type="button" class="page-section__btn page-section__btn&#45;&#45;partnership page-section__btn&#45;&#45;mgb-36" @click="showModal(modalIds.partnership)">Стать агентом</button>-->
			<div class="content-box content-box--shadow-xs content-box--partnership">
				<!--				{{{ info-box title="10% от нашей прибыли по каждому клиенту"  text='Вы ежемесячно получаете 10% от нашей прибыли-->
				<!--				по каждому клиенту, которому были подключены онлайн-платежи. Рассказывайте о продуктах и услугах ArsenalPay-->
				<!--				своим знакомым, и когда они захотят подключиться, передайте их контактные данные нам. После их подключения, вы-->
				<!--				начнете получать ежемесячный доход.'-->
				<!--				icon='{"name": "check", "color": "green"}' mods="mgb-40" textMods="lsp-md-m055" }}}-->

				<!--				{{{ info-box title="Удобно и прозрачно"  text='Вы не привязаны к рабочему месту и сами выбираете график работы.<br class="br br&#45;&#45;show-lg">-->
				<!--				Вознаграждения прозрачны. Все данные по привлеченным клиентам и сумме вашего вознаграждения вы сможете контролировать-->
				<!--				в онлайн-режиме в личном кабинете.'-->
				<!--				icon='{"name": "check", "color": "green"}' mods="mgb-40" textMods="lsp-md-m055" }}}-->
			</div>
		</div>
	</section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section_order_1 {
	background-color: var(--color-bg-green-light);

	&__container {
		padding-top: 130px;
		padding-bottom: 130px;

		@include media-breakpoint-up(md) {
			padding-top: 140px;
			padding-bottom: 190px;
		}
	}
}
</style>
