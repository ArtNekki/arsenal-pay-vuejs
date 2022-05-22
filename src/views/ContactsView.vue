<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container page-section__container--contacts">
			<h1 class="text text_type_title.level_1">Контакты</h1>
			<p class="text text_level_1 text_mgb_50">Свяжитесь с нами, мы найдём ответ на ваш вопрос.</p>

			<div class="page-section__box page-section__box_type_two">
				<div class="page-section__row">
					<div class="page-section__col">
						<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
						<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Партнёрам</h3>
						<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md text_mgb_no.on_screen_lg">
							<BaseLink href="mailto:partners@arsenalpay.ru" link-in="text" :blank="true" color="blue"
								>partners@arsenalpay.ru</BaseLink
							>
						</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
						<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Бухгалтерия</h3>
						<p class="text text_level_3 text_mgb_40 text_lh_28.on_screen_md text_mgb_no.on_screen_lg">
							<BaseLink href="mailto:accounts@arsenalpay.ru" link-in="text" :blank="true" color="blue"
								>accounts@arsenalpay.ru</BaseLink
							>
						</p>
					</div>
					<div class="page-section__col">
						<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
						<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Общие вопросы</h3>
						<p
							class="text text_level_3 text_mgb_no text_mgb_8.on_screen_md text_lh_28.on_screen_md text_mgb_no.on_screen_lg"
						>
							<BaseLink href="mailto:info@arsenalpay.ru" link-in="text" :blank="true" color="blue"
								>info@arsenalpay.ru</BaseLink
							>
						</p>
					</div>
				</div>
			</div>

			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />
				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Поддержка</h3>
				<p class="text text_level_3 text_mgb_no text_mgb_8.on_screen_md text_lh_28.on_screen_md">
					Мы подготовили для вас ответы <br class="br br--show-xs br--hide-sm" />на 
					<BaseLink href="https://arsenalpay.ru/support.html" link-in="text" :blank="true" color="blue"
						>частые вопросы</BaseLink
					>
					по платежам. Вы можете самостоятельно проверить
					<BaseLink href="https://arsenalpay.ru/support.html" link-in="text" :blank="true" color="blue"
						>статус своего платежа.</BaseLink
					>
					Напишите нам на
					<BaseLink href="mailto:pay@arsenalpay.ru" link-in="text" :blank="true" color="blue"
						>pay@arsenalpay.ru</BaseLink
					>, если вы не нашли ответ на свой вопрос.
				</p>
			</div>

			<div class="page-section__box page-section__box_type_two">
				<BaseIcon name="check-circle-large" width="37" height="37" color="purple" bottom-space="sm" />

				<h3 class="text text_type_title.level_3 text_lh_32.on_screen_md">Работа в нашей команде</h3>
				<p class="text text_level_3 text_mgb_no text_mgb_8.on_screen_md text_lh_28.on_screen_md">
					Каждый день мы стараемся сделать наши платежные инструменты ещё лучше. Мы всегда рады талантливым
					ребятам. Присылайте своё резюме на
					<BaseLink href="mailto:jointeam@arsenalpay.ru" link-in="text" :blank="true" color="blue"
						>jointeam@arsenalpay.ru</BaseLink
					>

					и присоединяйтесь<br class="br br--hide-xs br--show-sm br--hide-lg" />
					к нашей команде.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "@/components/base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BasePluginBox from "@/components/base/BasePluginBox.vue";

@Options({
	components: {
		BaseButton,
		BaseIcon,
		BaseLink,
	},
})
export default class ContactsView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-purple-light);

	.page-section__container {
		padding-top: 128px;
		padding-bottom: 118px;

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

	.page-section__row {
		@include media-breakpoint-up(lg) {
			margin-bottom: 9px;
			max-width: 740px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			justify-content: space-between;
			grid-column-gap: 40px;
		}
	}

	.page-section__col {
		@include media-breakpoint-only(xs) {
			display: flex;
			flex-direction: column;
			align-items: start;
		}
	}
}
</style>
