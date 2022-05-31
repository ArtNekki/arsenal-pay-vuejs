<template>
	<section class="page-section page-section_order_1 page-section_skew_inverse page-section_skew_no-top">
		<div class="page-section__container">
			<h1 class="text text_type_title.level_1">Интернет-провайдерам</h1>
			<div class="u-max-width_688.on_screen_md u-max-width_840.on_screen_lg">
				<p class="text text_level_1 text text_level_1 text_display_inline.on_screen_sm text_ls_sm">
					Полный пакет платежных сервисов для интернет и ТВ провайдеров. <br class="br br--show-lg" />
					<BaseLink href="https://arsenalpay.ru/tariffs.html" link-in="text" color="blue"
						>Сниженный тариф.</BaseLink
					>
				</p>
				<p class="text text_level_1 text text_level_1 text_display_inline.on_screen_sm text_ls_sm">
					Удобные инструменты для вашей компании и ваших<br class="br br--show-lg" />
					клиентов.
				</p>
				<p class="text text_level_1 text text_level_1 text_display_inline.on_screen_sm text_ls_sm">
					Принимайте платежи от клиентов со всего мира картами:<br class="br br--show-lg" />
					Visa, MasterCard, Мир, Apple Pay.
				</p>
			</div>
			<div class="page-section__button page-section__button_type_top">
				<BaseButton href="https://arsenalpay.ru/dashboard/register?step=1">Подключить</BaseButton>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="blue" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">
				Онлайн-касса включена.<br />
				Свою кассу покупать не нужно.
			</h2>
			<div class="u-max-width_688.on_screen_md u-max-width_840.on_screen_lg">
				<p class="text text_level_1 text_display_inline.on_screen_sm">
					Вы сразу получаете готовую к работе
					<BaseLink href="https://arsenalpay.ru/cashbox.html" link-in="text" color="blue"
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
				<BaseButton text-transform="normal" icon-position="left" :full-width="true" @click="showModal()">
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
			<h2 class="text text_type_title.level_1">Всё для увеличения конверсии</h2>
			<p class="text text_level_1 text_ls_sm text_mgb_60 text_mgb_50.on_screen_md">
				Управление автоплатежами. Запоминание карты. Apple Pay.<br class="br br--show-lg" />
				Оплата без ввода 3DS. Страница при нулевом балансе.
			</p>
			<div class="page-section__box page-section__box_type_one u_overflow_hidden.on_screen_md">
				<BaseIcon name="autopayment-medium" color="green" width="48" height="53" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Автоплатежи</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Полное управление автоплатежами через API и в личном кабинете. Ваши клиенты смогут самостоятельно
					изменить все настройки автоплатежа, без обращения в поддержку. Сумма автоплатежа автоматически
					меняется при смене тарифа. Также можно изменять периодичность и отключать автоплатёж на время.
				</p>
				<BaseIcon name="saved-card-medium" color="purple" width="62" height="46" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Запоминание карты</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Функция позволяет совершать оплату в 1 клик. Увеличивает процент успешных платежей. Уже
					60% пользователей сохраняют свои карты, и доверие с каждым годом только растет.
				</p>
				<BaseIcon name="apple-pay-medium" color="black" width="68" height="45" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Apple Pay</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Apple Pay упростит и ускорит оплату для ваших клиентов. Им не нужно вводить данные карты, адрес
					доставки и телефон. Для безопасности платёж подтверждается<br class="br br--show-lg" />
					отпечатком пальца — Touch ID, или через распознавание лица — Face ID.<br class="br br--show-lg" />
					Отдельно настраивать Apple Pay вам не придётся, все заработает сразу.
				</p>

				<BaseIcon name="3ds-medium" color="pink" width="52" height="52" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Оплата без 3DS</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Функция позволяет настраивать лимиты на сумму платежа, при которых можно не запрашивать код
					подтверждения оплаты 3DS. Пользователям не нужно вводить 3DS, оплата становится быстрее и удобнее.
					Количество успешных платежей увеличивается.
				</p>
				<BaseIcon name="pay-medium" color="cyan" width="45" height="53" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Страница при нуле</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Виджет оплаты можно легко встроить на страницу, которая информирует о нулевом балансе. Клиенты
					смогут оплачивать услуги без дополнительной авторизации даже при отрицательном балансе. Если
					у вашего сервиса нет такой страницы, мы сделаем ее для вас.
				</p>
				<div class="page-section__box-wrap">
					<BaseIcon name="api-medium" color="purple" width="52" height="52" bottom-space="md" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">ArsenalPay API</h3>
					<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
						Все платёжные функции доступны через API.<br class="br br--show-lg" />
						Гибкое управление платежами в любом биллинге.
						<BaseLink href="https://arsenalpay.ru/documentation/index.html#api" link-in="text" color="blue"
							>Протестируйте наше API.</BaseLink
						>
					</p>

					<BaseIcon name="3ds-medium" color="pink" width="52" height="52" bottom-space="md" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">IP-адреса 3DS страниц банков</h3>
					<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
						Мы предоставляем API для получения актуального списка IP-адресов 3DS страниц банков. Что
						позволяет совершать оплату даже при закрытом доступе в интернет.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_4 page-section_type_cut">
		<div class="page-section__container">
			<div class="page-section__shift">
				<BaseIcon name="widget-big" width="84" height="106" color="purple" bottom-space="xl" />
				<h2 class="text text_type_title.level_1">
					Функциональный виджет<br class="br br--show-sm" />
					с простой интеграцией
				</h2>
				<p class="text text_level_1 text_ls_sm text_mgb_80">
					Виджет легко
					<BaseLink
						href="https://arsenalpay.ru/documentation/index.html#platezhnyj-vidzhet"
						link-in="text"
						color="blue"
						>устанавливается</BaseLink
					>
					не только на сайте, но и в личном кабинете, на странице при нуле или в приложении. Виджет уже
					интегрирован<br class="br br--show-lg" />
					с биллингами Гидра и Felix.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="providers-page/widget-providers" :breakpoints="{ sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Виджет оплаты</h3>
					<p class="text text_level_3 text_mgb_60 text_mgb_86.on_screen_lg text_mgb_60.on_screen_xl">
						<BaseLink href="https://arsenalpay.ru/customization/" link-in="text" color="blue"
							>Цвета виджета</BaseLink
						>
						настраиваются под ваш сайт.<br class="br br--show-sm" />
						Все варианты оплаты на одном виджете. <br class="br br--show-sm" />Виджет адаптируется под любые
						устройства.
					</p>

					<BaseIcon name="security-medium" width="38" height="48" color="pink" />
					<h3 class="text text_type_title.level_3">Безопасность</h3>
					<p class="text text_level_3">
						Безопасная обработка данных карт<br class="br br--show-sm" />
						по стандарту PCI DSS 3.2 level 1.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_5">
		<div class="page-section__container">
			<div class="page-section__shift">
				<div class="page-section__icon">
					<BaseIcon name="app-big" width="116" height="116" color="purple" />
				</div>
				<h2 class="text text_type_title.level_1">Android + iPhone приложения</h2>
				<p class="text text_level_1 text_ls_sm text_mgb_80">
					Приложение в фирменном стиле вашей компании. Удобно для клиентов и выгодно для вашего бизнеса.
					Отправка push-уведомлений вместо СМС <br class="br br--show-lg" /><b
						class="text text_color_purple text_weight_bold text_display_inline"
						>экономит от 500 000 ₽ в год.</b
					>
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="providers-page/widget-providers-mobile" :breakpoints="{ lg: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<BaseIcon name="settings-medium" width="74" height="62" color="purple" />
					<b class="text text_type_title.level_3 text_size_lg.on_screen_sm">Клиент сможет</b>
					<ul class="page-section__list">
						<li>
							<BaseIcon name="check-list-small" width="48px" height="38px" color="green" />
							<p class="text text_level_3 text_lh_32 text_mgb_no text_increase_no.on_screen_md">
								Узнавать и пополнять баланс.
							</p>
						</li>
						<li>
							<BaseIcon name="check-list-small" width="48px" height="38px" color="green" />
							<p class="text text_level_3 text_lh_32 text_mgb_no text_increase_no.on_screen_md">
								Вовремя получать уведомления о низком балансе.
							</p>
						</li>
						<li>
							<BaseIcon name="check-list-small" width="48px" height="38px" color="green" />
							<p class="text text_level_3 text_lh_32 text_mgb_no text_increase_no.on_screen_md">
								Оплачивать по карте и со счёта телефона.
							</p>
						</li>
						<li>
							<BaseIcon name="check-list-small" width="48px" height="38px" color="green" />
							<p class="text text_level_3 text_lh_32 text_mgb_no text_increase_no.on_screen_md">
								Сохранять карту и оплачивать в 1 клик.
							</p>
						</li>
						<li>
							<BaseIcon name="check-list-small" width="48px" height="38px" color="green" />
							<p class="text text_level_3 text_lh_32 text_mgb_no text_increase_no.on_screen_md">
								Самостоятельно управлять автоплатежами.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_6">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Никакой абонентской платы</h2>
			<p class="text text_level_1 text_mgb_50">
				Вы платите только за успешные платежи.<br class="br br--show-md" />
				Без дополнительных комиссий и звёздочек в договоре.
			</p>
			<div class="page-section__box">
				<b class="text text_type_title.level_2 text_mgb_no">Приём платежей картами всех стран мира</b>
				<p class="text text_level_2">Visa, MasterCard, Мир, Apple Pay.</p>
				<div class="page-section__row page-section__row_type_rates">
					<BaseRateBox count="2.2" size="sm">
						<p class="text text_level_2 text_lh_24 text_mgb_no.on_screen_sm">За успешный платёж</p>
					</BaseRateBox>
					<BaseRateBox count="0.2" prefix="+" :prefix-inline="true" size="sm">
						<p class="text text_level_2 text_lh_24 text_mgb_no">За онлайн чек платежа</p>
					</BaseRateBox>
				</div>
				<b class="text text_type_title.level_2">Сюда включено</b>
				<div class="page-section__row page-section__row_type_cards">
					<div class="page-section__col">
						<BaseIcon name="input-cashier" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_mgb_no">
							<BaseLink href="https://arsenalpay.ru/cashbox.html" link-in="text" color="blue"
								>Онлайн касса ArsenalPay</BaseLink
							>
						</p>
						<BaseIcon name="input-invoice" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Выставление счёта</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Оплата без 3D Secure</p>
					</div>
					<div class="page-section__col page-section__col_order_last.on_screen_md">
						<BaseIcon name="input-apple" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Apple Pay</p>
						<BaseIcon name="input-save-card" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Запоминание карты</p>
						<BaseIcon name="autopayment-small" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Автоплатежи</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="input-page" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Страница при нуле</p>
						<BaseIcon name="input-refund" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Возврат платежа</p>
						<BaseIcon name="input-api" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Интеграция по API</p>
					</div>
				</div>
				<b class="text text_type_title.level_2">Бесплатно</b>
				<div class="page-section__row page-section__row_hide_lg">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подключение</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Пользование кассой</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Техподдержка</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Свой менеджер</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Личный кабинет</p>
					</div>
				</div>
				<div class="page-section__row page-section__row_show_lg">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подключение</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Пользование кассой</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Техподдержка</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Свой менеджер</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no text_ls_no">Личный кабинет</p>
					</div>
				</div>
				<div class="page-section__button">
					<BaseButton href="https://arsenalpay.ru/dashboard/register?step=1">Подключить</BaseButton>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_7 page-section_type_reviews">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Отзывы наших клиентов</h2>
			<TheReviewsSlider :reviews="reviews" />
		</div>
	</section>

	<section class="page-section page-section_order_8 page-section_skew_no">
		<div class="page-section__container">
			<h2
				class="text text_type_title.level_1 text_align_center.on_screen_sm text_mgb_42 text_mgb_52.on_screen_md"
			>
				Вопросы и ответы
			</h2>
			<div class="page-section__shift">
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Как интегрировать платёжный виджет?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Вы можете встроить виджет в личный кабинет для ваших пользователей, для этого у нас есть готовые
					модули для биллинговых систем Гидра и Felix. Если вы пользуетесь другим биллингом, мы интегрируемся
					с ним. Платежи можно принимать на вашем сайте или на публичной странице при нулевом балансе, в таком
					случае при оплате клиент указывает в виджете свой лицевой счёт и почту для чека.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Как быстро деньги переводятся на счёт и в какой банк?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Расчётный счёт вашей компании может быть открыт в любом банке РФ. Открывать новый счёт не нужно.
					Деньги перечисляются на р/c каждый день автоматически.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					На сколько удобно использовать онлайн-кассу ArsenalPay?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Касса ArsenalPay встроена в платежный виджет, её не нужно отдельно интегрировать и настраивать под
					ваши системы. Вся необходимая информация для чеков передаётся при оплате. Чеки автоматически
					отправляются на email клиента. Вам не придётся вносить изменения в чеки при каждом изменении 54-ФЗ,
					всё это мы делаем сами.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Чеки соответствуют последним изменениям 54-ФЗ?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Мы следим за всеми изменениями 54-ФЗ и оперативно добавляем их в чеки. С 1 февраля 2021 года чеки
					должны содержать полную номенклатуру товаров и услуг. Для интернет провадеров в чеке должен быть
					указан лицевой счёт клиента. В чеках ArsenalPay содержится вся необходимая информация о номенклатуре
					и клиенте.
				</p>
			</div>
		</div>
	</section>
	<FiscalReceiptModal :opened="isOpened" @on-close="isOpened = false" />
