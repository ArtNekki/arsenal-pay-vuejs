<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container page-section__container--contacts">
			<h1 class="page-section__title">Контакты</h1>
			<div class="page-section__text page-section__text--contacts">
				<p class="text text--mgb-34 text--mgb-sm-32 text--mgb-md-36 text--ls-26 text--md-size-lg">
					Свяжитесь с нами, мы найдём ответ на ваш вопрос.
				</p>
			</div>

			<!--			<div class="content-box content-box&#45;&#45;shadow-xs content-box&#45;&#45;contacts content-box&#45;&#45;contacts-row">-->
			<!--				{{{ info-box title="Партнёрам" text='<a href="mailto:partners@arsenalpay.ru" class="link link&#45;&#45;in-text" target="_blank"-->
			<!--														rel="noopener noreferrer">partners@arsenalpay.ru</a>'-->
			<!--				icon='{"name": "check", "color": "purple"}' mods="contacts-row,mgb-40" textMods="lsp-md-m055" }}}-->

			<!--				{{{ info-box title="Бухгалтерия" text='<a href="mailto:accounts@arsenalpay.ru" class="link link&#45;&#45;in-text" target="_blank"-->
			<!--														  rel="noopener noreferrer">accounts@arsenalpay.ru</a>'-->
			<!--				icon='{"name": "check", "color": "purple"}' mods="contacts-row,mgb-40" textMods="lsp-md-m055" }}}-->

			<!--				{{{ info-box title="Общие вопросы" text='<a href="mailto:info@arsenalpay.ru" class="link link&#45;&#45;in-text" target="_blank"-->
			<!--															rel="noopener noreferrer">info@arsenalpay.ru</a>'-->
			<!--				icon='{"name": "check", "color": "purple"}' mods="contacts-row,mgb-40" textMods="lsp-md-m055" }}}-->
			<!--			</div>-->

			<!--			<div class="content-box content-box&#45;&#45;shadow-xs content-box&#45;&#45;contacts">-->
			<!--				{{{ info-box title="Поддержка" text='Мы подготовили для вас ответы <br class="br br&#45;&#45;show-xs br&#45;&#45;hide-sm">на <a href="https://arsenalpay.ru/support.html"-->
			<!--																																class="link link&#45;&#45;in-text" target="_blank" rel="noopener noreferrer">частые вопросы</a> по платежам.-->
			<!--				Вы можете самостоятельно проверить <a href="https://arsenalpay.ru/support.html"-->
			<!--													  class="link link&#45;&#45;in-text" target="_blank" rel="noopener noreferrer">статус своего платежа.</a> Напишите нам на-->
			<!--				<a href="mailto:pay@arsenalpay.ru" class="link link&#45;&#45;in-text" target="_blank" rel="noopener noreferrer">-->
			<!--					pay@arsenalpay.ru,</a> если вы не нашли ответ на свой вопрос.'-->
			<!--				icon='{"name": "check", "color": "purple"}' mods="mgb-40" textMods="lsp-md-m055" }}}-->
			<!--			</div>-->

			<!--			<div class="content-box content-box&#45;&#45;shadow-xs content-box&#45;&#45;contacts">-->
			<!--				{{{ info-box title="Работа в нашей команде" text='Каждый день мы стараемся сделать наши платежные инструменты-->
			<!--				ещё лучше. Мы всегда рады талантливым ребятам. Присылайте своё резюме на <a href="mailto:jointeam@arsenalpay.ru"-->
			<!--																							class="link link&#45;&#45;in-text" target="_blank" rel="noopener noreferrer">jointeam@arsenalpay.ru</a> и присоединяйтесь<br class="br br&#45;&#45;hide-xs br&#45;&#45;show-sm br&#45;&#45;hide-lg">-->
			<!--				к нашей команде.'-->
			<!--				icon='{"name": "check", "color": "purple"}' mods="mgb-40" textMods="lsp-md-m055" }}}-->
			<!--			</div>-->
		</div>
	</section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-purple-light);

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
