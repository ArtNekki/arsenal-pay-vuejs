<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container page-section__container--about">
			<h1 class="text text_type_title.level_1">Платежи с любовью</h1>
			<p class="text text_level_1 text_mgb_50 text_width_820.on_screen_lg">
				Мы верим, что онлайн-платежи могут быть
				<!--				rel="noopener noreferrer"-->
				<BaseLink href="https://arsenalpay.ru/tariffs.html" link-in="text" :blank="true" color="blue"
					>прозрачными</BaseLink
				>
				для бизнеса и удобными для
				<BaseLink href="https://arsenalpay.ru/developers.html" link-in="text" :blank="true" color="blue"
					>разработчиков.</BaseLink
				>
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Удобство использования</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Мы стараемся сделать онлайн-платежи максимально удобными и простыми в использовании, чтобы вы могли
					сосредоточиться на своем бизнесе. Быстрая интеграция, понятные тарифы, встроенная онлайн-касса
					и личный кабинет со всеми функциями доступными с телефона.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Онлайн-касса</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Вам не нужно думать об онлайн-кассе и изменениях в законодательстве, мы берём это на себя. Помогаем
					экономить не только ваше время, но и деньги.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Для бизнеса любого размера</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Все функции доступны для бизнеса любого размера от самозанятых до крупных компаний. Для компаний
					с большим оборотом даём персональные скидки. Для начинающего бизнеса нет никаких затрат при
					отсутствии платежей.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Платежи без границ</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Принимайте платежи от клиентов со всего мира на любых площадках —  
					<BaseLink
						href="https://arsenalpay.ru/priem-platezhej-na-sajte.html"
						link-in="text"
						:blank="true"
						color="blue"
						>на сайте</BaseLink
					>,
					<BaseLink href="https://arsenalpay.ru/quickstart.html" link-in="text" :blank="true" color="blue"
						>без сайта</BaseLink
					>,
					<BaseLink
						href="https://arsenalpay.ru/priem-platezhej-v-instagram.html"
						link-in="text"
						:blank="true"
						color="blue"
						>в Instagram*</BaseLink
					>, на лендингах, в соцсетях, в мессенджерах, в приложениях. Карты любой страны мира доступны сразу.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Безопасность</h3>
				<p class="text text_level_3 text_mgb_no text_mgb_8.on_screen_md text_lh_28.on_screen_md">
					Мы прошли
					<BaseLink
						href="https://arsenalpay.ru/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_PCI_DSS.pdf"
						link-in="text"
						:blank="true"
						color="blue"
						>сертификацию PCI DSS</BaseLink
					>
					– максимальный стандарт безопасности от Visa, Mastercard и Мир. Все платежи надежно защищены.
				</p>
			</div>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="pink" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Юридическая информация</h3>
				<p class="text text_level_3 text_mgb_no text_mgb_8.on_screen_md text_lh_28.on_screen_md">
					ООО «Арсенал Медиа»<br />
					ИНН 2536154341<br />
					КПП 254001001<br />
					ОГРН 1052503036464
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import { useHead, Head } from "@vueuse/head";

export default {
	components: {
		BaseIcon,
		BaseLink,
	},
	setup() {
		useHead({
			title: "О компании",
			meta: [
				{
					name: "description",
					content:
						"Принимайте платежи с бесплатной онлайн кассой на любых площадках — на сайте, без сайта, в Instagram*,\n" +
						"на лендингах, в соцсетях, в мессенджерах. Подключаем бизнес любого размера. * Instagram, признанна в России экстремистской.",
				},
				{
					name: "twitter:title",
					content: "ArsenalPay | Приём платежей без покупки онлайн кассы теперь и для самозанятых",
				},
				{
					name: "twitter:description",
					content:
						"Принимайте платежи с бесплатной онлайн кассой на любых площадках — на сайте, без сайта,\n" +
						"в Instagram*, на лендингах, в соцсетях, в мессенджерах. Подключаем бизнес любого размера." +
						" * Instagram, признанна в России экстремистской.",
				},
				{
					property: "twitter:image",
					content: "priem-platezhej-bez-pokupki-onlajn-kassy-tw.png",
				},
				{
					property: "vk:image",
					content: "https://arsenalpay.ru/priem-platezhej-bez-pokupki-onlajn-kassy-vk.png",
				},
				{
					property: "og:image",
					content: "priem-platezhej-bez-pokupki-onlajn-kassy-fb.png",
					key: "fb",
				},
				{
					property: "og:image:secure_url",
					content: "https://arsenalpay.ru/priem-platezhej-bez-pokupki-onlajn-kassy-fb.png",
				},
				{
					property: "og:image:width",
					content: "1200",
					key: "fb",
				},
				{
					property: "og:image:height",
					content: "630",
					key: "fb",
				},
				{
					property: "og:image",
					content: "https://arsenalpay.ru/priem-platezhej-bez-pokupki-onlajn-kassy-square.png",
					key: "square",
				},
				{
					property: "og:image:width",
					content: "540",
					key: "square",
				},
				{
					property: "og:image:height",
					content: "540",
					key: "square",
				},
				{
					property: "og:image:type",
					content: "image/png",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:site_name",
					content: "ArsenalPay",
				},
				{
					property: "og:url",
					content: "https://arsenalpay.ru/about.html",
				},
				{
					property: "og:title",
					content: "ArsenalPay | Приём платежей без покупки онлайн кассы теперь и для самозанятых",
				},
				{
					property: "og:description",
					content:
						"Принимайте платежи с бесплатной онлайн кассой на любых площадках — на сайте, без сайта,\n" +
						"в Instagram*, на лендингах, в соцсетях, в мессенджерах. Подключаем бизнес любого размера. * Instagram, признанна в России экстремистской.",
				},
			],
			link: [
				{
					rel: "image_src",
					href: "https://arsenalpay.ru/priem-platezhej-bez-pokupki-onlajn-kassy-fb.png",
				},
				{
					rel: "canonical",
					href: "https://arsenalpay.ru/about.html",
				},
			],
		});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-pink-light);

	.page-section__container {
		padding-top: 128px;
		padding-bottom: 130px;

		@include media-breakpoint-up(md) {
			padding-top: 166px;
			padding-bottom: 158px;
		}
	}

	.page-section__box {
		&:not(:last-child) {
			margin-bottom: 70px;
		}
	}
}
</style>