</template>

<script lang="ts">
import { useMeta } from "vue-meta";
import { Options, Vue } from "vue-class-component";
import TheReviewsSlider from "@/components/TheReviewsSlider.vue";
import BaseReviewCard from "@/components/base/BaseReviewCard.vue";
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseChip from "@/components/base/BaseChip.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BasePrompt from "@/components/base/BasePrompt.vue";
import BaseRateBox from "@/components/base/BaseRateBox.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import FiscalReceiptModal from "@/components/modals/FiscalReceiptModal.vue";

@Options({
	components: {
		TheReviewsSlider,
		FiscalReceiptModal,
		BaseReviewCard,
		BaseNotice,
		BaseButton,
		BaseImage,
		BaseChip,
		BaseIcon,
		BasePrompt,
		BaseRateBox,
		BaseLink,
	},
})
export default class ProvidersView extends Vue {
	isOpened = false;

	showModal() {
		this.isOpened = true;
	}

	reviews = [
		{
			src: "logo-reviews-alians",
			name: "Альянс Телеком",
			title: "<span style='display: inline-block;margin-right: 8px;'><i>🌐</i></span> Крупнейший провайдер телекоммуникационных услуг Приморского края",
			text:
				"В партнерстве с ArsenalPay предоставляем нашим клиентам надёжный способ оплаты услуг в соответствие\n" +
				"с международным стандартом безопасности данных индустрии платёжных карт PCI DSS. При оплате наши клиенты могут быть\n" +
				"уверены в необходимом уровне безопасности и защиты от мошенничества.",
		},
		{
			src: "logo-reviews-podryad",
			name: "Подряд",
			title: "<span style='display: inline-block;margin-right: 8px;'><i>🌐</i></span> Один из крупнейших интернет и TV провайдеров Приморского края",
			text:
				"Многолетнее плодотворное сотрудничество с ArsenalPay дало возможность нашим клиентам не только удобно\n" +
				"оплачивать услуги на сайте, но и пользоваться разработанным iOS и Android приложением со всеми функциями коммуникации и оплаты.\n" +
				"Мы высоко оцениваем качество услуг и индивидуальный подход ArsenalPay.",
		},
		{
			src: "logo-reviews-ikosmos",
			name: "Космос",
			title: "<span style='display: inline-block;margin-right: 8px;'><i>🌐</i></span> Интернет и TV провайдер Тюмени",
			text:
				"Считаем предложение ArsenalPay самым выгодным на рынке. Платежи по минимальной ставке плюс интегрированная касса без\n" +
				"лишних расходов, такого мы больше нигде не нашли. Виджет установили на сайт без проблем, клиенты довольны удобством оплаты,\n" +
				"чеки приходят сразу. Спасибо за качественный сервис!",
		},
	];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section_order_1 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 128px;
		padding-bottom: 247px;

