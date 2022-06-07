<template>
	<section class="page-section page-section_order_1">
		<div class="page-section__container">
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>

			<h1 class="text text_type_title.level_1">Приём платежей без сайта</h1>
			<div>
				<p class="text text_level_1 text_ls_sm text_display_inline.on_screen_sm">
					Вам больше не&nbsp;нужен свой сайт, чтобы принимать платежи. <br class="br br--show-md" />
				</p>
				<p class="text text_level_1 text_ls_sm text_display_inline.on_screen_sm">
					Принимайте оплату где угодно&nbsp;&mdash; в&nbsp;любых соцсетях или месенджерах.
				</p>
				<p class="text text_level_1 text_ls_sm text_display_inline.on_screen_sm">
					<br class="br br--show-lg" />Карты всех стран мира:
					<br class="br br--show-xs br--hide-sm" />Visa, MasterCard, Мир, Apple Pay.
				</p>
			</div>
			<div class="page-section__button page-section__button_type_top">
				<BaseButton href="https://arsenalpay.ru/dashboard/quickstart?step=1">Подключить</BaseButton>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_2">
		<div class="page-section__container">
			<BaseIcon name="rub-big" width="120" height="120" color="green" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Никаких расходов на&nbsp;сайт и&nbsp;кассу</h2>
			<div>
				<p class="text text_level_1 text_display_inline.on_screen_lg text_mgb_no">
					Экономия на&nbsp;кассе 30&nbsp;000&nbsp;- 40&nbsp;000&nbsp;₽ в&nbsp;год.
				</p>
				<p class="text text_level_1 text_display_inline.on_screen_lg">
					Экономия на&nbsp;сайте от&nbsp;20&nbsp;000&nbsp;₽&nbsp;в&nbsp;год.
				</p>
			</div>
			<div class="page-section__prompt">
				<BasePrompt color="green" :full-width="true">
					<p class="text text_in_prompt text_mgb_no.on_screen_md">
						Не&nbsp;нужно покупать или брать в <br class="br br--show-xs br--hide-sm" />аренду свою онлайн
						кассу.
					</p>
					<p class="text text_in_prompt text_mgb_no.on_screen_md">
						Не&nbsp;нужно тратить время и&nbsp;деньги&nbsp;на разработку и&nbsp;поддержку своего сайта.
					</p>
					<p class="text text_in_prompt">
						Не&nbsp;нужно тратить деньги на&nbsp;SSL сертификат и&nbsp;хостинг для сайта.
					</p>
				</BasePrompt>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_3">
		<div class="u-overflow-hidden">
			<div class="page-section__container">
				<h2 class="text text_type_title.level_1">Быстрый старт платежей</h2>
				<div class="">
					<p class="text text_level_1 text_display_inline.on_screen_sm">
						Минимум документов. Бесплатная онлайн касса.
					</p>
					<p class="text text_level_1 text_mgb_60 text_mgb_34.on_screen_md">
						Платежи перечисляются на&nbsp;расчётный счёт юрлица, ИП&nbsp;или&nbsp;самозанятого.
					</p>
				</div>
				<div class="page-section__box page-section__box_type_one u_overflow_hidden.on_screen_md">
					<BaseIcon name="rocket-medium" color="purple" width="46" height="64" bottom-space="md" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Простое подключение</h3>
					<p class="text text_level_3 text_mgb_60 text_mgb_80.on_screen_md text_lh_28.on_screen_md">
						Для подключения нужен только ИНН юрлица, ИП&nbsp;или&nbsp;самозанятого.
					</p>

					<BaseIcon name="kassa-medium" color="blue" width="63" height="60" bottom-space="md" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Онлайн касса бесплатно</h3>
					<p class="text text_level_3 text_mgb_no text_lh_28.on_screen_md">
						Вам не&nbsp;нужно покупать или брать в&nbsp;аренду свою онлайн кассу.<br
							class="br br--show-lg"
						/>
						Все&nbsp;платежи проходят через
						<BaseLink href="https://arsenalpay.ru/cashbox.html" link-in="text" :blank="true" color="blue"
							>кассу&nbsp;ArsenalPay</BaseLink
						>
						бесплатно.<br class="br br--show-lg" />
						При&nbsp;каждой оплате фискальный чек отправляется через ОФД в&nbsp;налоговую.<br
							class="br br--show-lg"
						/>Все&nbsp;чеки сохраняются в&nbsp;личном кабинете, их&nbsp;легко найти и&nbsp;проверить.
					</p>
					<div class="page-section__button">
						<BaseButton text-transform="normal" :full-width="true" @click="showModal()">
							<template v-slot:icon>
								<BaseIcon name="invoice-medium" width="48" height="38"></BaseIcon>
							</template>
							Пример фискального чека
						</BaseButton>
					</div>

					<div class="page-section__box-wrap page-section__box-wrap_skew_no">
						<BaseChip view="pink">Бесплатные чеки по всем заказам</BaseChip>

						<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Web-касса ArsenalPay</h3>
						<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
							Пробивайте чеки по&nbsp;заказам, которые были оплачены наличными, переводом на&nbsp;карту
							или перечислением на&nbsp;расчётный счёт. Вы&nbsp;легко пробьёте чек в&nbsp;личном кабинете
							меньше чем за&nbsp;минуту. Чеки&nbsp;пробиваются с&nbsp;полной номенклатурой,
							в&nbsp;соответствии с&nbsp;последними изменениями 54&#8209;ФЗ.
							<b class="text text_color_pink text_weight_bold text_display_inline.on_screen_sm"
								>Чеки&nbsp;бесплатны&nbsp;и&nbsp;без&nbsp;комиссии.</b
							>
							Сразу&nbsp;отправляются в&nbsp;налоговую и&nbsp;на&nbsp;email клиента. Теперь у&nbsp;вас
							будут чеки по&nbsp;всем заказам, вне&nbsp;зависимости от&nbsp;способа оплаты.
						</p>
					</div>

					<BaseIcon name="rub-medium" color="green" width="53" height="53" bottom-space="md" />
					<h3
						class="text text_type_title.level_3 text_mgb_16.on_screen_sm text_mgb_8.on_screen_md text_lh_32.on_screen_md"
					>
						Платежи приходят на&nbsp;ваш расчётный счёт
					</h3>
					<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
						Никаких комиссий&nbsp;&mdash; вывод на&nbsp;расчётный счёт бесплатный.
						<br class="br br--show-lg" />Деньги&nbsp;перечисляются каждый день, минимальных сумм нет.<br
							class="br br--show-lg"
						/>
						Деньги&nbsp;поступают на&nbsp;расчётный счёт юрлица, ИП&nbsp;или&nbsp;самозанятого в&nbsp;любой
						банк РФ. Перевод&nbsp;происходит автоматически, самим выводить&nbsp;не&nbsp;нужно.
					</p>

					<BaseIcon name="email-medium" color="pink" width="52" height="43" bottom-space="md" />
					<h3
						class="text text_type_title.level_3 text_mgb_16.on_screen_sm text_mgb_8.on_screen_md text_lh_32.on_screen_md"
					>
						Мгновенные сообщения об&nbsp;оплате
					</h3>
					<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
						Уведомления о&nbsp;платежах приходят на&nbsp;ваш email и&nbsp;в&nbsp;личный кабинет.
						<br class="br br--show-lg" />Вы&nbsp;сразу узнаете кто, сколько и&nbsp;за&nbsp;что&nbsp;оплатил.
					</p>
					<BaseIcon name="responsive-medium" color="purple" width="56" height="42" bottom-space="md" />
					<h3
						class="text text_type_title.level_3 text_mgb_16.on_screen_sm text_mgb_8.on_screen_md text_lh_32.on_screen_md"
					>
						Удобный личный кабинет
					</h3>
					<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
						Контролируйте платежи на&nbsp;любом устройстве. <br class="br br--show-sm" />Просматривайте
						статистику. Проверяйте чеки по&nbsp;каждому платежу.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_4 page-section_type_cut">
		<div class="page-section__container">
			<div class="page-section__shift">
				<BaseIcon name="pay-big" width="80" height="100" color="purple" bottom-space="xl" />
				<h2 class="text text_type_title.level_1">Ваша страница оплаты</h2>
				<div>
					<p class="text text_level_1">
						Заменяет сайт. <br class="br br--show-xs br--hide-sm" />Увеличивает продажи.
						<br class="br br--show-xs br--hide-lg" />Рассказывает о&nbsp;вашем бизнесе.
					</p>
				</div>
			</div>
			<div class="page-section__row">
				<div class="page-section__col">
					<BaseImage src="quickstart-page/widget-no-site" :breakpoints="{ sm: true }"></BaseImage>
				</div>
				<div class="page-section__col">
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Узнаваемая страница</h3>
					<p
						class="text text_level_3 text_width_540.on_screen_sm text_lh_28.on_screen_md text_mgb_40.on_screen_md"
					>
						Страница выглядит как минисайт с&nbsp;вашим логотипом, названием и&nbsp;описанием компании.
						Вызывает доверие клиентов при оплате.
					</p>

					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Кнопки быстрой связи</h3>
					<p
						class="text text_level_3 text_width_540.on_screen_sm text_lh_28.on_screen_md text_mgb_40.on_screen_md"
					>
						Кнопки WhatsApp, Telegram, Viber&nbsp;&mdash; быстрая связь с&nbsp;клиентами для&nbsp;увеличения
						продаж. Клиент просто нажимает на&nbsp;кнопку и&nbsp;вам приходит готовое первое сообщение.
					</p>

					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Важные ссылки</h3>
					<p
						class="text text_level_3 text_width_540.on_screen_sm text_lh_28.on_screen_md text_mgb_40.on_screen_md"
					>
						Соберите все важные ссылки на&nbsp;одной странице. Рассказывайте об&nbsp;акциях, новых
						предложениях, отвечайте на&nbsp;частые вопросы.
					</p>

					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Автоматическая email рассылка</h3>
					<p
						class="text text_level_3 text_mgb_30 text_width_540.on_screen_sm text_lh_28.on_screen_md text_mgb_46.on_screen_md"
					>
						Клиент получает письмо с&nbsp;доступом к&nbsp;контенту сразу после
						<br class="br br--show-sm br--hide-lg" />оплаты. Вам&nbsp;больше не&nbsp;нужно самим отправлять
						письма.
					</p>

					<BaseIcon name="security-medium" color="purple" width="38" height="48" bottom-space="sm" />
					<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
						Безопасные платежи для любых устройств
					</h3>
					<p
						class="text text_level_3 text_width_540.on_screen_sm text_lh_28.on_screen_md text_mgb_40.on_screen_md"
					>
						Страница отвечает стандартам безопасности Visa&nbsp;и&nbsp;Mastercard. Оплачивать одинаково
						удобно и&nbsp;с&nbsp;компьютера и&nbsp;с&nbsp;телефона.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_5">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Удобные платёжные функции</h2>
			<p class="text text_level_1 text_mgb_60 text_mgb_36.on_screen_md">
				Быстрое выставление счёта. Возврат платежа в&nbsp;любой момент. Холдирование&nbsp;платежей.
			</p>
			<div class="page-section__box page-section__box_type_one">
				<BaseIcon name="check-medium" color="pink" width="52" height="46" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Выставление счёта</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Счёт выставляется за&nbsp;минуту, просто укажите сумму и&nbsp;нужную вам информацию о&nbsp;заказе.
					Отправьте клиенту ссылку на&nbsp;оплату счёта. Вам придёт уведомление как&nbsp;только счёт будет
					оплачен.
				</p>

				<!--				<BaseIcon name="apple-pay-medium" color="black" width="68" height="45" bottom-space="md" />-->
				<!--				<h3 class="text text_type_title.level_3">Apple Pay</h3>-->
				<!--				<p class="text text_level_3 text_mgb_60">-->
				<!--					Apple Pay упростит и ускорит оплату для ваших клиентов. Им не нужно вводить данные карты, адрес-->
				<!--					доставки и телефон. Для безопасности платёж подтверждается<br class="br br&#45;&#45;show-lg" />-->
				<!--					отпечатком пальца — Touch ID, или через распознавание лица — Face ID.<br class="br br&#45;&#45;show-lg" />-->
				<!--					Отдельно настраивать Apple Pay вам не придётся, все заработает сразу.-->
				<!--				</p>-->

				<BaseIcon name="refund-medium" color="purple" width="52" height="52" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Возврат платежа</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md text_mgb_80.on_screen_md">
					Вернуть деньги на&nbsp;карту клиента вы можете в&nbsp;любой момент в&nbsp;личном кабинете. Вернуть
					можно как полную сумму, так и&nbsp;частичную. Комиссия за&nbsp;возврат не&nbsp;взимается.
				</p>

				<BaseIcon name="hold-medium" color="cyan" width="50" height="50" bottom-space="md" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Холдирование платежей</h3>
				<p class="text text_level_3 text_mgb_60 text_lh_28.on_screen_md">
					Клиент совершает обычную оплату, но&nbsp;деньги с&nbsp;его карты не&nbsp;списываются,
					а&nbsp;временно &laquo;замораживаются&raquo;. Такой способ оплаты даёт вам возможность проверить
					наличие товара или услуги, и&nbsp;только после этого списать нужную сумму с&nbsp;карты клиента.
					Комиссия за&nbsp;платёж берётся за&nbsp;списанную вами сумму. Отмена &laquo;заморозки&raquo;
					бесплатна, в&nbsp;таком случае комиссия за&nbsp;платёж не&nbsp;взимается.
				</p>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_6 page-section_skew_no-top">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Принимайте оплату везде</h2>
			<p class="text text_level_1">
				Принимайте оплату в&nbsp;любых соцсетях или месенджерах, <br class="br br--show-md" />на&nbsp;сайте без
				интернет магазина, или выставляйте счета по&nbsp;email.
			</p>
			<div class="page-section__social">
				<div class="page-section__image">
					<BaseImage src="quickstart-page/messenger"></BaseImage>
				</div>
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">В&nbsp;WhatsApp, Telegram, Viber</h3>
				<p class="text text_level_3 text_mgb_48.on_screen_sm text_lh_28.on_screen_md text_mgb_44.on_screen_md">
					Отправляйте клиентам ссылку на&nbsp;страницу оплаты <br class="br br--show-sm" />при переписке
					в&nbsp;месенджерах.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">В VK, TikTok или Instagram*</h3>
				<p class="text text_level_3 text_mgb_48.on_screen_sm text_lh_28.on_screen_md text_mgb_44.on_screen_md">
					Разместите ссылку на&nbsp;вашу страницу в&nbsp;соцсетях,<br class="br br--show-sm" />
					каждый клиент сможет оплатить заказ по&nbsp;этой ссылке.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					На&nbsp;сайте без интернет магазина
				</h3>
				<p class="text text_level_3 text_mgb_48.on_screen_sm text_lh_28.on_screen_md text_mgb_44.on_screen_md">
					Разместите ссылку на&nbsp;сайте без интернет магазина,<br class="br br--show-sm" />
					в&nbsp;том месте где хотите принимать платежи.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Выставляйте счета по&nbsp;email</h3>
				<p class="text text_level_3 text_mgb_48.on_screen_sm text_lh_28.on_screen_md text_mgb_44.on_screen_md">
					Выставляйте счета вашим клиентам по&nbsp;email<br class="br br--show-sm" />
					и&nbsp;присылайте ссылку на&nbsp;страницу оплаты.
				</p>
			</div>
		</div>
	</section>

	<section class="page-section page-section_order_7">
		<div class="page-section__container">
			<BaseIcon name="rub-big" width="120" height="120" color="green" bottom-space="xl" />
			<h2 class="text text_type_title.level_1">Никакой абонентской платы</h2>
			<p class="text text_level_1">
				Вы&nbsp;платите только за&nbsp;успешные платежи и&nbsp;экономите 50&nbsp;000&nbsp;₽ в&nbsp;год.
				<br class="br br--show-lg" />
				<b class="text text_color_pink text_weight_bold text_display_inline">Бесплатные опции</b>&nbsp;&mdash;
				своя&nbsp;страница оплаты, онлайн касса, выставление счёта, возврат платежа, холдирование платежей,
				кнопки WhatsApp, Telegram, Viber, важные ссылки, автоматическая email&nbsp;рассылка.
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

	<section class="page-section page-section_order_8 page-section_type_reviews">
		<div class="page-section__container">
			<h2 class="text text_type_title.level_1">Отзывы наших клиентов</h2>
			<p class="text text_level_1">
				Больше отзывов в&nbsp;нашем
				<BaseLink href="https://www.instagram.com/arsenal_pay/" :blank="true" link-in="text" color="blue"
					>Instagram*.</BaseLink
				>
				<br class="br br--show-xs" />Посмотрите
				<BaseLink href="https://arsenalpay.ru/pay/" link-in="text" color="blue">страницы оплаты</BaseLink>
				клиентов.
				<a href="" class="link link--in-text"></a>
			</p>
			<TheReviewsSlider :reviews="reviews" />
		</div>
	</section>

	<section class="page-section page-section_order_9 page-section_skew_no-bottom">
		<div class="page-section__container">
			<h2
				class="text text_type_title.level_1 text_align_center.on_screen_sm text_mgb_42 text_mgb_52.on_screen_md"
			>
				Вопросы и ответы
			</h2>
			<div class="page-section__shift">
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Почему можно не&nbsp;иметь свой интернет магазин?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Мы&nbsp;создали страницу оплаты, с&nbsp;которой вам не&nbsp;обязательно иметь интернет магазин.<br
						class="br br--show-lg"
					/>
					Вам достаточно просто дать ссылку на&nbsp;страницу своим клиентам и&nbsp;они оплатят нужную
					сумму.<br class="br br--show-lg" />
					Все данные о&nbsp;платеже сохранятся в&nbsp;вашем личном кабинете. Фискальный чек отправляется
					покупателю на&nbsp;email и&nbsp;в&nbsp;ФНС через ОФД. Страница отвечает всем международным
					требованиям безопасности.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Почему можно не&nbsp;покупать и&nbsp;не&nbsp;брать в&nbsp;аренду онлайн кассу?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Все платежи проходят через онлайн кассу ArsenalPay. Мы&nbsp;выступаем как агент и&nbsp;отправляем
					чеки от&nbsp;имени нашего сервиса приема платежей ArsenalPay. В&nbsp;чеке указывается ваш
					ИНН&nbsp;ИП&nbsp;или юрлица, и&nbsp;все необходимые данные, в&nbsp;соответствии с&nbsp;законом
					54-ФЗ.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Где и&nbsp;как я&nbsp;смогу принимать платежи?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Вы&nbsp;можете продавать на&nbsp;любой площадке&nbsp;&mdash; на&nbsp;своем сайте, в&nbsp;cоцсетях
					или в&nbsp;WhatsApp, Telegram, Viber. Договаривайтесь с&nbsp;клиентом об&nbsp;оплате
					и&nbsp;присылайте ему ссылку на&nbsp;вашу страницу оплаты. Клиент легко и&nbsp;быстро оплатит заказ.
				</p>

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">
					Действительно&nbsp;ли сервис без&nbsp;абонентской платы?
				</h3>
				<p class="text text_level_3 text_mgb_42.on_screen_md">
					Мы&nbsp;предоставляем все функции сервиса бесплатно. Вы&nbsp;оплачиваете только комиссию
					за&nbsp;платежи, никакой абонентской платы мы&nbsp;не&nbsp;берем. Тариф всегда фиксированный
					и&nbsp;указан в&nbsp;договоре, никаких скрытых комиссий у&nbsp;нас нет.
				</p>
			</div>
		</div>
	</section>
	<FiscalReceiptModal :opened="isOpened" @on-close="isOpened = false" />
