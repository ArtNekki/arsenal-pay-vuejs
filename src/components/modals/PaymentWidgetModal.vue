<template>
	<article
		class="modal"
		:class="{
			['modal_is_opened']: opened,
		}"
	>
		<transition name="fade">
			<div v-if="opened" class="modal__body">
				<button type="button" class="modal__close" @click="$emit('onClose')">
					<BaseIcon name="cross" width="12" height="12" color="black" />
				</button>
				<h1 class="modal__title">Виджет оплаты</h1>
				<p class="modal__text">
					Вы можете встроить виджет оплаты в любое место на сайте и реализовать любую логику появления
					виджета. Например, отображать виджет на странице корзины, или показывать его во всплывающем окне
					вашего сайта.
				</p>
				<iframe
					class="iframe iframe--widget"
					data-src="https://arsenalpay.ru/widget.html?widget=6022&destination=ArsenalPay-test&amount=1000"
					height="398"
				></iframe>
			</div>
		</transition>
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
export default class PaymentWidgetModal extends Vue {}
</script>

<style scoped lang="scss">
iframe {
	position: relative;
	margin-top: 10px;
	margin-left: -12px;
	width: calc(100% + 25px);
	height: 398px;
	border: none;

	@include media-breakpoint-up(sm) {
		margin-left: unset;
		width: 100%;
	}
}
</style>
