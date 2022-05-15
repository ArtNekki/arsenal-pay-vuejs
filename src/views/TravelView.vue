<template>
	<section class="page-section page-section_order_1 page-section_skew_no-top">
		<div class="page-section__container">
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h1 class="text text_type_title.level_1">Турфирмам</h1>
			<div>
				<p class="text text_level_1">
					Полный пакет платёжных сервисов для турфирм.
					<BaseLink href="https://arsenalpay.ru/tariffs.html" :blank="true" link-in="text"
						>Сниженный тариф.</BaseLink
					>
				</p>
				<p class="text text_level_1">Удобные инструменты для вашей компании и ваших клиентов.</p>
				<p class="text text_level_1">
					Принимайте платежи от клиентов со всего мира<br class="br br--show-lg" />
					картами: Visa, MasterCard, Мир, Apple Pay.
				</p>
			</div>
			<BaseButton href="https://arsenalpay.ru/dashboard/quickstart?step=1">Подключить</BaseButton>
		</div>
	</section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="blue" />
			<h2 class="text text_type_title.level_1">
				Онлайн-касса включена.<br />
				Свою кассу покупать не нужно.
			</h2>
			<div>
				<p class="text text_level_1">
					Вы сразу получаете готовую к работе
					<BaseLink href="https://arsenalpay.ru/cashbox.html" :blank="true" link-in="text"
						>кассу ArsenalPay</BaseLink
					>
					Никаких расходов на кассу — вы платите только за чеки успешных покупок.
				</p>
				<p class="text text_level_1">
					Все чеки отправляются через ОФД в налоговую автоматически.<br class="br br--show-lg" />
					Чек отправляется на email клиента сразу после оплаты.
				</p>
			</div>
			<BaseButton text-transform="normal" icon-position="left" :full-width="true">
				<template v-slot:icon>
					<BaseIcon name="invoice-medium" width="48" height="38"></BaseIcon>
				</template>
				Пример фискального чека
			</BaseButton>
		</div>
	</section>

	<section class="page-section page-section_order_3">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="120" height="120" mods="pink" />
			<h2 class="text text_type_title.level_1">
				Бесплатная Web-касса ArsenalPay<br class="br br--show-md" />
				для туров оплаченных наличными
			</h2>
			<p class="text text_level_1">
				Клиент может оплатить тур наличными, переводом на вашу карту, или перечислением на расчётный счёт.
				В таком случае пробейте чек в личном кабинете через Web-кассу ArsenalPay. Чек отправится на email
				клиента автоматически. В чеках указывается полная номенклатура в соответствии с 54‑ФЗ.
				<b class="text text_color_pink">Чеки бесплатны и без комиссии.</b> Все чеки сохраняются
				в личном кабинете.
			</p>
		</div>
	</section>

	<section class="page-section page-section_order_4">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Всё удобные<br class="br br--show-xs" />платёжные функции</h2>
			<p class="text text_level_1">
				Холдирование платежей. Быстрое выставление счёта. Apple Pay.
				<br class="br br--show-md" />Отмена полной и частичной суммы. Сообщения об оплате и статусах заказа.
			</p>
			<div class="page-section__box">
				<BaseIcon name="hold-medium" width="50" height="50" color="purple" />
				<h3 class="text text_type_title.level_3">Холдирование платежей</h3>
				<p class="text text_level_3">
					Клиент оплачивает на вашем сайте любой тур, при этом деньги с его карты не списываются, а времено
					«замораживаются». Вы проверяете доступность тура, затем сами подтверждаете списание «замороженных»
					средств с карты клиента. Можно списывать неполную сумму при акциях, скидках или уменьшении стоимости
					тура. Если тур по каким-то причинам недоступен, то вы просто делаете возврат и деньги мгновенно
					вернутся на карту клиента. Комиссия при таком возврате не взимается.
				</p>

				<BaseIcon name="check-medium" width="52" height="46" color="pink" />
				<h3 class="text text_type_title.level_3">Выставление счёта</h3>
				<p class="text text_level_3">
					Выставляйте счета в 2 клика. Просто укажите сумму, номенклатуру и нужную вам информацию о заказе или
					клиенте. Ссылка на оплату счёта создаётся автоматически, все что вам нужно — отправить ее клиенту
					любым удобным способом. Клиент переходит по ссылке, оплачивает счёт и получает чек на свой email.
					Вам сразу приходит уведомление об оплате на email и в личный кабинет.
				</p>

				<BaseIcon name="apple-pay-medium" width="68" height="45" color="black" />
				<h3 class="text text_type_title.level_3">Apple Pay</h3>
				<p class="text text_level_3">
					Apple Pay упростит и ускорит оплату для ваших клиентов. Им не нужно вводить данные карты, адрес
					доставки и телефон. Для безопасности платёж подтверждается<br class="br br--show-lg" />
					отпечатком пальца — Touch ID, или через распознавание лица — Face ID.
					<br class="br br--show-lg" />Отдельно настраивать Apple Pay вам не придётся, все заработает сразу.
				</p>

				<BaseIcon name="refund-medium" width="52" height="52" color="pink" />
				<h3 class="text text_type_title.level_3">Отмена платежа</h3>
				<p class="text text_level_3">
					Вы можете отменить платёж в любое время в личном кабинете. Комиссии за отмену не взимаются. Также,
					можно отменить только часть суммы, если изменились условия тура.
				</p>

				<BaseIcon name="email-medium" width="52" height="43" color="green" />
				<h3 class="text text_type_title.level_3">Сообщения об оплате</h3>
				<p class="text text_level_3">
					Вся информация о платеже приходит на ваш email и в личный кабинет. Вы сразу видите имя клиента, его
					телефон и за какой тур он заплатил.
				</p>
				<div class="page-section__box-wrap">
					<BaseIcon name="saved-card-medium" width="62" height="46" color="" />
					<h3 class="text text_type_title.level_3">Оплата в 1 клик</h3>
					<p class="text text_level_3">
						Не нужно каждый раз вводить данные карты, достаточно воспользоваться функцией запоминания карты
						и всегда оплачивать в 1 клик. Количество успешных платежей возрастает. Самый удобный способ
						оплаты.
					</p>

					<BaseIcon name="autopayment-medium" width="52" height="43" color="pink" />
					<h3 class="text text_type_title.level_3">Оплата в рассрочку</h3>
					<p class="text text_level_3">
						Функция позволяет вашим клиентам оплачивать туры в рассрочку без комиссии. Выбирайте период
						рассрочки и оплата происходит равными частями в течение этого периода. Деньги списываются
						с карты клиента автоматически.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_5 page-section_type_cut">
		<div class="page-section__container">
			<BaseIcon name="widget-big" width="84" height="106" color="purple"></BaseIcon>
			<h2 class="text text_type_title.level_1">
				Красивый платёжный виджет<br class="br br--show-sm" />
				с простой интеграцией
			</h2>
			<div class="">
				<p class="text text_level_1">
					Виджет легко
					<BaseLink href="https://arsenalpay.ru/documentation/index.html#platezhnyj-vidzhet" link-in="text"
						>устанавливается</BaseLink
					>
					на любом сайте или в приложении.
				</p>
				<p class="text text_level_1">
					Вы можете разместить виджет на отдельной странице сайта, где клиенты сами<br
						class="br br--show-lg"
					/>
					будут вводить и оплачивать сумму тура.
				</p>
				<p class="text text_level_1">
					Если на вашем сайте нет корзины,<br class="br br--show-lg" />
					вы можете разместить виджет на каждой странице с туром.
				</p>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage
						src="travel-page/widget-travel"
						shadow="md"
						radius="md"
						:breakpoints="{ xs: true, sm: true }"
					></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Виджет оплаты</h3>
					<p class="text text_level_3">
						Устанавливается в любое место на сайте.<br class="br br--show-xs" />
						Настраиваются дополнительные поля.<br class="br br--show-xs" />
						<BaseLink href="https://arsenalpay.ru/customization/" link-in="text">Цвета виджета</BaseLink>
						настраиваются под ваш сайт. <br class="br br--show-xxs" />Виджет адаптируется под все
						устройства.
					</p>

					<BaseIcon name="security-medium" color="pink" />
					<h3 class="text text_type_title.level_3">Безопасность</h3>
					<p class="text text_level_3">
						Безопасная обработка данных карт<br class="br br--show-xs" />
						по стандарту PCI DSS 3.2 level 1.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_6">
		<div class="page-section__container">
			<BaseIcon name="rub-big" width="120" height="120" color="green" />
			<h2 class="text text_type_title.level_1">
				Платежи перечисляются<br class="br br--show-xs" />
				на расчётный счёт фирмы каждый день
			</h2>

			<div class="page-section__box">
				<BaseIcon name="check-circle-medium" width="" height="" color="pink" />
				<h3 class="text text_type_title.level_3">Без комиссий</h3>
				<p class="text text_level_3">
					Никаких скрытых комиссий <br class="br br--show-xl" />за&nbsp;вывод на&nbsp;расчётный счёт.
				</p>
				<BaseIcon name="check-circle-medium" color="pink" width="" height="" />
				<h3 class="text text_type_title.level_3">Без минимальных сумм</h3>
				<p class="text text_level_3">
					Накапливать сумму для <br class="br br--show-xl" />вывода не&nbsp;нужно.
				</p>
				<BaseIcon name="check-circle-medium" color="pink" width="" height="" />
				<h3 class="text text_type_title.level_3">В&nbsp;любой банк России</h3>
				<p class="text text_level_3">
					Ваш расчётный счёт может <br class="br br--show-xl" />быть в&nbsp;любом банке&nbsp;РФ.
				</p>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_7">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Никакой абонентской платы</h2>
			<p class="text text_level_1">
				Вы платите только за успешные платежи.<br class="br br--show-md" />
				Без дополнительных комиссий и звёздочек в договоре.
			</p>
			<div class="page-section__box">
				<b>Приём платежей картами всех стран мира</b>
				<p>Visa, MasterCard, Мир, Apple Pay.</p>
				<div class="row row--rates">
					<!--					{{{ rate-box count="2.2" text="За успешный платёж" mods="column, inline-prefix, sm, no-mgb" }}}-->
					<!--					{{{ rate-box count="0.2" prefix="+" text="За онлайн чек платежа" mods="column, inline-prefix, sm, no-mgb" }}}-->
				</div>
				<b>Сюда включено</b>
				<div class="row row--list">
					<!--					{{{ list items='[{"icon": "input-cashier", "text": "Онлайн касса ArsenalPay", "href": "https://arsenalpay.ru/cashbox.html", "textColor": "dark-blue"}, {"icon": "input-invoice", "text": "Выставление счёта"}]' mods="" }}}-->
					<!--					{{{ list items='[{"icon": "input-apple", "text": "Apple Pay"}, {"icon": "input-save-card", "text": "Запоминание карты"},-->
					<!--					{"icon": "input-hold", "text": "Холдирование"}]' mods="order-3-md, order-1-lg, no-mgt-lg" }}}-->
					<!--					{{{ list items='[{"icon": "input-refund", "text": "Возврат платежа"},-->
					<!--					{"icon": "input-autopayments", "text": "Оплата в рассрочку"}]' mods="no-mgt-md" }}}-->
				</div>
				<b>Бесплатно</b>
				<div class="row row--list">
					<!--					{{{ list items='[{"text": "Подключение"}, {"text": "Пользование кассой"}, {"text": "Техподдержка"}]' iconsColor="pink" mods="no-mgt, hide-lg, no-ls" }}}-->
					<!--					{{{ list items='[{"text": "Свой менеджер"}, {"text": "Личный кабинет"}]' iconsColor="pink"  mods="hide-lg, no-mgt-md, no-ls" }}}-->

					<!--					{{{ list items='[{"text": "Подключение"}, {"text": "Пользование кассой"}]' iconsColor="pink" mods="hide-xs, show-lg, no-mgt, no-ls" }}}-->
					<!--					{{{ list items='[{"text": "Техподдержка"}, {"text": "Свой менеджер"}]' iconsColor="pink" mods="hide-xs, show-lg, no-mgt, no-ls" }}}-->
					<!--					{{{ list items='[{"text": "Личный кабинет"}]' mods="hide-xs, show-lg, no-mgt, no-ls" iconsColor="pink" }}}-->
				</div>
				<div class="page-section__button">
					<BaseLink href="https://arsenalpay.ru/dashboard/register?step=1">Подключить</BaseLink>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_8">
		<div class="page-section__container">
			<h2 class="page-section__title">Отзывы наших клиентов</h2>
			<TheReviewsSlider :reviews="reviews" />
		</div>
	</section>

	<section class="page-section page-section_order_9 page-section_skew_no">
		<div class="page-section__container">
			<h2 class="page-section__title">Вопросы и ответы</h2>
			<div class="page-section__box">
				<!--				{{{ info-box-->
				<!--				title="Как быстро деньги переводятся на расчётный счёт и в какой банк?"-->
				<!--				text="Деньги перечисляются на расчётный счёт вашей компании каждый день в автоматическом режиме, вам не-->
				<!--				нужно выводить их самостоятельно. Расчётный счёт можно иметь в любом банке РФ, новый счёт открывать не придётся."-->
				<!--				mods="mgb-24, mgb-md-42, text-left"-->
				<!--				textMods="mw-lg-820, lh-md-26"-->
				<!--				}}}-->
				<!--				{{{ info-box-->
				<!--				title="Принимаются ли карты всех стран мира?"-->
				<!--				text="У нас нет ограничений по странам мира. Клиент сможет оплатить тур любой зарубежной картой Visa, MasterCard, Maestro."-->
				<!--				mods="mgb-24, mgb-md-42, text-left"-->
				<!--				textMods="mw-lg-820, lh-md-26"-->
				<!--				}}}-->
				<!--				{{{ info-box-->
				<!--				title="На сколько выгодней использовать онлайн-кассу ArsenalPay?"-->
				<!--				text="Касса ArsenalPay работает при каждом платеже автоматически. Вы не тратите время и деньги на покупку, настройку и работу-->
				<!--				с кассой. Все чеки, как и все платежи находятся в одном личном кабинете. Чеки всегда соответствуют последним изменениям 54-ФЗ,-->
				<!--				мы за этим следим. При изменении в законе вам ничего не придётся менять на вашем сайте. Использование кассы ArsenalPay экономит-->
				<!--				вам от 30 000 до 40 000 ₽ в год."-->
				<!--				mods="mgb-24, mgb-md-42, text-left"-->
				<!--				textMods="mw-lg-820, lh-md-26"-->
				<!--				}}}-->
			</div>
		</div>
	</section>
	<!--	<article id="kassa" class="modal modal&#45;&#45;new-check" data-close>-->
	<!--		<div class="modal__body">-->
	<!--			<button type="button" class="modal__close" data-close>-->
	<!--				{{{ icon name="cross" width="12" height="12" }}}-->
	<!--			</button>-->
	<!--			{{{ img name="new-check" mods="new-check" breakpoints='{"md": true}'}}}-->
	<!--		</div>-->
	<!--	</article>-->
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

@Options({
	components: {
		TheReviewsSlider,
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
export default class TravelView extends Vue {
	reviews = [
		{
			src: "logo-reviews-holiday",
			name: "Holidaygo",
			title: "<span style='display: inline-block;margin-right: 8px;'><i>✈️</i></span> Туристический портал с горящими турами",
			text:
				"Мы продаём туры от ведущих 130 туроператоров онлайн, поэтому нам необходима надежная система оплаты на сайте.\n" +
				"Наши клиенты сами выбирают себе тур и сразу оплачивают его. Интеграция с ArsenalPay позволила нам безопасно принимать\n" +
				"оплату, так как сумма на карте клиента замораживается до подтверждения бронирования. После оплаты клиенты получают чек, что\n" +
				"свидетельствует о нашей надежности и исполнении законов.",
		},
		{
			src: "logo-reviews-adven",
			name: "ADVEN2R",
			title: "<span style='display: inline-block;margin-right: 8px;'><i>🌴</i></span> Клуб путешественников",
			text:
				"Нам очень понравилась возможность не покупать онлайн кассу, а пользоваться готовой кассой ArsenalPay.\n" +
				"Получается хорошо экономить. Тарифы на платежи тоже порадовали. Спасибо за качественный личный кабинет.\n" +
				"Можно посмотреть платёж, имя клиента и полный чек. Мы часто выставляем счета клиентам, у вас это очень удобно сделано.\n" +
				"Мы довольны, что наши клиенты могут купить тур не выходя из дома!",
		},
		{
			src: "logo-reviews-baikal",
			name: "BaikalExpress",
			title: "<span style='display: inline-block;margin-right: 4px;'><i>🏖</i></span> Туры из Иркутска",
			text:
				"После подключения платежей от ArsenalPay наша продажа туров упростилась и стала более организованной.\n" +
				"Мы пользуемся функцией заморозки средств, проверяем тур на доступность и только потом подтверждаем списание у клиента.\n" +
				"Это очень удобно, так как можно сделать быстрый возврат и не волноваться. Решение с кассой нас больше чем устраивает,\n" +
				"не надо платить лишнего и подключать дополнительные сервисы.",
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
}

.page-section_order_2 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-top: 61px;
		padding-bottom: 167px;

		@include media-breakpoint-up(md) {
			padding-bottom: 146px;
		}
	}
}

.page-section_order_3 {
	background-color: var(--color-bg-pink-light);

	.page-section__container {
		padding-top: 61px;
		padding-bottom: 245px;

		@include media-breakpoint-up(md) {
			padding-top: 61px;
		}
	}
}

.page-section_order_4 {
	.page-section__container {
		padding-top: 48px;
		padding-bottom: 235px;
		overflow: hidden;

		@include media-breakpoint-up(md) {
			padding-top: 69px;
			padding-bottom: 308px;
		}
	}
}

.page-section_order_5 {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 55px;
		padding-bottom: 257px;

		@include media-breakpoint-up(md) {
			padding-top: 61px;
		}
	}
}

.page-section_order_6 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 59px;
		padding-bottom: 242px;

		@include media-breakpoint-up(sm) {
			padding-top: 62px;
			padding-bottom: 217px;
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

.page-section_order_7 {
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
}

.page-section_order_8 {
	.page-section__container {
		margin-top: -15px;
		padding-top: 0;

		@include media-breakpoint-up(sm) {
			padding-top: 21px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 10px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: -46px;
		}
	}
}

.page-section_order_9 {
	margin-top: -70px;
	padding-top: 0;
	padding-bottom: 95px;

	@include media-breakpoint-up(md) {
		margin-top: -128px;
		padding-bottom: 80px;
	}
}
</style>
