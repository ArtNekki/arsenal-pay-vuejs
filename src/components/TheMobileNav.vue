<template>
	<div class="mobile-nav" :class="{ 'mobile-nav_state_opened': opened }">
		<div class="mobile-nav__main">
			<button type="button" class="mobile-nav__close" @click="$emit('onClose')">
				<BaseIcon name="cross" width="11" height="11" color="black" />
			</button>
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/cashbox.html" size="sm" color="black">Онлайн касса</BaseLink>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/tariffs.html" size="sm" color="black">Тарифы</BaseLink>
				</li>
			</ul>
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/priem-platezhej-v-instagram" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Платежи в Instagram*
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/priem-platezhej-vkontakte" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Платежи в VK
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/priem-platezhej-na-sajte.html" size="sm" color="black"
						>Платежи на сайте</BaseLink
					>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/quickstart" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Платежи без сайта
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/travel" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Турфирмам
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/providers" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Провайдерам
						</BaseLink>
					</router-link>
				</li>
			</ul>
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/about" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							О компании
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/contacts" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Контакты
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/blog/" blank="true" size="sm" color="black">Блог</BaseLink>
				</li>
			</ul>
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/documentation/index.html" blank="true" size="sm" color="black"
						>Документация</BaseLink
					>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/support.html" blank="true" size="sm" color="black"
						>Поддержка</BaseLink
					>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/developers" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Разработчикам
						</BaseLink>
					</router-link>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<router-link to="/partnership" custom v-slot="{ href, navigate, isActive }">
						<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
							Агентам
						</BaseLink>
					</router-link>
				</li>
			</ul>
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/demo.html" blank="true" size="sm" color="black"
						>Демо магазин</BaseLink
					>
				</li>
				<li class="mobile-nav__item" @click="$emit('onClose')">
					<BaseLink href="https://arsenalpay.ru/pay/" blank="true" size="sm" color="black"
						>Оплата услуг</BaseLink
					>
				</li>
			</ul>
			<a href="https://arsenalpay.ru/dashboard/login" class="mobile-nav__login" @click="$emit('onClose')"
				>Войти</a
			>
			<BaseSocial />
			<!--    {{> lang}}-->
		</div>
	</div>
</template>

<script lang="ts">
import BaseLink from "@/components/base/BaseLink.vue";
import BaseIcon from "./base/BaseIcon.vue";
import BaseSocial from "./base/BaseSocial.vue";

export default {
	components: {
		BaseLink,
		BaseIcon,
		BaseSocial,
	},
	props: {
		opened: Boolean,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-nav {
	--mobile-nav-width: 250px;

	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -10;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background-color: var(--color-bg-gray-light);
	overflow-y: auto;
	opacity: 0;
	transition: all 0.3s linear;

	//page--mobile-nav-open
	&_state_opened {
		display: flex;
		z-index: 1000;
		opacity: 1;

		@include media-breakpoint-up(lg) {
			opacity: 0;
			z-index: -10;
		}
	}

	&__main {
		position: absolute;
		padding: 60px 30px 64px;
		display: flex;
		flex-direction: column;
		width: var(--mobile-nav-width);
		background-color: var(--color-bg-white);
		box-shadow: var(--box-shadow-mobile-nav);
		border-top-left-radius: var(--border-radius-sm);
		border-bottom-left-radius: var(--border-radius-sm);
		box-sizing: border-box;
		transform: translate3d(var(--mobile-nav-width), 0, 0);
		transition: all 0.3s linear;
		will-change: trasform;

		// .page--mobile-nav-open
		.mobile-nav_state_opened & {
			transform: translate3d(0, 0, 0);

			@include media-breakpoint-up(lg) {
				transform: translate3d(var(--mobile-nav-width), 0, 0);
			}
		}

		//safari fix height
		@media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
			position: absolute;
		}
	}

	&__list {
		@include list-clear();

		margin-bottom: 16px;
	}

	&__item a {
		@include clear-link-outline();

		font-size: 14.8px;
		line-height: 42px;
		color: rgba(var(--color-text-secondary), 0.8);
		text-decoration: none;
	}

	&__close {
		@include close-btn();

		position: absolute;
		top: 14px;
		right: 17px;

		width: 38px;
		height: 36px;
	}

	&__login {
		@include clear-link-outline();

		margin-top: 16px;
		margin-bottom: 40px;
		padding: 5px 0;
		font-size: 12.4px;
		line-height: 15px;
		text-decoration: none;
		text-align: center;
		color: rgba(var(--color-text-secondary), 0.8);
		border: 1px solid var(--color-stroke-light);
		border-radius: 20px;
		transition: background-color 0.3s linear, border-color 0.3s linear;

		@include hover {
			border-color: 1px solid var(--color-stroke-light);
			background-color: var(--color-bg-gray-super-light);
		}
	}
}
</style>