		@include media-breakpoint-up(md) {
			padding-top: 167px;
		}
	}

	.page-section__button {
		@include media-breakpoint-up(sm) {
			//margin-top: 36px;
		}

		@include media-breakpoint-up(md) {
			left: -10px;
		}

		@include media-breakpoint-up(xl) {
			margin-left: 0;
		}
	}
}

.page-section_order_2 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-top: 61px;
		padding-bottom: 248px;

		@include media-breakpoint-up(md) {
			padding-bottom: 246px;
		}
	}

	.page-section__button {
		@include media-breakpoint-up(sm) {
			max-width: 430px;
		}

		@include media-breakpoint-up(xl) {
			max-width: 480px;
		}
	}
}

.page-section_order_3 {
	.page-section__container {
		padding-top: 50px;
		padding-bottom: 230px;
		overflow: hidden;

		@include media-breakpoint-up(sm) {
			padding-bottom: 237px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 72px;
			padding-bottom: 310px;
		}
	}

	.page-section__box-wrap {
		margin-top: 44px;

		@include media-breakpoint-up(sm) {
			margin-top: 85px;
		}
	}
}

.page-section_order_4 {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 236px;

		@include media-breakpoint-up(sm) {
			margin-top: -7px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 0;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 172px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-left: 20px;
			display: grid;
			grid-template-columns: 348px 380px;
			grid-column-gap: 72px;
		}

		@include media-breakpoint-up(xl) {
			margin-left: 166px;
			grid-column-gap: 100px;
		}

		@include media-breakpoint-up(xxl) {
			margin-left: 125px;
			grid-column-gap: 140px;
		}
	}

	.page-section__col {
		--image-width: 320px;

		@include media-breakpoint-up(sm) {
			--image-width: 348px;
		}

		&:first-child {
			@include content-center();

			margin-bottom: 90px;

			@include media-breakpoint-up(sm) {
				margin-bottom: 100px;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: 90px;
			}
		}

		&:last-child {
			& > svg.icon {
				margin-bottom: 16px;

				@include media-breakpoint-up(md) {
					margin-bottom: 12px;
				}
			}

			@include media-breakpoint-up(lg) {
				padding-top: 70px;
				align-items: start;
				text-align: left;
			}

			@include media-breakpoint-up(xl) {
				padding-top: 83px;
			}
		}

		picture.img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--image-width);
			height: 498px;
			background-color: (var(--color-bg-white));
			box-shadow: var(--box-shadow-md);
			border-radius: 54px;
			overflow: hidden;

			@include media-breakpoint-up(sm) {
				height: 502px;
			}

			:deep(img) {
				width: 280px;
				height: 458px;

				@include media-breakpoint-up(sm) {
					width: 304px;
				}
			}
		}
	}
}

