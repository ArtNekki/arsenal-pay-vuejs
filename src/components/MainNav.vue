<template>
	<ul class="main-nav">
		<li class="main-nav__item">
			<Link href="https://arsenalpay.ru/cashbox.html" size="sm" color="black">Онлайн касса</Link>
		</li>
		<li class="main-nav__item">
			<Link href="https://arsenalpay.ru/tariffs.html" size="sm" color="black">Тарифы</Link>
		</li>
		<li class="main-nav__item">
			<Link href="https://arsenalpay.ru/priem-platezhej-v-instagram.html" size="sm" color="black"
				>Платежи в Instagram*</Link
			>
		</li>
		<li class="main-nav__item">
			<Link href="https://arsenalpay.ru/priem-platezhej-na-sajte.html" size="sm" color="black"
				>Платежи на сайте</Link
			>
		</li>
		<li class="main-nav__item">
			<Link href="https://arsenalpay.ru/quickstart.html" size="sm" color="black">Платежи без сайта</Link>
		</li>
		<li class="main-nav__item main-nav__item_type_login">
			<Link href="https://arsenalpay.ru/dashboard/login" type="login" size="sm" color="black">Войти</Link>
		</li>
	</ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Link from "@/components/Link.vue";

@Options({
	components: {
		Link,
	},
})
export default class MainNav extends Vue {}
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
