<template>
	<section
		class="page-section page-section_order_1 page-section_type_cut page-section_skew_no-top page-section_skew_inverse"
	>
		<div class="page-section__container">
			<div class="page-section__notice u-shift-left.on_screen_xl">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h1 class="text text_type_title.level_1 u-shift-left.on_screen_xl">Разработчикам</h1>
			<p class="text text_level_1 text_ls_sm u-shift-left.on_screen_xl">
				Готовые CMS плагины, виджет оплаты для интернет-магазинов и&nbsp;лендингов.
			</p>
			<div class="page-section__button u-shift-left.on_screen_xl">
				<BaseButton href="https://arsenalpay.ru/dashboard/registration-type">Подключить</BaseButton>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="developers-page/widget" :breakpoints="{ sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3">Виджет оплаты</h3>
					<p class="text text_level_3 text_mgb_60">
						Встраивается в&nbsp;любое место на&nbsp;сайте. <br class="br br--show-xs" />Адаптирован под
						любые устройства.<br class="br br--show-xs" />
						Цвет виджета
						<BaseLink href="https://arsenalpay.ru/customization/" link-in="text" color="blue">
							настраивается</BaseLink
						>
						под цвет вашего сайта.
					</p>

					<BaseIcon name="security-medium" color="pink" width="38" height="48" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Безопасность</h3>
					<p class="text text_level_3 text_lh_28.on_screen_md">
						Безопасная обработка данных карт <br class="br br--show-sm" />по&nbsp; стандарту
						PCI DSS 3.2 level 1.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_2 page-section_skew_inverse">
		<div class="page-section__container">
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseIcon name="num-one" width="37" height="37" color="purple" bottom-space="sm" />
					<h3 class="text text_type_title.level_3">Все способы оплаты в&nbsp;одном виджете</h3>
					<p class="text text_level_3 text_mgb_no">
						Банковские карты:<br class="br br--show-xs br--hide-md" />
						Visa, MasterCard, Мир, Apple Pay. <br class="br br--show-xs" />Оплата с баланса мобильного
						телефона.<br class="br br--show-xs" />Электронные кошельки.
					</p>
				</div>
				<div class="page-section__col page-section__col_type_tabs">
					<BaseImage src="developers-page/widget-tabs" :breakpoints="{ xs: true, sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<BaseIcon name="num-two" width="37" height="37" color="purple" bottom-space="sm" />
					<h3 class="text text_type_title.level_3">Настройка дополнительных полей</h3>
					<p class="text text_level_3 text_mgb_no">
						Комментарии клиента, email для чека, ФИО, адрес и&nbsp;др.<br
							class="br br--show-md br--hide-lg"
						/>
						Настройка плейсхолдеров и&nbsp;масок для полей.
					</p>
				</div>
				<div class="page-section__col page-section__col_type_fields">
					<BaseImage src="developers-page/widget-fields" :breakpoints="{ xs: true, sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<BaseIcon name="num-three" width="37" height="37" color="purple" bottom-space="sm" />
					<h3 class="text text_type_title.level_3">Удобный ввод</h3>
					<p class="text text_level_3 text_mgb_16">
						Проверка вводимых данных. <br class="br br--show-xs" />Подсказки при неверном вводе.
						<br class="br br--show-xs" />Браузерное автозаполнение. <br class="br br--show-xs" />Перевод
						курсора на&nbsp;следующее поле. <br class="br br--show-xs" />Определение платёжной системы.
						<br class="br br--show-xs" />Определение операторов сотовой связи.
					</p>
					<div class="page-section__link">
						<BaseLink :icon="true" color="purple" @click="showModal()">
							Посмотреть виджет
							<template v-slot:icon>
								<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
							</template>
						</BaseLink>
					</div>
				</div>
				<div class="page-section__col page-section__col_type_card">
					<BaseImage src="developers-page/widget-card" :breakpoints="{ xs: true, sm: true }"></BaseImage>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_3 page-section_skew_inverse">
		<div class="page-section__container">
			<BaseIcon name="test-big" width="116" height="116" color="green" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Тестирование оплаты и&nbsp;кассы</h2>
			<p class="text text_level_1 text_mgb_50">
				Все параметры для тестирования виджета доступны <br class="br br--show-md" />после регистрации
				в&nbsp;личном кабинете.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Устанавливайте виджет сразу</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Вы&nbsp;можете установить виджет на&nbsp;свой сайт, настроить его,
					<br class="br br--show-md" />совершать тестовые платежи и&nbsp;проверять статус платежей
					<br class="br br--show-md br--hide-lg" />в&nbsp;личном кабинете.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Тестируйте фискальные чеки</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					В&nbsp;тестовом режиме онлайн чеки формируются на&nbsp;базе тестовой кассы.<br
						class="br br--show-lg"
					/>
					Тестовые чеки в&nbsp;ФНС не&nbsp;отправляются.
				</p>
				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Деньги с&nbsp;карты не&nbsp;списываются
				</h3>
				<p class="text text_level_3 text_mgb_34 text_lh_28.on_screen_md">
					Для тестирования оплаты используйте любую действующую карту.<br class="br br--show-lg" />
					В&nbsp;тестовом режиме деньги с&nbsp;карты не&nbsp;списываются.
				</p>
				<BaseLink
					href="https://arsenalpay.ru/documentation/index.html#testirovanie"
					:blank="true"
					:icon="true"
					color="blue"
				>
					Подробнее
					<template v-slot:icon>
						<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_4 page-section_skew_inverse page-section_skew_no-bottom">
		<div id="integratsiya-vidzheta" class="page-section__container">
			<BaseIcon name="settings-big" width="126" height="92" color="blue" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Интеграция виджета</h2>
			<p class="text text_level_1 text_mgb_50">
				Посмотрите
				<BaseLink
					href="https://arsenalpay.ru/documentation/index.html#scenarii-integracii"
					:blank="true"
					link-in="text"
					color="blue"
					>сценарии интеграции</BaseLink
				>
				для интернет-магазинов и&nbsp;лендингов.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="blue" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Встроенный виджет</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Встроенный виджет будет открываться в&nbsp;любом месте на&nbsp;вашем сайте.<br
						class="br br--show-lg"
					/>
					Просто вставьте код виджета на&nbsp;страницу сайта, туда где происходит оплата.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="blue" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Виджет на&nbsp;отдельной странице</h3>
				<p class="text text_level_3 text_mgb_34 text_lh_28.on_screen_md">
					Виджет будет открываться на&nbsp;отдельной странице, для этого просто вставьте ссылку на&nbsp;виджет
					в&nbsp;том месте сайта, где у&nbsp;вас происходит переход к&nbsp;оплате.
				</p>

				<BaseLink
					href="https://arsenalpay.ru/documentation/index.html#platezhnyj-vidzhet"
					:blank="true"
					:icon="true"
					color="blue"
				>
					Подробнее
					<template v-slot:icon>
						<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_5 page-section_skew_no">
		<div class="page-section__container">
			<BaseIcon name="cms-big" width="116" height="116" color="cyan" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Готовые CMS плагины</h2>
			<p class="text text_level_1 text_mgb_50">
				Скачайте и&nbsp;установите готовый модуль под вашу платформу.<br class="br br--show-md" />
				Если&nbsp;для вашей платформы нет модуля, напишите нам и&nbsp;мы&nbsp;его сделаем.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Все настройки в&nbsp;личном кабинете
				</h3>
				<p class="text text_level_3 text_mgb_50 text_lh_28.on_screen_md">
					Настройте модуль, используя данные, полученные при регистрации
					<br class="br br--show-lg" />в&nbsp;личном кабинете. Касса для CMS
					<br class="br br--show-sm br--hide-md" />
					модулей уже настроена.
				</p>
				<div class="page-section__row">
					<div v-for="col in plugins" class="page-section__col" :key="col">
						<BasePluginBox
							v-for="plugin in col"
							:name="plugin.logo"
							:href="plugin.href"
							:links="plugin.links"
							:key="plugin"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_6 page-section_skew_no">
		<div class="page-section__container">
			<BaseIcon name="http-big" width="116" height="116" color="purple" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">HTTP-уведомления</h2>
			<p class="text text_level_1 text_mgb_50">
				Обновляйте статус заказа на&nbsp;своем сайте. <br class="br br--show-md" />Передавайте данные
				из&nbsp;корзины для чека.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Все настройки в&nbsp;личном кабинете
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Секретный ключ для проверки HTTP-уведомлений вы получаете<br class="br br--show-md" />
					при регистрации в&nbsp;личном кабинете.
				</p>
				<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Для всех событий доступны HTTP-уведомления
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Проверка заказа, успешная оплата, возврат платежа, изменение подписки.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					В&nbsp;CMS модулях обработка уведомлений <br class="br br--show-sm br--hide-md" />уже настроена
				</h3>
				<p class="text text_level_3 text_mgb_34 text_lh_28.on_screen_md">
					Чек по&nbsp;умолчанию формируется из&nbsp;товарных позиций корзины.
				</p>

				<BaseLink
					href="https://arsenalpay.ru/documentation/index.html#http-uvedomleniya"
					:blank="true"
					:icon="true"
					color="blue"
				>
					Подробнее
					<template v-slot:icon>
						<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</div>
		</div>
	</section>
	<section class="page-section page-section_order_7 page-section_skew_no">
		<div class="page-section__container">
			<BaseIcon name="email-big" width="116" height="116" color="green" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Email-уведомления</h2>
			<p class="text text_level_1 text_mgb_50">
				Email-уведомления удобно применять на&nbsp;лендингах <br class="br br--show-md" />или на&nbsp;сайтах без
				интернет-магазина.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Можно получать <br class="br br--show-xs br--hide-sm" />информацию об&nbsp;оплате по&nbsp;email
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Вы&nbsp;будете получать информацию о&nbsp;платеже и&nbsp;дополнительные данные,<br
						class="br br--show-lg"
					/>
					которые клиент укажет в&nbsp;платёжной форме.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="green" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Вы&nbsp;сможете сразу узнавать кто, сколько и&nbsp;за&nbsp;что
					<br class="br br--show-md br--hide-lg" />вам заплатил.
				</h3>
				<p class="text text_level_3 text_mgb_34 text_lh_28.on_screen_md">
					Никаких доработок и&nbsp;настроек на&nbsp;сайте не&nbsp;требуется.
				</p>
				<BaseLink
					href="https://arsenalpay.ru/documentation/index.html#email-uvedomleniya"
					:blank="true"
					:icon="true"
					color="blue"
				>
					Подробнее
					<template v-slot:icon>
						<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_8 page-section_skew_no-top page-section_skew_inverse">
		<div class="page-section__container">
			<BaseIcon name="kassa-big" width="122" height="120" color="blue" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Настройки кассы</h2>
			<p class="text text_level_1 text_mgb_50">
				Фискальный чек отправляется на&nbsp;email покупателя и&nbsp;в&nbsp;ФНС через ОФД.<br
					class="br br--show-lg"
				/>
				Все чеки сохраняются в&nbsp;личном кабинете.
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="blue" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Для готовых CMS плагинов касса уже настроена
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Чек будет приходить клиентам на&nbsp;email со&nbsp;всеми товарными позициями.<br
						class="br br--show-lg"
					/>
					Если вам не&nbsp;нужны товарные позиции в&nbsp;чеке, можно сделать чек с&nbsp;общей суммой.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="blue" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Для лендингов касса уже настроена</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Самая простая интеграция. Подходит для любого сайта без интернет-магазина. Клиентам приходит чек
					с&nbsp;общей суммой заказа, без товарных позиций. <br class="br br--show-lg" />На&nbsp;ваш email
					отправляются данные об&nbsp;оплате заказа и&nbsp;информация о&nbsp;клиенте.
				</p>

				<BaseIcon name="check-circle-large" width="37" height="37" color="blue" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Для интернет-магазинов вы&nbsp;решаете <br class="br br--show-sm br--hide-md" />как настроить кассу
				</h3>
				<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md">
					Вы&nbsp;можете настроить передачу товарных позиций в&nbsp;чек, просто добавьте
					<BaseLink
						href="https://arsenalpay.ru/documentation/index.html#http-uvedomleniya"
						:blank="true"
						link-in="text"
						color="blue"
						>структуру ofd</BaseLink
					>
					в&nbsp;функцию check. Если вам не&nbsp;нужны товарные позиции в&nbsp;чеке, мы&nbsp;настроим для вас
					чек с&nbsp;общей суммой.
				</p>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_9 page-section_skew_no-bottom">
		<div id="arsenalpay-api" class="page-section__container">
			<BaseIcon name="api-big" width="116" height="116" color="purple" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">ArsenalPay API</h2>
			<p class="text text_level_1 text_mgb_50">
				Воспользуйтесь API для гибкой интеграции платежей на&nbsp;своем сайте.
				<br class="br br--show-xl" />Параметры&nbsp;авторизации для доступа к&nbsp;API вы&nbsp;получаете<br
					class="br br--show-md"
				/>
				при регистрации в&nbsp;личном кабинете.
				<BaseLink href="https://arsenalpay.ru/api/doc/" :blank="true" link-in="text" color="blue"
					>Протестируйте наше API.</BaseLink
				>
			</p>
			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="settings-medium" width="74" height="62" color="purple" bottom-space="sm" />

				<h3 class="text text_type_title.level_3">Основные функции API</h3>
				<div class="page-section__row page-section__row_type_one">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Статус платежа</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подтверждение холда</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Отмена платежа</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Возврат платежа</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Изменение подписки</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Просмотр чека</p>
					</div>
				</div>
				<div class="page-section__row page-section__row_type_two">
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Статус платежа</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_2 text_lh_32 text_mgb_no">Подтверждение холда</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Отмена платежа</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Возврат платежа</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Изменение подписки</p>
						<BaseIcon name="check-list-small" width="48" height="38" color="purple" />
						<p class="text text_level_3 text_lh_32 text_mgb_no">Просмотр чека</p>
					</div>
				</div>
				<div class="page-section__link">
					<BaseLink
						href="https://arsenalpay.ru/documentation/index.html#api"
						:blank="true"
						:icon="true"
						color="blue"
						>Все функции
						<template v-slot:icon>
							<BaseIcon name="arrow-new-page" width="48" height="38"></BaseIcon>
						</template>
					</BaseLink>
				</div>
			</div>
		</div>
	</section>
	<PaymentWidgetModal :opened="isOpened" @on-close="isOpened = false" />