</template>

<script lang="js">
import TheReviewsSlider from "@/components/TheReviewsSlider.vue";
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseChip from "@/components/base/BaseChip.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BasePrompt from "@/components/base/BasePrompt.vue";
import BaseRateBox from "@/components/base/BaseRateBox.vue";
import {useHead} from "@vueuse/head";
import {quickstartMeta} from "@/data/quickstart/meta";
import {quickstartReviews} from "@/data/quickstart/reviews";
import BaseLink from "@/components/base/BaseLink.vue";
import FiscalReceiptModal from "@/components/modals/FiscalReceiptModal.vue";

export default {
	components: {
		TheReviewsSlider,
		FiscalReceiptModal,
		BaseNotice,
		BaseButton,
		BaseImage,
		BaseChip,
		BaseIcon,
		BasePrompt,
		BaseRateBox,
		BaseLink,
	},
	setup() {
		useHead(quickstartMeta);
	},
	data() {
		return {
			isOpened: false,
			reviews: []
		}
	},
	methods: {
		showModal() {
			this.isOpened = true;
		}
	},
	mounted() {
		this.reviews = quickstartReviews;
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section_order_1 {
	.page-section__container {
		padding-top: 50px;
		padding-bottom: 222px;

		@include media-breakpoint-up(md) {
			padding-top: 62px;
			padding-bottom: 200px;
		}
	}

	.page-section__notice {
		@include media-breakpoint-up(md) {
			margin-top: 43px;
			margin-bottom: 24px;
		}
	}
}

.page-section_order_2 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 17px;
		padding-bottom: 210px;

		@include media-breakpoint-up(md) {
			padding-top: 30px;
			padding-bottom: 245px;
		}
	}

	.page-section__prompt {
		margin-top: 16px;
		max-width: 320px;
		width: 100%;

		@include media-breakpoint-up(md) {
			margin-top: 24px;
			max-width: 660px;
		}

		@include media-breakpoint-up(lg) {
			margin-top: 40px;
		}
	}
}

