<template>
	<article
		class="modal"
		:class="{
			['modal_is_opened']: opened,
		}"
	>
		<div class="modal__body">
			<button type="button" class="modal__close" @click="$emit('onClose')">
				<BaseIcon name="cross" width="12" height="12" color="blue" />
			</button>
			<h1 class="modal__title">Виджет оплаты</h1>
			<p class="modal__text">
				Вы можете встроить виджет оплаты в любое место на сайте и реализовать любую логику появления виджета.
				Например, отображать виджет на странице корзины, или показывать его во всплывающем окне вашего сайта.
			</p>
		</div>
	</article>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import BaseIcon from "@/components/base/BaseIcon";
import BaseImage from "@/components/base/BaseImage";

@Options({
	components: {
		BaseIcon,
		BaseImage,
	},
	props: {
		opened: Boolean,
	},
})
export default class PartnershipModal extends Vue {}
</script>

<style scoped lang="scss">
 .modal {
	 flex-direction: row;
	 height: initial;
	 max-height: initial;
	 --modal-height: initial;

	 .modal__body {
		 padding: 22px 0 80px;

		 @include media-breakpoint-up(sm) {
			 --modal-height: initial;

			 padding-bottom: 90px;
			 max-width: 940px;
			 width: calc(100% - 40px);
		 }
	 }

	 .modal__title {
		 width: calc(100% - 40px);
		 margin: 58px auto 60px;
	 }
 }
</style>
