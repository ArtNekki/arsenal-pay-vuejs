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
			<BaseImage src="modals/fiscal-receipt" :breakpoints="{ md: true }"></BaseImage>
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
export default class FiscalReceiptModal extends Vue {}
</script>

<style scoped lang="scss">
.modal {
	.modal__body {
		--modal-height: 1479px;
		--modal-width: 320px;

		padding: 0;
		background-color: #f3f3f3;
		overflow: hidden;

		@include media-breakpoint-up(sm) {
			--modal-height: 1757px;
			--modal-width: 380px;
		}

		@include media-breakpoint-up(md) {
			--modal-height: 1500px;
			--modal-width: 700px;
		}
	}
}
</style>
