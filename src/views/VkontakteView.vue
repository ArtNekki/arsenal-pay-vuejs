<template>
	<section class="page-section page-section_order_1">
		<div class="page-section__container">
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h1 class="text text_type_title.level_1 u-shift-left.on_screen_xl">Приём платежей Вконтакте</h1>
			<p class="text text_level_1 text_ls_sm u-shift-left.on_screen_xl">
				Оплата товаров и услуг на любой странице в VK. Бесплатная онлайн-касса. Деньги поступают на ваш
				расчётный счёт ежедневно и без комиссий. Свой сайт не нужен. Visa, MasterCard, Мир, Apple Pay.
			</p>
			<div class="page-section__button page-section__button_type_top">
				<BaseButton href="https://arsenalpay.ru/dashboard/quickstart?step=1">Подключить</BaseButton>
			</div>
			<div class="page-section__video">
				<BaseVideo />
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="blue" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">
				Онлайн касса бесплатно.<br />
				Свою кассу покупать не нужно.
			</h2>
			<div class="u-max-width_820.on_screen_lg">
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Вам не нужно покупать или брать в аренду свою онлайн-кассу.<br class="br br--show-lg" />
					Все платежи проходят через
					<BaseLink href="https://arsenalpay.ru/cashbox.html" :blank="true" link-in="text" color="blue"
						>онлайн-кассу ArsenalPay</BaseLink
					>
					бесплатно.
				</p>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Чеки отправляются через ОФД в налоговую автоматически.<br class="br br--show-lg" />
					Клиент получает чек на свой email сразу после оплаты.<br class="br br--show-lg" />
					Чеки сохраняются в личном кабинете и всегда доступны.
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
				на ваш расчётный счёт ежедневно и без комиссий
			</h2>
			<p class="text text_level_1">
				Деньги поступают автоматически на расчётный счёт юрлица, ИП или самозанятого. Доступно и <BaseLink
					href="#"
					link-in="text"
					color="blue"
					> мгновенное зачисление средств</BaseLink
				>.
			</p>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">Без комиссий</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm text_mgb_42.on_screen_md">
						Никаких комиссий за вывод на расчётный счёт.
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
	<section class="page-section page-section_order_4 page-section_skew_no-bottom">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">
				Принимайте оплату <br class="br br--show-sm" />
				через ссылку в товаре
			</h2>
			<p class="text text_level_1 text_mgb_60">
				Добавьте ссылку на страницу оплаты в каждый товар.<br class="br br--show-lg" />
				Клиент сможет перейти по ней и оплатить нужную сумму.
			</p>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/vk-items"
						shadow="md"
						radius="md"
						width="320"
						height="598"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/payment"
						shadow="md"
						radius="md"
						width="320"
						height="810"
					></BaseImage>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_5 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">Выставляйте счета в 2 клика</h2>
			<div>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					В счёте указывается полная номенклатура и информация о клиенте, все по 54‑ФЗ.
				</p>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Отправляйте счёт любым удобным способом: WhatsApp, Telegram, Viber, VK.
				</p>
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Клиент оплачивает счёт по ссылке и получает чек об оплате.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/invoice"
						shadow="md"
						radius="md"
						width="320"
						height="588"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<BaseImage
						src="vkontakte-page/whatsapp"
						shadow="md"
						radius="lg"
						width="320"
						height="588"
					></BaseImage>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_6 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1 text_mgb_42">
				Принимайте оплату<br class="br br--show-sm" />
				в любых соцсетях и мессенджерах
			</h2>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="vkontakte-page/messengers" width="360" height="308"></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Размещайте ссылку на оплату где угодно</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Вы можете размещать ссылку на вашу страницу оплаты в любых соцсетях. Указывать ее в описании
						группы, магазина или личной страницы.
					</p>
					<h3 class="text text_type_title.level_3">Отправляйте ссылку на оплату любыми способами</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Используте любой удобный мессенджер WhatsApp,<br
							class="br br--show-md br--hide-lg br--show-xl"
						/>
						Telegram, Viber, VK . Отправляйте ссылку на оплату во время общения с клиентами.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_7 page-section_skew_no">
		<div class="page-section__container">
			<BaseChip view="pink">Бесплатно</BaseChip>
			<h2 class="text text_type_title.level_1">
				Автоматизируйте продажу<br class="br br--show-sm" />
				цифрового контента
			</h2>
			<p class="text text_level_1 text_mgb_42 text_display_inline.on_screen_sm">
				Бесплатная email рассылка. Никаких настроек и интеграций.
			</p>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="vkontakte-page/widget-email" width="376" height="305"></BaseImage>
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
			<h2 class="text text_type_title.level_1">
				Оставайтесь на связи с клиентами.<br class="br br--show-sm" />
				Кнопки WhatsApp, Telegram, Viber.
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
					<h3 class="text text_type_title.level_3">Общение сразу после оплаты</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Клиент сможет написать вам сразу как оплатил заказ. Не нужно куда-то переходить и искать другие
						способы связи.
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
			<h2 class="text text_type_title.level_1">Соберите все важные ссылки вместе.</h2>
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
					<h3 class="text text_type_title.level_3">Расскажите все о вашем бизнесе</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Разместите ссылки на ваши соцсети, на частые вопросы, на отзывы, видео, информацию о доставке.
					</p>
					<h3 class="text text_type_title.level_3">Привлекайте больше клиентов</h3>
					<p class="text text_level_3 text_max-width_520.on_screen_md text_mgb_40.on_screen_md">
						Ваши клиенты смогут не только оплачивать заказы, но и узнавать об акциях, новых предложениях,
						подробности о товарах, услугах.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_10">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="pink" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">
				Бесплатная Web-касса ArsenalPay<br class="br br--show-sm" />
				для заказов оплаченных наличными
			</h2>
			<p class="text text_level_1">
				Пробивайте чеки для заказов, оплаченных наличными, переводом на карту, или перечислением
				на расчётный счёт. Чеки легко пробиваются в личном кабинете и отправляются на email клиента
				автоматически. Полная номенклатура в чеках заполняется в соответствии с 54‑ФЗ.
				<b
					class="text text_color_pink text_weight_bold text_display_inline text_display_block.on_screen_lg text_display_inline.on_screen_xl"
					>Чеки&nbsp;бесплатны&nbsp;и&nbsp;без комиссии</b
				>. Чеки&nbsp;по всем заказам сохраняются в личном кабинете.
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
					Счёт выставляется в личном кабинете в 2 клика. Просто укажите сумму и полную номенклатуру заказа,
					затем отправьте клиенту созданную ссылку. Сразу после оплаты клиенту придёт чек, а вам уведомление
					об успешном платеже.
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
					Вы легко сможете вернуть деньги клиенту в любое время в личном кабинете. Возврат можно сделать
					на всю сумму или на часть суммы. Комиссии за возврат нет.
				</p>
				<BaseIcon name="hold-medium" width="50" height="50" color="cyan" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Холдирование платежей</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
					Холдирование платежей позволяет вам проверить наличие товара или услуги. Деньги с карты клиента
					не списываются сразу, а временно «замораживаются». После проверки наличия, вы подтверждаете списание
					суммы. Можно списать как всю сумму так и ее часть. Комиссия за платёж берётся только со списанной
					суммы. Комиссия за отмену «заморозки» не взимается.
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
				Вы платите только за успешные платежи и экономите от 50 000 ₽ в год.<br class="br br--show-lg" />
				<b class="text text_weight_bold text_color_pink text_display_inline"> Бесплатные опции</b>&nbsp;&mdash;
				онлайн-касса, перевод средств на расчётный счёт, выставление счёта, возврат платежа, холдирование
				платежей, кнопки WhatsApp, Telegram, Viber, важные ссылки, автоматическая email рассылка.
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
import BaseVideo from "@/components/base/BaseVideo.vue";

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
		BaseNotice,
		BaseVideo,
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
	background-color: var(--color-bg-pink-light);

	&::before {
		top: -90px;
		transform: unset;
	}

	.page-section__container {
		padding-top: 50px;
		padding-bottom: 182px;

		@include media-breakpoint-up(lg) {
			padding-top: 60px;
			padding-bottom: 190px;
		}

		@include media-breakpoint-up(xl) {
			max-width: 1238px;
		}
	}

	.page-section__button {
		@include media-breakpoint-up(sm) {
			margin-top: 20px;
		}
	}
}

