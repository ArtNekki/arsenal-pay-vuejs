<template>
	<ul class="main-nav">
		<li class="main-nav__item">
			<BaseLink href="https://arsenalpay.ru/cashbox.html" size="sm" color="black">Онлайн касса</BaseLink>
		</li>
		<li class="main-nav__item">
			<BaseLink href="https://arsenalpay.ru/tariffs.html" size="sm" color="black">Тарифы</BaseLink>
		</li>
		<li class="main-nav__item">
			<router-link to="/priem-platezhej-v-instagram" custom v-slot="{ href, navigate, isActive }">
				<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
					Платежи в Instagram*
				</BaseLink>
			</router-link>
		</li>
		<li class="main-nav__item">
			<BaseLink href="https://arsenalpay.ru/priem-platezhej-na-sajte.html" size="sm" color="black"
				>Платежи на сайте</BaseLink
			>
		</li>
		<li class="main-nav__item">
			<router-link to="/quickstart" custom v-slot="{ href, navigate, isActive }">
				<BaseLink :active="isActive" :href="href" size="sm" color="black" @click="navigate">
					Платежи без сайта
				</BaseLink>
			</router-link>
		</li>
		<li class="main-nav__item main-nav__item_type_login">
			<BaseLink href="https://arsenalpay.ru/dashboard/login" type="login" size="sm" color="black">Войти</BaseLink>
		</li>
	</ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseLink from "@/components/base/BaseLink.vue";

@Options({
	components: {
		BaseLink,
	},
})
export default class TheMainNav extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-nav {
	@include list-clear();

	position: relative;
	top: -1px;
	display: none;

	@include media-breakpoint-up(lg) {
		display: flex;
	}

	&__item {
		position: relative;
		margin-right: 22px;

		&_type_login {
			margin-left: 12px;
			margin-right: 11px;
		}
	}
}
</style>
