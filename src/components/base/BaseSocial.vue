<template>
	<div
		class="social"
		:class="{
			['social_type_' + type]: type,
		}"
	>
		<span class="social__label">Мы в соцсетях</span>
		<a href="https://t.me/arsenalpay" class="social__item" target="_blank">
			<BaseIcon name="social-telegram" width="18" height="18" />
		</a>
		<a href="https://vk.com/arsenal_pay" class="social__item" target="_blank">
			<BaseIcon name="social-vk" width="18" height="18" />
		</a>
		<a href="https://vm.tiktok.com/ZSdYwgyuU/" class="social__item" target="_blank">
			<BaseIcon name="social-tiktok" width="18" height="18" />
		</a>
	</div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import BaseIcon from "./BaseIcon.vue";

@Options({
	components: {
		BaseIcon,
	},
	props: {
		type: String,
	},
})
export default class BaseSocial extends Vue {}
</script>

<style scoped lang="scss">
.social {
	display: grid;
	grid-template-columns: repeat(3, auto);
	align-items: center;

	&_type_footer {
		grid-column-gap: 29px;

		@include media-breakpoint-up(lg) {
			grid-column-gap: 30px;
		}
	}

	&__label {
		margin-bottom: 10px;
		display: block;
		grid-column: 1 / -1;
		font-size: 12.4px;
		line-height: 31px;
		text-align: center;
		letter-spacing: 0.085px;
		color: rgba(var(--color-text-primary), 0.8);

		.social_type_footer & {
			@include media-breakpoint-up(lg) {
				text-align: left;
			}
		}
	}

	&__item {
		@include clear-link-outline();

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		&::before {
			--size: 32px;

			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: var(--size);
			height: var(--size);
			border-radius: var(--border-radius-half);
			transition: all var(--transition-time);

			@include hover {
				background: rgba(var(--color-bg-black), 0.06);
				background: var(--color-bg-gray-super-light);
			}
		}
	}
}
</style>