.page-section_order_3 {
	.page-section__container {
		padding-top: 40px;
		padding-bottom: 170px;

		@include media-breakpoint-up(md) {
			padding-top: 81px;
			padding-bottom: 270px;
		}
	}

	.page-section__box {
		//@include media-breakpoint-up(sm) {
		//	margin-top: 60px;
		//}
	}

	.page-section__box-wrap {
		margin-top: 80px;
		margin-bottom: 80px;
		padding-top: 80px;
		padding-bottom: 16px;
		display: flex;
		flex-direction: column;
		align-items: start;

		@include media-breakpoint-up(sm) {
			align-items: center;
			text-align: center;
		}

		&::before {
			@include media-breakpoint-up(md) {
				bottom: 0;
			}
		}
	}

	.page-section__button {
		margin-top: 22px;
		max-width: 480px;
	}
}

.page-section_order_4 {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 20px;
		padding-bottom: 173px;

		@include media-breakpoint-up(md) {
			padding-top: 64px;
			padding-bottom: 198px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 170px;
		}

		@include media-breakpoint-up(xl) {
			padding-bottom: 150px;
		}
	}

	.page-section__row {
		margin-top: 22px;
		display: flex;
		flex-direction: column;

		@include media-breakpoint-up(sm) {
			margin-top: 35px;
		}

		@include media-breakpoint-up(md) {
			margin-top: 56px;
		}

		@include media-breakpoint-up(lg) {
			left: -10px;
			width: auto;
			display: grid;
			grid-template-columns: 360px 420px;
			grid-column-gap: 60px;
		}

		@include media-breakpoint-up(xl) {
			left: -83px;
			grid-template-columns: 360px 1fr;
			grid-column-gap: 94px;
		}

		@include media-breakpoint-up(xxl) {
			left: -29px;
			grid-column-gap: 112px;
		}
	}

	.page-section__col {
		&:first-child {
			margin-bottom: 50px;
			align-self: center;

			@include media-breakpoint-up(sm) {
				margin-bottom: 58px;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: 77px;
			}

			picture.img {
				--border-radius-top: 50px;
				--border-radius-bottom: 36px;

				width: 320px;
				height: 850px;
				border-radius: var(--border-radius-top) var(--border-radius-top) var(--border-radius-bottom)
					var(--border-radius-bottom);
				box-shadow: var(--box-shadow-purple-xl);
				background-color: var(--color-bg-white);

				@include media-breakpoint-up(sm) {
					width: 360px;
					height: 928px;
				}
			}
		}

		&:last-child {
			@include media-breakpoint-up(lg) {
				padding-top: 33px;
				align-items: start;
				text-align: left;
			}
		}
	}
}