.page-section_order_5 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 260px;

		@include media-breakpoint-up(lg) {
			margin-bottom: -120px;
			padding-right: calc(var(--container-padding-x) - var(--container-cut));
			padding-bottom: 117px;
			overflow: hidden;
		}

		&::before {
			content: "";
			position: absolute;
			bottom: -26px;
			right: 0;
			left: 0;
			z-index: 1;
			height: 26px;
			transform: rotate3d(0, 0, 1, 3deg);
			background-color: var(--color-bg-white);

			@include media-breakpoint-up(lg) {
				bottom: -55px;
				height: 55px;
				transform: rotate3d(0, 0, 1, 5deg);
			}
		}
	}

	.page-section__row {
		@include media-breakpoint-up(lg) {
			display: grid;
			grid-template-columns: 338px 1fr;
			grid-column-gap: 47px;
		}

		@include media-breakpoint-up(xl) {
			margin-left: 121px;
			grid-column-gap: 90px;
		}

		@include media-breakpoint-up(xxl) {
			margin-left: 82px;
			grid-column-gap: 130px;
		}
	}

	.page-section__col {
		--image-width: 338px;

		@include content-center();

		&:first-child {
			position: relative;
			margin-bottom: 90px;
			height: 658px;

			@include media-breakpoint-up(lg) {
				height: 496px;
			}
		}

		&:last-child {
			--shift: 34px;

			@include media-breakpoint-up(lg) {
				padding-top: 100px;
				align-items: start;
				text-align: left;
			}

			& > svg.icon {
				margin-bottom: 16px;

				@include media-breakpoint-up(sm) {
					margin-bottom: 12px;
				}

				@include media-breakpoint-up(lg) {
					margin-left: var(--shift);
				}
			}

			& > b {
				margin-left: var(--shift);
			}
		}

		picture.img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--image-width);
			height: 658px;
			background-color: var(--color-bg-white);
			box-shadow: var(--box-shadow-purple-xl);
			border-radius: 54px;

			@include media-breakpoint-up(lg) {
				height: 496px;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			:deep(img) {
				width: 320px;
				height: 640px;

				@include media-breakpoint-up(lg) {
					height: 480px;
				}
			}
		}
	}

	.page-section__list {
		@include list-clear();

		position: relative;
		left: -16px;
		text-align: left;

		@include media-breakpoint-up(sm) {
			left: -19px;
		}

		//@include media-breakpoint-up(lg) {
		//	left: 0;
		//}

		li {
			position: relative;
			display: grid;
			grid-template-columns: 48px 1fr;
			grid-column-gap: 5px;

			@include media-breakpoint-up(sm) {
				height: 32px;
			}

			&:first-child {
				margin-bottom: -4px;

				@include media-breakpoint-up(sm) {
					margin-bottom: 0;
				}
			}
		}

		svg.icon {
			margin-top: -2px;

			@include media-breakpoint-up(sm) {
				margin-top: -4px;
			}
		}
	}

	.page-section__shift {
		@include media-breakpoint-up(lg) {
			left: -8px;
		}

		@include media-breakpoint-up(xl) {
			left: 0;
		}
	}
}