.page-section_order_2 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 250px;

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
		padding-top: 60px;
		padding-bottom: 238px;

		@include media-breakpoint-up(sm) {
			padding-bottom: 215px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 240px;
		}
	}

	.page-section__row {
		position: relative;
		margin-top: 21px;
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

.page-section_order_4 {
	.page-section__container {
		padding-top: 48px;
		padding-bottom: 70px;

		@include media-breakpoint-up(md) {
			padding-top: 95px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 110px;
		}
	}

	.page-section__row {
		@include content-center();

		@include media-breakpoint-up(lg) {
			margin-top: 30px;
			display: grid;
			grid-template-columns: repeat(2, 320px);
			grid-column-gap: 120px;
			justify-content: center;
			align-items: start;
		}
	}

	.page-section__col {
		&:first-child {
			position: relative;
			//margin-bottom: 70px;
			margin-bottom: 68px;

			&::before {
				content: "";
				position: absolute;
				bottom: -85px;
				left: 230px;
				width: 55px;
				height: 98px;
				background-image: url("~@/assets/images/vkontakte-page/arrow-dotted-down-left.svg");
				background-repeat: no-repeat;

				@include media-breakpoint-up(lg) {
					bottom: 75px;
					left: 296px;
					width: 132px;
					height: 58px;
					background-image: url("~@/assets/images/vkontakte-page/arrow-dotted-right.svg");
				}
			}
		}

		&:last-child {
			:deep(img) {
				width: 320px;
				height: 810px;
			}
		}
	}
}

.page-section_order_5 {
	.page-section__container {
		padding-top: 48px;
		padding-bottom: 117px;

		@include media-breakpoint-up(lg) {
			padding-bottom: 92px;
		}
	}

	.page-section__row {
		@include content-center();

		margin-top: 45px;

		@include media-breakpoint-up(sm) {
			margin-top: 60px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: 90px;
			display: grid;
			grid-template-columns: repeat(2, 320px);
			grid-column-gap: 120px;
			justify-content: center;
			align-items: start;
		}
	}

	.page-section__col {
		&:first-child {
			position: relative;
			//margin-bottom: 70px;
			margin-bottom: 68px;

			&::before {
				content: "";
				position: absolute;
				bottom: -85px;
				left: 52px;
				width: 55px;
				height: 98px;
				background-image: url("~@/assets/images/vkontakte-page/arrow-dotted-down-right.svg");
				background-repeat: no-repeat;

				@include media-breakpoint-up(lg) {
					bottom: 68px;
					left: 298px;
					width: 132px;
					height: 58px;
					background-image: url("~@/assets/images/vkontakte-page/arrow-dotted-right.svg");
				}
			}
		}

		&:last-child {
			:deep(img) {
				width: 320px;
			}
		}
	}
}

.page-section_order_6 {
	.page-section__container {
		padding-bottom: 95px;

		@include media-breakpoint-up(md) {
			padding-bottom: 120px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 135px;
		}

		@include media-breakpoint-up(xl) {
			padding-bottom: 85px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-top: 48px;
			display: grid;
			grid-template-columns: 360px 400px;
			grid-column-gap: 60px;
			align-content: center;
			justify-content: center;
		}

		@include media-breakpoint-up(xl) {
			margin-top: 23px;
			grid-column-gap: 82px;
			grid-template-columns: 360px 1fr;
		}

		@include media-breakpoint-up(xxl) {
			grid-column-gap: 120px;
			grid-template-columns: 360px 520px;
		}
	}

	.page-section__col {
		&:first-child {
			@include content-center();

			position: relative;
			margin-top: 8px;
			margin-bottom: 35px;

			@include media-breakpoint-up(lg) {
				margin-top: 55px;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 47px;
				margin-left: 2px;
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				text-align: left;
				align-items: unset;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 25px;
			}
		}
	}
}

.page-section_order_7 {
	.page-section__container {
		padding-top: 0;
		padding-bottom: 96px;
		overflow: hidden;

		@include media-breakpoint-up(md) {
			padding-bottom: 120px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: -15px;
			padding-bottom: 120px;
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
		@include media-breakpoint-up(lg) {
			margin-top: 48px;
			display: grid;
			grid-template-columns: 400px 376px;
			grid-column-gap: 44px;
			align-content: center;
			justify-content: center;
		}

		@include media-breakpoint-up(xl) {
			grid-template-columns: 1fr 376px;
		}
	}

	.page-section__col {
		&:first-child {
			@include content-center();

			position: relative;
			margin-bottom: 40px;

			@include media-breakpoint-up(sm) {
				margin-left: 0;
			}

			@include media-breakpoint-up(lg) {
				padding-top: 2px;
				//margin-bottom: 90px;
				order: 2;
			}

			picture.img {
				width: 376px;
				height: 305px;
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				align-items: unset;
				text-align: left;
				order: 1;
			}

			@include media-breakpoint-up(xl) {
				padding-top: 25px;
			}
		}
	}
}

.page-section_order_8 {
	.page-section__container {
		padding-bottom: 96px;

		@include media-breakpoint-up(md) {
			padding-bottom: 120px;
		}

		@include media-breakpoint-up(xl) {
			padding-bottom: 100px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(sm) {
			margin-top: 0;
		}

		@include media-breakpoint-up(lg) {
			margin-top: 75px;
			display: grid;
			grid-template-columns: 400px 360px;
			grid-column-gap: 60px;
			align-content: center;
			justify-content: center;
		}

		@include media-breakpoint-up(xl) {
			grid-template-columns: 1fr 360px;
		}
	}

	.page-section__col {
		&:first-child {
			@include content-center();

			margin-top: 32px;
			margin-bottom: 60px;

			@include media-breakpoint-up(sm) {
				margin-top: 45px;
			}

			@include media-breakpoint-up(lg) {
				margin-top: 19px;
				order: 2;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 0;
			}

			@include media-breakpoint-up(xxl) {
				right: -20px;
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
				text-align: left;
				align-items: unset;
			}

			@include media-breakpoint-up(xl) {
				margin-top: 8px;
			}

			@include media-breakpoint-up(xxl) {
				left: -20px;
			}
		}
	}
}

.page-section_order_9 {
	.page-section__container {
		padding-bottom: 205px;

		@include media-breakpoint-up(md) {
			padding-bottom: 230px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 245px;
		}

		@include media-breakpoint-up(xl) {
			padding-bottom: 270px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-top: 30px;
			display: grid;
			grid-template-columns: 360px 400px;
			grid-column-gap: 60px;
			justify-content: center;
			align-items: center;
		}

		@include media-breakpoint-up(xl) {
			grid-template-columns: 360px 1fr;
			grid-column-gap: 80px;
		}
	}

	.page-section__col {
		&:first-child {
			@include content-center();

			margin-top: 32px;
			margin-bottom: 60px;

			@include media-breakpoint-up(sm) {
				margin-top: 45px;
			}

			@include media-breakpoint-up(xxl) {
				left: -20px;
			}

			picture.img {
				width: 320px;
				height: 332px;

				@include media-breakpoint-up(md) {
					width: 360px;
				}
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				padding-top: 25px;
				text-align: left;
				align-items: unset;
			}

			@include media-breakpoint-up(xxl) {
				right: -20px;
			}
		}
	}
}

.page-section_order_10 {
	background-color: var(--color-bg-pink-light);

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 245px;

		@include media-breakpoint-up(lg) {
			margin-top: -33px;
		}

		@include media-breakpoint-up(xl) {
			margin-top: -60px;
		}

		@include media-breakpoint-up(xxl) {
			padding-top: 60px;
		}
	}
}

.page-section_order_11 {
	.page-section__container {
		padding-top: 48px;
		padding-bottom: 210px;

		@include media-breakpoint-up(md) {
			padding-top: 90px;
			padding-bottom: 310px;
		}
	}

	.page-section__box {
		@include media-breakpoint-up(xl) {
			max-width: 860px;
		}
	}
}

.page-section_order_12 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 265px;

		@include media-breakpoint-up(md) {
			padding-bottom: 300px;
		}

		@include media-breakpoint-up(lg) {
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
		padding-top: 51px;
		padding-bottom: 58px;

		@include media-breakpoint-up(md) {
			padding-top: 73px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 95px;
		}
	}
}
</style>