.page-section_order_5 {
	.page-section__container {
		padding-top: 28px;
		padding-bottom: 60px;

		@include media-breakpoint-up(md) {
			padding-top: 69px;
			padding-bottom: 161px;
		}
	}
}

.page-section_order_6 {
	.page-section__container {
		padding-top: 0;
		padding-bottom: 185px;

		@include media-breakpoint-up(sm) {
			padding-bottom: 160px;
		}

		@include media-breakpoint-up(md) {
			padding-bottom: 150px;
		}

		@include media-breakpoint-up(lg) {
			padding-bottom: 208px;
		}

		@include media-breakpoint-up(xl) {
			overflow: unset;
		}
	}

	.page-section__image {
		margin-top: 15px;

		@include media-breakpoint-up(sm) {
			margin-top: 25px;
			margin-bottom: 16px;
		}

		@include media-breakpoint-up(md) {
			display: none;
		}
	}

	.page-section__social {
		@include media-breakpoint-up(md) {
			margin-top: 70px;
		}

		&::before,
		&::after {
			position: absolute;
			z-index: 2;
			width: 400px;
			height: 560px;
			background-repeat: no-repeat;

			@include media-breakpoint-up(md) {
				content: "";
			}

			@include media-breakpoint-up(xl) {
				top: -67px;
			}
		}

		&::before {
			left: -65px;
			top: 195px;
			background-image: url("~@/assets/images/quickstart-page/social-left.svg");

			@include media-breakpoint-up(lg) {
				left: 0;
			}

			@include media-breakpoint-up(xl) {
				left: -155px;
				background-image: url("~@/assets/images/quickstart-page/social-left-xl.svg");
			}
		}

		&::after {
			//top: -37px;
			top: 225px;
			right: -205px;
			background-image: url("~@/assets/images/quickstart-page/social-right.svg");

			@include media-breakpoint-up(lg) {
				right: -138px;
			}

			@include media-breakpoint-up(xl) {
				background-image: url("~@/assets/images/quickstart-page/social-right-xl.svg");
			}
		}
	}
}

.page-section_order_7 {
	background-color: var(--color-bg-green-light);

	.page-section__container {
		padding-top: 9px;
		padding-bottom: 200px;

		@include media-breakpoint-up(md) {
			padding-top: 101px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 42px;
			padding-bottom: 243px;
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
			margin-top: 35px;
		}

		.page-section__col {
			&:first-child {
				margin-bottom: 42px;

				@include media-breakpoint-up(md) {
					margin-bottom: 28px;
					padding-left: 58px;
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

.page-section_order_8 {
	.page-section__container {
		padding-top: 32px;

		@include media-breakpoint-up(md) {
			padding-top: 136px;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 69px;
		}
	}
}

.page-section_order_9 {
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
