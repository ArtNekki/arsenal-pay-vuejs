<template>
	<section class="page-section page-section_order_1 page-section_skew_no-top">
		<div class="page-section__container">
			<h1 class="text text_type_title.level_1">Турфирмам</h1>
			<div>
				<p class="text text_level_1 mod_ls">
					Полный пакет платёжных сервисов для турфирм.
					<BaseLink href="https://arsenalpay.ru/tariffs.html" :blank="true" link-in="text"
						>Сниженный тариф.</BaseLink
					>
				</p>
				<p class="text text_level_1 mod_ls">Удобные инструменты для вашей компании и ваших клиентов.</p>
				<p class="text text_level_1 mod_ls">
					Принимайте платежи от клиентов со всего мира<br class="br br--show-lg" />
					картами: Visa, MasterCard, Мир, Apple Pay.
				</p>
			</div>
			<div class="page-section__button">
				<BaseButton href="https://arsenalpay.ru/dashboard/quickstart?step=1">Подключить</BaseButton>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<div class="page-section__icon">
				<BaseIcon name="kassa-big" width="122" height="120" color="blue" />
			</div>
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
			<div class="page-section__button">
				<BaseButton text-transform="normal" icon-position="left" :full-width="true">
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
			<div class="page-section__icon">
				<BaseIcon name="kassa-big" width="122" height="120" color="pink" />
			</div>
			<h2 class="text text_type_title.level_1">
				Бесплатная Web-касса ArsenalPay<br class="br br--show-md" />
				для туров оплаченных наличными
			</h2>
			<p class="text text_level_1 mod_ls">
				Клиент может оплатить тур наличными, переводом на вашу карту, или перечислением на расчётный счёт.
				В таком случае пробейте чек в личном кабинете через Web-кассу ArsenalPay. Чек отправится на email
				клиента автоматически. В чеках указывается полная номенклатура в соответствии с 54‑ФЗ.
				<b class="text text_color_pink mod_ls">Чеки бесплатны и без комиссии.</b> Все чеки сохраняются
				в личном кабинете.
			</p>
		</div>
	</section>

	<section class="page-section page-section_order_4">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Всё удобные<br class="br br--show-xs" />платёжные функции</h2>
			<p class="text text_level_1 mod_ls text_mgb_60 text_mgb_50.on_screen_md">
				Холдирование платежей. Быстрое выставление счёта. Apple Pay.
				<br class="br br--show-md" />Отмена полной и частичной суммы. Сообщения об оплате и статусах заказа.
			</p>
			<div class="page-section__box">
				<BaseIcon name="hold-medium" width="50" height="50" color="cyan" bottom-space="md" />
				<h3 class="text text_type_title.level_3">Холдирование платежей</h3>
				<p class="text text_level_3 text_mgb_60">
					Клиент оплачивает на вашем сайте любой тур, при этом деньги с его карты не списываются, а времено
					«замораживаются». Вы проверяете доступность тура, затем сами подтверждаете списание «замороженных»
					средств с карты клиента. Можно списывать неполную сумму при акциях, скидках или уменьшении стоимости
					тура. Если тур по каким-то причинам недоступен, то вы просто делаете возврат и деньги мгновенно
					вернутся на карту клиента. Комиссия при таком возврате не взимается.
				</p>

				<BaseIcon name="check-medium" width="52" height="46" color="pink" bottom-space="md" />
				<h3 class="text text_type_title.level_3">Выставление счёта</h3>
				<p class="text text_level_3 text_mgb_60">
					Выставляйте счета в 2 клика. Просто укажите сумму, номенклатуру и нужную вам информацию о заказе или
					клиенте. Ссылка на оплату счёта создаётся автоматически, все что вам нужно — отправить ее клиенту
					любым удобным способом. Клиент переходит по ссылке, оплачивает счёт и получает чек на свой email.
					Вам сразу приходит уведомление об оплате на email и в личный кабинет.
				</p>

				<BaseIcon name="apple-pay-medium" width="68" height="45" color="black" bottom-space="md" />
				<h3 class="text text_type_title.level_3">Apple Pay</h3>
				<p class="text text_level_3 text_mgb_60">
					Apple Pay упростит и ускорит оплату для ваших клиентов. Им не нужно вводить данные карты, адрес
					доставки и телефон. Для безопасности платёж подтверждается<br class="br br--show-lg" />
					отпечатком пальца — Touch ID, или через распознавание лица — Face ID.
					<br class="br br--show-lg" />Отдельно настраивать Apple Pay вам не придётся, все заработает сразу.
				</p>

				<BaseIcon name="refund-medium" width="52" height="52" color="pink" bottom-space="md" />
				<h3 class="text text_type_title.level_3">Отмена платежа</h3>
				<p class="text text_level_3 text_mgb_60">
					Вы можете отменить платёж в любое время в личном кабинете. Комиссии за отмену не взимаются. Также,
					можно отменить только часть суммы, если изменились условия тура.
				</p>

				<BaseIcon name="email-medium" width="52" height="43" color="green" bottom-space="md" />
				<h3 class="text text_type_title.level_3">Сообщения об оплате</h3>
				<p class="text text_level_3 text_mgb_60">
					Вся информация о платеже приходит на ваш email и в личный кабинет. Вы сразу видите имя клиента, его
					телефон и за какой тур он заплатил.
				</p>
				<div class="page-section__box-wrap">
					<BaseIcon name="saved-card-medium" width="62" height="46" color="purple" bottom-space="md" />
					<h3 class="text text_type_title.level_3">Оплата в 1 клик</h3>
					<p class="text text_level_3 text_mgb_60">
						Не нужно каждый раз вводить данные карты, достаточно воспользоваться функцией запоминания карты
						и всегда оплачивать в 1 клик. Количество успешных платежей возрастает. Самый удобный способ
						оплаты.
					</p>

					<BaseIcon name="autopayment-medium" width="48" height="53" color="pink" bottom-space="md" />
					<h3 class="text text_type_title.level_3">Оплата в рассрочку</h3>
					<p class="text text_level_3 text_mgb_60">
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
			<div class="page-section__icon">
				<BaseIcon name="widget-big" width="84" height="106" color="purple"></BaseIcon>
			</div>
			<h2 class="text text_type_title.level_1">
				Красивый платёжный виджет<br class="br br--show-sm" />
				с простой интеграцией
			</h2>
			<div class="">
				<p class="text text_level_1 mod_ls">
					Виджет легко
					<BaseLink href="https://arsenalpay.ru/documentation/index.html#platezhnyj-vidzhet" link-in="text"
						>устанавливается</BaseLink
					>
					на любом сайте или в приложении.
				</p>
				<p class="text text_level_1 mod_ls">
					Вы можете разместить виджет на отдельной странице сайта, где клиенты сами<br
						class="br br--show-lg"
					/>
					будут вводить и оплачивать сумму тура.
				</p>
				<p class="text text_level_1 text_mgb_80 mod_ls">
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
					<p class="text text_level_3 text_mgb_60">
						Устанавливается в любое место на сайте.<br class="br br--show-xs" />
						Настраиваются дополнительные поля.<br class="br br--show-xs" />
						<BaseLink href="https://arsenalpay.ru/customization/" link-in="text" color="blue"
							>Цвета виджета</BaseLink
						>
						настраиваются под ваш сайт. <br class="br br--show-xxs" />Виджет адаптируется под все
						устройства.
					</p>

					<BaseIcon name="security-medium" width="38" height="48" color="pink" bottom-space="md" />
					<h3 class="text text_type_title.level_3">Безопасность</h3>
					<p class="text text_level_3 text_mgb_60">
						Безопасная обработка данных карт<br class="br br--show-xs" />
						по стандарту PCI DSS 3.2 level 1.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_6">
		<div class="page-section__container">
			<div class="page-section__icon">
				<BaseIcon name="rub-big" width="120" height="120" color="green" />
			</div>
			<h2 class="text text_type_title.level_1">
				Платежи перечисляются<br class="br br--show-xs" />
				на расчётный счёт фирмы каждый день
			</h2>

			<div class="page-section__row">
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">Без комиссий</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm">
						Никаких скрытых комиссий <br class="br br--show-xl" />за&nbsp;вывод на&nbsp;расчётный счёт.
					</p>
				</div>
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">Без минимальных сумм</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm">
						Накапливать сумму для <br class="br br--show-xl" />вывода не&nbsp;нужно.
					</p>
				</div>
				<div class="page-section__col">
					<BaseIcon name="check-circle-medium" width="48" height="38" color="pink" />
					<h3 class="text text_type_title.level_3">В&nbsp;любой банк России</h3>
					<p class="text text_level_3 text_mgb_48.on_screen_sm">
						Ваш расчётный счёт может <br class="br br--show-xl" />быть в&nbsp;любом банке&nbsp;РФ.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_7">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Никакой абонентской платы</h2>
			<p class="text text_level_1 text_mgb_50">
				Вы платите только за успешные платежи.<br class="br br--show-md" />
				Без дополнительных комиссий и звёздочек в договоре.
			</p>
			<div class="page-section__box">
				<b class="text text_type_title.level_2 text_mgb_no">Приём платежей картами всех стран мира</b>
				<p class="text text_level_2">Visa, MasterCard, Мир, Apple Pay.</p>
				<div class="page-section__row page-section__row_type_rates">
					<BaseRateBox count="2.2" size="sm">
						<p class="text text_level_2 text_lh_24">За успешный платёж</p>
					</BaseRateBox>
					<BaseRateBox count="0.2" prefix="+" size="sm">
						<p class="text text_level_2 text_lh_24 text_mgb_no">За онлайн чек платежа</p>
					</BaseRateBox>
				</div>
				<b class="text text_type_title.level_2">Сюда включено</b>
				<div class="page-section__row">
					<div class="page-section__col">
						<BaseIcon name="input-cashier" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_mgb_no">
							<BaseLink href="https://arsenalpay.ru/cashbox.html" link-in="text" color="blue"
								>Онлайн касса ArsenalPay</BaseLink
							>
						</p>
						<BaseIcon name="input-invoice" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Выставление счёта</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="input-apple" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Apple Pay</p>
						<BaseIcon name="input-save-card" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Запоминание карты</p>
						<BaseIcon name="input-hold" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Холдировани</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="input-refund" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Возврат платежа</p>
						<BaseIcon name="input-autopayments" width="48" height="38" color="blue" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Оплата в рассрочку</p>
					</div>
				</div>
				<b class="text text_type_title.level_2">Бесплатно</b>
				<div class="page-section__row page-section__row_hide_lg">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подключение</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Пользование кассой</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Техподдержка</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Свой менеджер</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Личный кабинет</p>
					</div>
				</div>
				<div class="page-section__row page-section__row_show_lg">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подключение</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Пользование кассой</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Техподдержка</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Свой менеджер</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="pink" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Личный кабинет</p>
					</div>
				</div>
				<div class="page-section__button">
					<BaseButton href="https://arsenalpay.ru/dashboard/register?step=1">Подключить</BaseButton>
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
			<h2 class="text text_type_title.level_1">Вопросы и ответы</h2>
			<div class="page-section__box">
				<h3 class="text text_type_title.level_3">
					Как быстро деньги переводятся на расчётный счёт и в какой банк?
				</h3>
				<p class="text text_level_3">
					Деньги перечисляются на расчётный счёт вашей компании каждый день в автоматическом режиме, вам не
					нужно выводить их самостоятельно. Расчётный счёт можно иметь в любом банке РФ, новый счёт открывать
					не придётся.
				</p>

				<h3 class="text text_type_title.level_3">Принимаются ли карты всех стран мира?</h3>
				<p class="text text_level_3">
					У нас нет ограничений по странам мира. Клиент сможет оплатить тур любой зарубежной картой Visa,
					MasterCard, Maestro.
				</p>

				<h3 class="text text_type_title.level_3">На сколько выгодней использовать онлайн-кассу ArsenalPay?</h3>
				<p class="text text_level_3">
					Касса ArsenalPay работает при каждом платеже автоматически. Вы не тратите время и деньги на покупку,
					настройку и работу с кассой. Все чеки, как и все платежи находятся в одном личном кабинете. Чеки
					всегда соответствуют последним изменениям 54-ФЗ, мы за этим следим. При изменении в законе вам
					ничего не придётся менять на вашем сайте. Использование кассы ArsenalPay экономит вам от 30 000
					до 40 000 ₽ в год.
				</p>
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
		padding-bottom: 247px;

		//@include media-breakpoint-up(md) {
		//	padding-bottom: 146px;
		//}
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
		padding-bottom: 196px;

		@include media-breakpoint-up(md) {
			padding-top: 61px;
		}
	}

	.page-section__row {
		display: flex;
		flex-direction: column;
	}

	.page-section__col {
		--image-width: 320px;

		&:first-child {
			margin-bottom: 90px;
			max-width: var(--image-width);
			align-self: center;
		}

		&:last-child {
		}

		picture {
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--image-width);
			height: 648px;
			background-color: (var(--color-bg-white));
			box-shadow: var(--box-shadow-md);
			border-radius: 54px;
		}
	}
}

.page-section_order_6 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 59px;
		padding-bottom: 238px;

		@include media-breakpoint-up(sm) {
			padding-top: 62px;
			padding-bottom: 217px;
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

.page-section_order_7 {
	.page-section__container {
		padding-top: 47px;
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
		padding: 56px 20px 44px;
		border-radius: var(--border-radius-lg);
		background-color: var(--color-bg-gray-super-light);
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
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
		}

		@include media-breakpoint-up(lg) {
			grid-template-columns: repeat(3, 1fr);
		}

		&_type_rates {
			left: 0;

			@include media-breakpoint-up(sm) {
				display: grid;
				grid-template-columns: repeat(2, 200px);
				grid-column-gap: 36px;
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
				display: block;
			}
		}
	}

	.page-section__col {
		display: grid;
		grid-template-columns: 48px auto;
		grid-auto-rows: 32px;
		grid-column-gap: 1px;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: 18px;
		}

		svg {
			left: -1px;
		}
	}

	.page-section__button {
		margin-top: 8px;
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