</template>

<script lang="js">
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BasePluginBox from "@/components/base/BasePluginBox.vue";
import PaymentWidgetModal from "@/components/modals/PaymentWidgetModal.vue";
import { getPlugins } from "@/data/developers/plugins";
import {useHead} from "@vueuse/head";
import {developersMeta} from "../data/developers/meta";


export default {
	components: {
		BaseNotice,
		BaseButton,
		BaseImage,
		BaseIcon,
		BaseLink,
		BasePluginBox,
		PaymentWidgetModal,
	},
	setup() {
		useHead(developersMeta);
	},
	data() {
		return {
			isOpened: false,
			plugins: []
		}
	},
	methods: {
		showModal() {
			this.isOpened = true;
		}
	},
	mounted() {
		this.plugins = getPlugins();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section_order_1 {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 52px;
		padding-bottom: 175px;

		@include media-breakpoint-up(md) {
			padding-top: 52px;
			padding-bottom: 217px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 62px;
			padding-bottom: 148px;
		}
	}

	.page-section__row {
		margin-top: 80px;

		@include media-breakpoint-up(md) {
			margin-top: 100px;
		}

		@include media-breakpoint-up(lg) {
			margin-left: 20px;
			display: grid;
			grid-template-columns: 348px 380px;
			grid-column-gap: 72px;
			justify-content: center;
		}

		@include media-breakpoint-up(xl) {
			margin-left: 165px;
			grid-template-columns: 348px 1fr;
			grid-column-gap: 100px;
		}

		@include media-breakpoint-up(xxl) {
			margin-left: 127px;
			grid-column-gap: 139px;
		}

		.page-section__col {
			&:first-child {
				@include content-center();

				margin-bottom: 90px;

				picture.img {
					padding: 19px 16px 21px;
					width: 320px;
					height: 498px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 54px;
					box-sizing: border-box;
					box-shadow: var(--box-shadow-purple-xl);
					background-color: var(--color-bg-white);
					overflow: hidden;

					@include media-breakpoint-up(sm) {
						width: 348px;
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

			&:last-child {
				@include media-breakpoint-up(lg) {
					padding-top: 82px;
					align-items: start;
					text-align: left;
				}

				& > svg.icon {
					margin-bottom: 16px;

					@include media-breakpoint-up(md) {
						margin-bottom: 12px;
					}
				}
			}
		}
	}

	.page-section__button {
		align-self: center;

		@include media-breakpoint-up(md) {
			max-width: 304px;
		}
	}
}

.page-section_order_2 {
	.page-section__container {
		padding-top: 40px;
		padding-bottom: 220px; //165

		@include media-breakpoint-up(sm) {
			padding-top: 41px;
			padding-bottom: 159px;
		}

		@include media-breakpoint-up(md) {
			padding-top: 50px;
			padding-bottom: 215px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 105px;
			padding-bottom: 185px;
			overflow: hidden;
		}
	}

	.page-section__row {
		position: relative;
		display: flex;
		flex-direction: column;

		@include media-breakpoint-up(sm) {
			align-items: center;
		}

		@include media-breakpoint-up(lg) {
			//left: -13px;
			display: grid;
			grid-template-columns: minmax(425px, 1fr) minmax(410px, 1fr);
			align-items: unset;
			grid-column-gap: 12px;
			grid-row-gap: 30px;
		}

		@media (min-width: 1000px) {
			left: 0;
			grid-template-columns: minmax(410px, 1fr) minmax(386px, 1fr);
		}

		@include media-breakpoint-up(xl) {
			padding-left: 5px;
		}

		@include media-breakpoint-up(xxl) {
			margin-left: -17px;
			padding-left: 0;
		}

		.page-section__col {
			display: flex;
			flex-direction: column;

			@include media-breakpoint-up(lg) {
				align-items: start;
				text-align: left;
			}

			&[class*="type"] {
				position: relative;
				z-index: var(--layer-2);
				margin-right: auto;
				margin-left: auto;
				width: 360px;

				@include media-breakpoint-up(sm) {
					width: auto;
				}

				@include media-breakpoint-up(lg) {
					right: -30px;
					margin: 0;
					justify-self: center;
				}

				@include media-breakpoint-up(xl) {
					right: -40px;
				}

				@include media-breakpoint-up(xxl) {
					right: -65px;
				}

				:deep picture.img img {
					width: 100%;
					height: auto;
				}
			}

			&.page-section__col_type_tabs {
				@include media-breakpoint-only(xs) {
					margin-top: 42px;
					margin-bottom: 82px;
					width: 320px;
					height: 100px;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid var(--color-stroke-lighten);
					border-radius: 70px;
					box-shadow: -2px 26px 40px 1px rgba(0, 0, 0, 0.08), 0 1px 7px 0 rgba(0, 0, 0, 0.09);
					box-sizing: border-box;
				}

				@include media-breakpoint-up(sm) {
					margin-top: 30px;
					margin-bottom: 18px;
				}

				@include media-breakpoint-up(md) {
					margin-bottom: 49px;
				}

				@include media-breakpoint-up(lg) {
					margin: 47px 0 0 0;
				}
			}

			&.page-section__col_type_fields {
				@include media-breakpoint-only(xs) {
					margin-top: 42px;
					margin-bottom: 80px;
					display: flex;
					flex-direction: column;
					width: 100%;
					max-width: 320px;
				}

				@include media-breakpoint-up(sm) {
					margin-top: 30px;
					margin-bottom: 68px;
				}

				@include media-breakpoint-up(md) {
					margin-bottom: 78px;
				}

				@include media-breakpoint-up(lg) {
					margin: 21px 0 0 0;
				}
			}

			&.page-section__col_type_card {
				@include media-breakpoint-only(xs) {
					margin-top: 54px;
					padding-top: 4px;
					margin-bottom: 0;
					width: 100%;
					max-width: 320px;
					height: 210px;
					display: flex;
					align-items: center;
					justify-content: center;
					border: solid 1px var(--color-stroke-lighten);
					border-radius: 50px;
					box-shadow: -2px 26px 36px 1px rgba(0, 0, 0, 0.08), 0 1px 7px 0 rgba(0, 0, 0, 0.09);
					box-sizing: border-box;
				}

				@include media-breakpoint-up(sm) {
					margin-top: 34px;
				}

				@include media-breakpoint-up(md) {
					margin-bottom: 12px;
				}

				@include media-breakpoint-up(lg) {
					margin: 85px 0 0 0;
				}

				@include media-breakpoint-up(xl) {
					margin: 60px 0 0 0;
				}
			}
		}
	}

	.page-section__link {
		margin-top: 16px;

		@include media-breakpoint-up(sm) {
			margin-top: 0;
		}
	}
}

.page-section_order_3 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 40px;
		padding-bottom: 230px;

		@include media-breakpoint-up(md) {
			padding-top: 51px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 54px;
			padding-bottom: 285px;
		}

		@include media-breakpoint-up(xl) {
			padding-top: 47px;
			padding-bottom: 265px;
		}
	}
}

.page-section_order_4 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-top: 30px;

		@include media-breakpoint-up(md) {
			padding-top: 110px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 56px;
		}

		@include media-breakpoint-up(xl) {
			padding-top: 75px;
		}
	}
}

