<template>
	<section class="page-section page-section_skew_no">
		<div class="page-section__container">
			<BaseIcon
				:name="page === 'instagram' ? 'card-size-lg' : 'kassa-big'"
				width="112"
				height="112"
				size="lg"
				color="pink"
			/>
			<div class="page-section__notice">
				<BaseNotice state="success">Теперь приём платежей доступен и самозанятым</BaseNotice>
			</div>
			<h2 class="text text_type_title.level_1" v-html="title"></h2>
			<p class="text text_level_1" v-html="text"></p>
			<div class="page-section__button">
				<BaseButton :href="link">Подключиться</BaseButton>
			</div>
		</div>
	</section>
</template>

<script lang="js">
import { Options, Vue } from "vue-class-component";
import BaseNotice from "./base/BaseNotice.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseIcon from "./base/BaseIcon.vue";

@Options({
	props: {
		page: String
	},
	components: {
		BaseNotice,
		BaseButton,
		BaseIcon,
	},
})
export default class ThePaymentsBlock extends Vue {
	title = 'Начать приём платежей с&nbsp;кассой';
	text = 'Вам не&nbsp;нужно покупать или брать в&nbsp;аренду свою&nbsp;кассу';
	link;

	updated() {
		switch(this.page) {
			case 'about':
				this.link = 'https://arsenalpay.ru/dashboard/registration-type';
				break;
			case 'contacts':
				this.link='https://arsenalpay.ru/dashboard/registration-type';
				break;
			case 'developers':
				this.link='https://arsenalpay.ru/dashboard/registration-type';
				break;
			case 'instagram':
				this.link='https://arsenalpay.ru/dashboard/quickstart?step=1';
				this.title = 'Подключить платежи в Instagram*';
				this.text = 'Для подключения нужен только ИНН юрлица, ИП&nbsp;или&nbsp;самозанятого.';
				break;
			case 'partnership':
				this.link='https://arsenalpay.ru/dashboard/registration-type';
				break;
			case 'providers':
				this.link='https://arsenalpay.ru/dashboard/quickstart?step=1';
				break;
			case 'quickstart':
				this.link='https://arsenalpay.ru/dashboard/quickstart?step=1';
				break;
			case 'support':
				this.link="https://arsenalpay.ru/dashboard/registration-type";
				break;
			case 'travel':
				this.link="https://arsenalpay.ru/dashboard/registration-type";
				break;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-section {
	background-color: var(--color-bg-pink-darken);

	&__container {
		padding-top: 100px;
		padding-bottom: 90px;
		align-items: center;
		text-align: center;

		@include media-breakpoint-up(md) {
			padding-top: 131px;
			padding-bottom: 118px;
		}
	}

	&__notice {
		margin-top: 28px;
		margin-bottom: 16px;
		width: 100%;
		align-self: center;
		z-index: 1;

		@include media-breakpoint-up(sm) {
			margin-left: -4px;
			max-width: 400px;
		}
	}

	&__button {
		margin-top: 24px;
		width: 100%;
		max-width: 320px;

		@include media-breakpoint-up(sm) {
			max-width: 305px;
		}
	}
}
</style>
