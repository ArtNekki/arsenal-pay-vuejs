<template>
	<section class="page-section page-section_order_1"></section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="blue" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">
				Онлайн-касса включена.<br />
				Свою кассу покупать не нужно.
			</h2>
			<div class="u-max-width.on_screen_md">
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Вы сразу получаете готовую к работе
					<BaseLink href="https://arsenalpay.ru/cashbox.html" :blank="true" link-in="text" color="blue"
						>кассу ArsenalPay.</BaseLink
					>
					<br class="br br--show-sm" />
					Никаких расходов на кассу — вы платите только за чеки успешных покупок.
				</p>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Все чеки отправляются через ОФД в налоговую автоматически.<br class="br br--show-lg" />
					Чек отправляется на email клиента сразу после оплаты.
				</p>
			</div>
			<div class="page-section__button">
				<BaseButton text-transform="normal" icon-position="left" :full-width="true" @click="showModal">
					<template v-slot:icon>
						<BaseIcon name="invoice-medium" width="48" height="38"></BaseIcon>
					</template>
					Пример фискального чека
				</BaseButton>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_3">
		<div class="page-section__container">
			<BaseIcon name="rub-big" width="120" height="120" color="green" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">
				Платежи перечисляются<br class="br br--show-xs" />
				на расчётный счёт фирмы каждый день
			</h2>

			<div class="page-section__row">
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">Без комиссий</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm text_mgb_42.on_screen_md">
						Никаких скрытых комиссий <br class="br br--show-xl" />за&nbsp;вывод на&nbsp;расчётный счёт.
					</p>
				</div>
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">Без минимальных сумм</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm text_mgb_42.on_screen_md">
						Накапливать сумму для <br class="br br--show-xl" />вывода не&nbsp;нужно.
					</p>
				</div>
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">В&nbsp;любой банк России</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm text_mgb_42.on_screen_md">
						Ваш расчётный счёт может <br class="br br--show-xl" />быть в&nbsp;любом банке&nbsp;РФ.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_6 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">
				Мультиссылка.<br class="br br--show-sm" />
				Соберите все важные ссылки&nbsp;вместе.
			</h2>
			<div>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Рассказывайте больше о&nbsp;вашем бизнесе, привлекайте новых&nbsp;клиентов.
				</p>
				<br class="br br--show-lg" />
				<p class="text text_level_1 text_mgb_42 text_display_inline.on_screen_sm">
					Отвечайте на&nbsp;часто задаваемые вопросы.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/messengers"
						shadow="md"
						radius="md"
						:breakpoints="{ xs: true }"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Создавайте много ссылок</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						В&nbsp;профиле Instagram* можно добавить только одну ссылку, но&nbsp;одной ссылки часто
						недостаточно, чтобы подробно рассказать о&nbsp;своем бизнесе и&nbsp;увеличить продажи.
					</p>
					<h3 class="text text_type_title.level_3">Привлекайте больше клиентов</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Ваши клиенты смогут не&nbsp;только оплачивать заказы, но&nbsp;и&nbsp;узнавать об&nbsp;акциях,
						новых предложениях, подробности о&nbsp;товарах, услугах и&nbsp;доставке.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_7 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">
				Автоматическая email <br class="br br--show-sm br--hide-md" />рассылка
			</h2>
			<div>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Без затрат на&nbsp;сервисы рассылок. Никаких настроек и&nbsp;интеграций.
				</p>
				<br class="br br--show-md" />
				<p class="text text_level_1 text_mgb_42 text_display_inline.on_screen_sm">
					Клиент&nbsp;получает письмо с&nbsp;доступом к&nbsp;контенту после оплаты.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="vkontakte-page/widget-email" :breakpoints="{ xs: true, sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Автоматизируйте работу с&nbsp;клиентами</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Клиент получает письмо с&nbsp;доступом к&nbsp;контенту сразу после
						<br class="br br--show-sm br--hide-lg" />оплаты. Вам&nbsp;больше не&nbsp;нужно самим отправлять
						письма.
					</p>
					<h3 class="text text_type_title.level_3">Продавайте доступ к&nbsp;контенту</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Продавайте курсы, чек листы, билеты, все что угодно. Отправка писем происходит сразу после
						оплаты или в&nbsp;определенный день, например, в&nbsp;день начала курса.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_8 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1 text_mgb_42 text_mgb_60.on_screen_md">
				Кнопки быстрой связи <br class="br br--show-sm" />WhatsApp, Telegram, Viber
			</h2>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/widget-buttons"
						shadow="md"
						radius="md"
						:breakpoints="{ xs: true, md: true }"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Удобное общение</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Удобный способ общения обеспечит больше обращений. Поможет увеличить продажи
						и&nbsp;не&nbsp;терять клиентов.
					</p>
					<h3 class="text text_type_title.level_3">Легко начать диалог</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Клиенту достаточно просто нажать на&nbsp;кнопку WhatsApp, Telegram или Viber и&nbsp;вам придет
						готовое первое сообщение. Возможность начать&nbsp;диалог в&nbsp;один клик облегчит общение.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_9 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">
				Мультиссылка.<br class="br br--show-sm" />
				Соберите все важные ссылки&nbsp;вместе.
			</h2>
			<div>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Рассказывайте больше о&nbsp;вашем бизнесе, привлекайте новых&nbsp;клиентов.
				</p>
				<br class="br br--show-lg" />
				<p class="text text_level_1 text_mgb_42 text_display_inline.on_screen_sm">
					Отвечайте на&nbsp;часто задаваемые вопросы.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/widget-multilink"
						shadow="md"
						radius="md"
						:breakpoints="{ xs: true, md: true }"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Создавайте много ссылок</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						В&nbsp;профиле Instagram* можно добавить только одну ссылку, но&nbsp;одной ссылки часто
						недостаточно, чтобы подробно рассказать о&nbsp;своем бизнесе и&nbsp;увеличить продажи.
					</p>
					<h3 class="text text_type_title.level_3">Привлекайте больше клиентов</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Ваши клиенты смогут не&nbsp;только оплачивать заказы, но&nbsp;и&nbsp;узнавать об&nbsp;акциях,
						новых предложениях, подробности о&nbsp;товарах, услугах и&nbsp;доставке.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_10">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатные чеки по всем заказам</BaseChip>
			<h2 class="text text_type_title.level_1">Web-касса ArsenalPay</h2>
			<p class="text text_level_1">
				Если клиент оплатил заказ наличными, переводом на&nbsp;карту, или перечислил деньги на&nbsp;расчётный
				счёт, вы&nbsp;легко и&nbsp;быстро пробьёте чек в&nbsp;личном кабинете. Чеки пробиваются с&nbsp;полной
				номенклатурой, в&nbsp;соответствии с&nbsp;последними изменениями 54‑ФЗ.
				<br class="br br--show-md br--hide-lg" /><b
					class="text text_color_pink text_weight_bold text_display_inline.on_screen_sm"
					>Чеки&nbsp;бесплатны и&nbsp;без комиссии.</b
				>
				<br class="br br--show-md" />
				Мгновенно отправляются через ОФД в&nbsp;налоговую и&nbsp;на&nbsp;email вашего клиента. Теперь у&nbsp;вас
				будут чеки по&nbsp;всем&nbsp;заказам.
			</p>
		</div>
	</section>
	<section class="page-section page-section_order_11">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1 text_mgb_60 text_mgb_50.on_screen_md">Удобные платёжные функции</h2>
			<div class="page-section__box page-section__box_type_one">
				<BaseIcon name="check-medium" width="52" height="46" color="pink" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Выставление счёта</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Счет выставляется в&nbsp;2&nbsp;клика. Просто укажите сумму и полную номенклатуру&nbsp;заказа.
					Отправьте клиенту ссылку на&nbsp;оплату счета. Сразу после оплаты клиенту придёт чек, а&nbsp;вам
					уведомление об&nbsp;успешном платеже.
				</p>
				<BaseIcon name="apple-pay-medium" width="68" height="45" color="black" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Apple Pay</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Apple Pay упростит и ускорит оплату для ваших клиентов. Им не нужно вводить данные карты, адрес
					доставки и телефон. Для безопасности платёж подтверждается<br class="br br--show-lg" />
					отпечатком пальца — Touch ID, или через распознавание лица — Face ID.<br class="br br--show-lg" />
					Отдельно настраивать Apple Pay вам не придётся, все заработает сразу.
				</p>
				<BaseIcon name="refund-medium" width="52" height="52" color="purple" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Возврат платежа</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Вы&nbsp;можете вернуть деньги клиенту в&nbsp;любое время в&nbsp;личном кабинете. Возврат можно
					сделать на&nbsp;всю сумму или на&nbsp;часть суммы. Комиссия за&nbsp;возврат платежа
					не&nbsp;взимается.
				</p>
				<BaseIcon name="hold-medium" width="50" height="50" color="cyan" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Холдирование платежей</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
					При оплате деньги на&nbsp;карте клиента временно &laquo;замораживаются&raquo;. Эта&nbsp;функция
					позволяет вам проверить наличие товара или услуги, и&nbsp;уже после проверки списать
					&laquo;замороженные&raquo; средства с&nbsp;карты клиента. Вы&nbsp;можете списать часть суммы,
					комиссия за&nbsp;платёж берётся только со&nbsp;списанной суммы. При&nbsp;отмене
					&laquo;заморозки&raquo; никакой комиссии вы&nbsp;не&nbsp;платите.
				</p>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_12">
		<div class="page-section__container">
			<div class="page-section__icon">
				<BaseIcon name="rub-big" width="120" height="120" color="green" />
			</div>
			<h2 class="text text_type_title.level_1">Никакой абонентской платы</h2>
			<p class="text text_level_1">
				<BaseLink
					href="https://arsenalpay.ru/blog/lghotnaia-komissiia-dlia-sotsialno/"
					color="blue"
					:blank="true"
					link-in="text"
					>Сниженная комиссия 1%</BaseLink
				>
				при продаже одежды, еды, техники, косметики и др.<br class="br br--show-lg" />
				Вы&nbsp;платите только за&nbsp;успешные платежи и&nbsp;экономите 50&nbsp;000&nbsp;₽ в&nbsp;год.<br
					class="br br--show-lg"
				/>
				<b class="text text_weight_bold text_color_pink text_display_inline"> Бесплатные опции</b>&nbsp;&mdash;
				онлайн касса, выставление счёта, возврат платежа, холдирование платежей, кнопки WhatsApp, Telegram,
				Viber, мультиссылка, автоматическая email&nbsp;рассылка.
			</p>
			<div class="page-section__row">
				<div class="page-section__col">
					<div class="page-section__rate">
						<BaseRateBox count="3">
							<p class="text text_in_rate-box">
								Комиссия за успешный платёж <br class="br br--show-xs" /><b>от ArsenalPay</b>
							</p>
						</BaseRateBox>
					</div>
					<div class="page-section__rate">
						<BaseRateBox count="2" prefix="+">
							<p class="text text_in_rate-box">
								Комиссия за успешный платёж <br class="br br--show-xs" /><b
									>от Visa, Mastercard, Мир, Apple Pay</b
								>
							</p>
						</BaseRateBox>
					</div>
				</div>
				<div class="page-section__col">
					<BasePrompt color="green">
						<p class="text text_in_prompt text_size_lg text_align_center.on_screen_sm">
							У нас нет дополнительных комиссий и звездочек в договоре.
						</p>
					</BasePrompt>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_13 page-section_skew_no-bottom page-section_type_reviews">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Отзывы наших клиентов</h2>
			<p class="text text_level_1">
				Больше отзывов в&nbsp;нашем
				<BaseLink href="https://www.instagram.com/arsenal_pay/" link-in="text" :target="true" color="blue"
					>Instagram*.</BaseLink
				>
				<br class="br br--show-xs" />Посмотрите
				<BaseLink href="https://arsenalpay.ru/pay/" link-in="text" color="blue">страницы оплаты</BaseLink>
				клиентов.
			</p>
			<TheReviewsSlider :reviews="reviews" />
		</div>
	</section>
	<FiscalReceiptModal :opened="isModalOpened" @on-close="isModalOpened = false" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BasePluginBox from "@/components/base/BasePluginBox.vue";