.page-section_order_5,
.page-section_order_6,
.page-section_order_7 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-bottom: 120px;

		@include media-breakpoint-up(md) {
			padding-bottom: 160px;
		}
	}
}

.page-section_order_5 {
	--bottom-space: 25px;

	.page-section__container {
		padding-top: 120px;

		@include media-breakpoint-up(md) {
			padding-top: 159px;
		}
	}

	.page-section__row {
		@include media-breakpoint-up(md) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: var(--bottom-space);
		}
	}

	.page-section__col {
		&:first-child {
			margin-bottom: var(--bottom-space);

			@include media-breakpoint-up(md) {
				margin-bottom: 0;
			}

			@include media-breakpoint-up(xl) {
				margin-left: 9px;
			}
		}

		&:last-child {
			margin-bottom: -5px;

			@include media-breakpoint-up(md) {
				margin-bottom: 0;
			}

			@include media-breakpoint-up(xl) {
				margin-right: 9px;
			}
		}
	}
}

.page-section_order_8 {
	background-color: var(--color-bg-blue-light);

	.page-section__container {
		padding-bottom: 240px;

		@include media-breakpoint-up(md) {
			padding-bottom: 278px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 280px;
		}
	}
}

.page-section_order_9 {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 8px;
		padding-bottom: 120px;

		@include media-breakpoint-up(sm) {
			align-content: center;
		}

		@include media-breakpoint-up(md) {
			padding-top: 50px;
			padding-bottom: 160px;
		}
	}

	.page-section__row {
		margin-top: 27px;
		margin-left: -15px;

		@include media-breakpoint-up(sm) {
			margin-left: 25px;
		}

		@include media-breakpoint-up(md) {
			margin-left: 0;
			display: grid;
			grid-template-columns: repeat(2, 276px);
			grid-column-gap: 10px;
			justify-content: center;
		}

		@include media-breakpoint-up(lg) {
			grid-template-columns: 249px 200px 243px;
			grid-column-gap: 24px;
		}

		@include media-breakpoint-up(xl) {
			grid-column-gap: 50px;
		}

		&_type_one {
			@include media-breakpoint-up(md) {
				display: none;
			}

			@include media-breakpoint-up(lg) {
				display: grid;
			}
		}

		&_type_two {
			display: none;

			@include media-breakpoint-up(md) {
				display: grid;
			}

			@include media-breakpoint-up(lg) {
				display: none;
			}
		}
	}

	.page-section__col {
		margin-bottom: 22px;
		display: grid;
		grid-template-columns: 48px 200px;
		grid-column-gap: 4px;
		grid-auto-rows: 32px;

		@include media-breakpoint-up(sm) {
			justify-content: center;
			justify-items: start;
		}

		@include media-breakpoint-up(md) {
			grid-column-gap: 8px;
			justify-content: start;
		}

		@include media-breakpoint-up(lg) {
			grid-template-columns: 48px 1fr;
		}

		svg.icon {
			top: -2px;

			@include media-breakpoint-up(sm) {
				top: 2px;
			}
		}
	}

	.page-section__link {
		margin-top: 17px;
		margin-left: 5px;
	}
}
</style>