.page-section_order_6 {
	.page-section__container {
		padding-top: 50px;
		padding-bottom: 135px;

		@include media-breakpoint-up(sm) {
			padding-bottom: 145px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 73px;
			padding-bottom: 155px;
		}
	}

	.page-section__box {
		max-width: 820px;
		padding: 56px 20px 44px;
		border-radius: var(--border-radius-lg);
		background-color: var(--color-bg-gray-super-light);
		outline: 1px solid var(--color-stroke-lighten);
		align-items: start;
		text-align: left;
		box-shadow: none;

		@include media-breakpoint-up(sm) {
			padding-right: 40px;
			padding-left: 40px;
			outline: none;
		}
	}

	.page-section__row {
		position: relative;
		left: -15px;
		margin-bottom: 42px;
		display: flex;
		flex-direction: column;
		align-items: start;

		@include media-breakpoint-up(md) {
			display: grid;
			grid-template-columns: repeat(2, 270px);
			grid-column-gap: 36px;
			align-items: start;
		}

		@include media-breakpoint-up(lg) {
			grid-template-columns: 270px repeat(2, 234px);
			grid-column-gap: 9px;
		}

		&_type_rates {
			left: 0;

			@include media-breakpoint-only(sm) {
				display: grid;
				grid-template-columns: repeat(2, 200px);
				grid-column-gap: 36px;
			}
		}

		&_type_cards {
			margin-bottom: 45px;

			@include media-breakpoint-up(md) {
				margin-bottom: 27px;
			}
		}

		&_hide_lg {
			@include media-breakpoint-up(lg) {
				display: none;
			}
		}

		&_show_lg {
			display: none;

			@include media-breakpoint-up(lg) {
				display: grid;
			}
		}
	}

	.page-section__col {
		display: grid;
		grid-template-columns: 48px auto;
		grid-auto-rows: 32px;
		grid-column-gap: 1px;
		align-items: center;

		&[class~="page-section__col_order_last.on_screen_md"] {
			@include media-breakpoint-only(md) {
				order: 1;
			}
		}

		&:not(:last-child) {
			margin-bottom: 18px;
		}

		svg {
			left: -1px;
		}
	}

	.page-section__button {
		margin-top: 8px;
		max-width: 280px;

		@include media-breakpoint-up(md) {
			margin-top: -11px;
		}
	}
}

.page-section_order_7 {
	.page-section__container {
		margin-top: -16px;
		padding-top: 0;

		@include media-breakpoint-up(sm) {
			margin-top: -26px;
		}

		@include media-breakpoint-up(md) {
			margin-top: -36px;
			padding-top: 0;
		}
	}
}

.page-section_order_8 {
	padding-top: 0;

	.page-section__container {
		padding-top: 60px;
		padding-bottom: 95px;
		align-items: start;
		text-align: left;

		@include media-breakpoint-up(md) {
			padding-bottom: 80px;
		}
	}

	.page-section__shift {
		@include media-breakpoint-up(xl) {
			margin-left: 71px;
		}
	}
}
</style>