import BaseChip from "@/components/base/BaseChip.vue";
import BaseRateBox from "@/components/base/BaseRateBox.vue";
import BasePrompt from "@/components/base/BasePrompt.vue";
import TheReviewsSlider from "@/components/TheReviewsSlider.vue";
import { SwiperSlide } from "swiper/vue/swiper-vue";
import FiscalReceiptModal from "@/components/modals/FiscalReceiptModal.vue";

@Options({
	components: {
		TheReviewsSlider,
		FiscalReceiptModal,
		BaseButton,
		BaseIcon,
		BaseLink,
		BaseImage,
		BaseChip,
		BasePrompt,
		BaseRateBox,
	},
})
export default class VkontakteView extends Vue {
	isModalOpened = false;

	showModal() {
		this.isModalOpened = true;
	}

	// <i style='margin-right: 12px;'>👩</i>Косметолог Ольга Петрунина<br /><i style='margin-right: 12px;'>🏆</i>Косметолог года 2018

	reviews = [
		{
			src: "vkontakte-page/logo-reviews-dobbi-art",
			name: "@dobbi_art",
			title: "<i style='margin-right: 12px;'>🎨</i> Портреты на холсте <br /> <i style=''>⚡</i> Сделаем шедевр даже из селфи",
			text: "Нам заказывают портреты на праздники и мы должны выполнить работу быстро и качественно. То что у нас есть такая страница оплаты ускоряет работу. Мы берем предоплату, чтобы начать работу и такой способ оплаты вызывает доверие у клиентов, так как они получают чеки на свой email. Также мы просим клиентов высылать скриншот оплаты через WhatsApp или Viber и эта функция очень удачно реализована, все на одной странице, нам нравится.",
			link: {
				href: "",
				text: "Страница оплаты",
			},
		},
		{
			src: "vkontakte-page/logo-reviews-klukva",
			name: "@klukva.interior",
			title: "<i style='margin-right: 12px;'>🔥</i> Дизайн интерьера удалённо",
			text: "Делаем стильные дизайны в любой точке мира. Мы развиваем нашу студию через соцсети VK и Instagram*. Очень порадовало, что не нужно загружаться лишними проблемами с онлайн-кассой, а еще больше, что за нее вообще не нужно платить. Так как каждая выполненная нами работа индивидуальна, мы выставляем счета клиентам с различной суммой и перечислением проделанных работ. Клиент получает чек, где все это указано. Очень удобно и легко, спасибо!",
			link: {
				href: "",
				text: "Страница оплаты",
			},
		},
		{
			src: "vkontakte-page/logo-reviews-right-donuts",
			name: "@right_donuts",
			title: "<i style='margin-right: 12px;'>🍩</i> Диетические Десерты",
			text: "Мы делаем десерты для спортсменов и людей, следящих за своим питанием. Уделяем большое внимание качеству нашей продукции, хотим чтобы наши клиенты получали только положительные эмоции от работы с нами. Нам очень понравилась возможность отправки писем после оплаты. Чек-листы по правильному питанию отсылаются нашим клиентам  автоматически сразу при оплате, это очень удобно! Онлайн чеки тоже приходят сразу, клиенты довольны и мы тоже.",
			link: {
				href: "",
				text: "Страница оплаты",
			},
		},
	];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section_order_1 {
}

.page-section_order_2 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-top: 61px;
		padding-bottom: 247px;

		//@include media-breakpoint-up(md) {
		//	padding-bottom: 146px;
		//}
	}

	.page-section__button {
		margin-right: auto;
		margin-left: auto;
		max-width: 430px;

		@include media-breakpoint-up(xl) {
			max-width: 480px;
		}
	}
}

.page-section_order_3 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 59px;
		padding-bottom: 238px;

		@include media-breakpoint-up(sm) {
			padding-top: 62px;
			padding-bottom: 214px;
		}
	}

	.page-section__row {
		position: relative;
		margin-top: 45px;
		margin-left: -12px;
		max-width: 940px;

		@include media-breakpoint-up(sm) {
			margin-left: 0;
			margin-top: 28px;
		}

		@include media-breakpoint-up(sm) {
			margin-top: 45px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 33px;
		}

		@include media-breakpoint-up(lg) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 20px;
		}

		.page-section__col {
			display: grid;
			grid-template-columns: 48px 280px;
			grid-template-areas:
				"icon title"
				"icon text";
			grid-column-gap: 4px;

			@include media-breakpoint-up(sm) {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			svg {
				margin-top: -5px;
				grid-area: icon;

				@include media-breakpoint-up(sm) {
					margin-bottom: 8px;
				}

				@include media-breakpoint-up(md) {
					margin-bottom: 0;
				}

				@include media-breakpoint-up(md) {
					margin-top: 0;
				}
			}

			h3 {
				grid-area: title;
			}

			p {
				grid-area: text;
			}

			&:first-child {
				h3 {
					margin-top: 5px;

					@include media-breakpoint-up(sm) {
						margin-top: 0;
					}
				}

				svg {
					margin-top: 0;
				}
			}
		}
	}

	page-section__content {
		margin-top: 43px;

		@include media-breakpoint-up(sm) {
			margin-top: 47px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 35px;
		}

		@include media-breakpoint-up(lg) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 20px;
			max-width: 820px;
		}

		@include media-breakpoint-up(xl) {
			grid-column-gap: 60px;
			max-width: 900px;
		}

		.text + & {
			margin-top: 20px;

			@include media-breakpoint-up(sm) {
				margin-top: 45px;
			}

			@include media-breakpoint-up(md) {
				margin-top: 50px;
			}
		}
	}
}

.page-section_order_6 {
	.page-section__container {
		@include media-breakpoint-up(xl) {
			padding-bottom: 101px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-top: 90px;
			display: grid;
			grid-template-columns: 360px 1fr;
			grid-column-gap: 81px;
			align-content: center;
		}
	}

	.page-section__col {
		&:first-child {
			picture.img {
				width: 320px;
				height: 332px;

				@include media-breakpoint-up(md) {
					width: 360px;
				}
			}
		}

		&:last-child {
			@include media-breakpoint-up(xl) {
				margin-top: 25px;
			}
		}
	}
}

.page-section_order_7 {
	.page-section__container {
		padding-top: 0;
		padding-bottom: 185px;

		@include media-breakpoint-up(sm) {
			padding-bottom: 132px;
		}

		@include media-breakpoint-up(md) {
			padding-bottom: 240px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: -15px;
			padding-bottom: 159px;
		}

		@include media-breakpoint-up(xl) {
			margin-top: -7px;
		}

		@include media-breakpoint-up(xxl) {
			padding-right: 20px;
			padding-left: 20px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(sm) {
			margin-top: 42px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 60px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: 90px;
			display: grid;
			grid-template-columns: 1fr 376px;
			grid-column-gap: 44px;
			align-content: center;
		}

		@include media-breakpoint-up(xl) {
			margin-top: 69px;
		}
	}

	.page-section__col {
		&:first-child {
			position: relative;
			margin-bottom: 42px;
			margin-left: -28px;

			@include media-breakpoint-up(sm) {
				margin-left: 0;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: 60px;
			}

			@include media-breakpoint-up(lg) {
				margin-bottom: 90px;
				order: 2;
			}

			picture.img {
				width: 376px;
				height: 305px;
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				align-items: start;
				text-align: left;
				order: 1;
			}

			@include media-breakpoint-up(xl) {
				padding-top: 25px;
			}
		}
	}
}

.page-section_order_8,
.page-section_order_9 {
	.page-section__container {
		padding-top: 0;
		padding-bottom: 96px;

		@include media-breakpoint-up(md) {
			padding-bottom: 120px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 115px;
		}

		@include media-breakpoint-up(xl) {
			padding-bottom: 97px;
		}

		@include media-breakpoint-up(xxl) {
			padding-right: 20px;
			padding-left: 20px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(sm) {
			margin-top: 42px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 60px;
		}
	}

	.page-section__col {
		&:first-child {
			margin-bottom: 42px;

			@include media-breakpoint-up(md) {
				margin-bottom: 60px;
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				align-items: start;
				text-align: left;
			}
		}
	}
}

.page-section_order_8 {
	.page-section__row {
		@include media-breakpoint-up(sm) {
			margin-top: 0;
		}

		@include media-breakpoint-up(lg) {
			margin-top: 29px;
			display: grid;
			grid-template-columns: 1fr 360px;
			grid-column-gap: 60px;
			align-content: center;
		}
	}

	.page-section__col {
		&:first-child {
			@include media-breakpoint-up(lg) {
				margin-top: 19px;
				order: 2;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 0;
			}

			picture.img {
				width: 320px;
				height: 272px;

				@include media-breakpoint-up(md) {
					width: 360px;
				}
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				order: 1;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 8px;
			}
		}
	}
}

.page-section_order_9 {
	.page-section__container {
		@include media-breakpoint-up(xl) {
			padding-bottom: 101px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-top: 90px;
			display: grid;
			grid-template-columns: 360px 1fr;
			grid-column-gap: 81px;
			align-content: center;
		}
	}

	.page-section__col {
		&:first-child {
			picture.img {
				width: 320px;
				height: 332px;

				@include media-breakpoint-up(md) {
					width: 360px;
				}
			}
		}

		&:last-child {
			@include media-breakpoint-up(xl) {
				margin-top: 25px;
			}
		}
	}
}

.page-section_order_10 {
	background-color: var(--color-bg-pink-light);

	.page-section__container {
		padding-top: 11px;
		padding-bottom: 177px;

		@include media-breakpoint-up(sm) {
			padding-bottom: 174px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 52px;
			padding-bottom: 210px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: -33px;
		}

		@include media-breakpoint-up(xl) {
			margin-top: -60px;
		}

		@include media-breakpoint-up(xxl) {
			padding-top: 42px;
		}
	}
}

.page-section_order_11 {
	.page-section__container {
		padding-top: 36px;
		padding-bottom: 60px;

		@include media-breakpoint-up(sm) {
			padding-top: 39px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 80px;
			padding-bottom: 160px;
		}
	}
}

.page-section_order_12 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 10px;
		padding-bottom: 197px;

		@include media-breakpoint-up(md) {
			padding-top: 14px;
			padding-bottom: 300px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 45px;
			padding-bottom: 258px;
		}
	}

	.page-section__row {
		margin-top: 15px;
		max-width: 820px;

		@include media-breakpoint-up(lg) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-content: center;
			justify-items: start;
			grid-column-gap: 60px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 32px;
		}

		.page-section__col {
			&:first-child {
				margin-bottom: 42px;

				@include media-breakpoint-up(md) {
					margin-bottom: 28px;
					padding-left: 40px;
				}

				@include media-breakpoint-up(lg) {
					margin-bottom: 0;
					padding-left: 46px;
				}
			}

			&:last-child {
				text-align: center;

				@include media-breakpoint-up(md) {
					padding-top: 25px;
				}
			}
		}
	}

	.page-section__rate {
		&:first-child {
			margin-bottom: 24px;

			@include media-breakpoint-up(md) {
				margin-bottom: 19px;
			}
		}
	}
}

.page-section_order_13 {
	.page-section__container {
		padding-top: 31px;
		padding-bottom: 58px;

		@include media-breakpoint-up(md) {
			padding-top: 73px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 67px;
		}

		@include media-breakpoint-up(xl) {
			padding-top: 63px;
		}
	}
}
</style>
