<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__links">
				<ul class="footer__list">
					<li class="footer__item">
						<router-link to="/about" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								О компании
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<router-link to="/contacts" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Контакты
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<BaseLink
							href="https://arsenalpay.ru/blog/"
							size="sm"
							color="black"
							link-in="footer"
							blank="true"
							>Блог</BaseLink
						>
					</li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item">
						<BaseLink href="https://arsenalpay.ru/cashbox.html" size="sm" color="black" link-in="footer"
							>Онлайн касса</BaseLink
						>
					</li>
					<li class="footer__item">
						<BaseLink href="https://arsenalpay.ru/tariffs.html" size="sm" color="black" link-in="footer"
							>Тарифы</BaseLink
						>
					</li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item">
						<router-link to="/priem-platezhej-v-instagram" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Платежи в Instagram*
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<router-link to="/priem-platezhej-vkontakte" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Платежи в VK
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<BaseLink
							href="https://arsenalpay.ru//priem-platezhej-na-sajte.html"
							size="sm"
							color="black"
							link-in="footer"
							>Платежи на сайте</BaseLink
						>
					</li>
					<li class="footer__item">
						<router-link to="/quickstart" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Платежи без сайта
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<router-link to="/travel" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Турфирмам
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<router-link to="/providers" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Провайдерам
							</BaseLink>
						</router-link>
					</li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item">
						<BaseLink
							href="https://arsenalpay.ru/documentation/index.html"
							size="sm"
							color="black"
							link-in="footer"
							>Документация</BaseLink
						>
					</li>
					<li class="footer__item">
						<BaseLink href="https://arsenalpay.ru/support.html" size="sm" color="black" link-in="footer"
							>Поддержка</BaseLink
						>
					</li>
					<li class="footer__item">
						<router-link to="/developers" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Разработчикам
							</BaseLink>
						</router-link>
					</li>
					<li class="footer__item">
						<router-link to="/partnership" custom v-slot="{ href, navigate, isActive }">
							<BaseLink
								:active="isActive"
								:href="href"
								size="sm"
								color="black"
								link-in="footer"
								@click="navigate"
							>
								Агентам
							</BaseLink>
						</router-link>
					</li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item">
						<BaseLink href="https://arsenalpay.ru/demo.html" size="sm" color="black" link-in="footer"
							>Демо магазин</BaseLink
						>
					</li>
					<li class="footer__item">
						<BaseLink href="https://arsenalpay.ru/pay/" size="sm" color="black" link-in="footer"
							>Оплата услуг</BaseLink
						>
					</li>
				</ul>
			</div>
			<div class="footer__bottom">
				<div class="footer__social">
					<BaseSocial block-in="footer" />
				</div>
				<div class="footer__note">
					<small>* Instagram, признана в России экстремистской.</small>
					<small>Гражданам России не запрещено пользоваться и вести бизнес в Instagram*.</small>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseLink from "@/components/base/BaseLink.vue";
import BaseSocial from "./base/BaseSocial.vue";

@Options({
	components: {
		BaseLink,
		BaseSocial,
	},
})
export default class ThePageFooter extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
	&__container {
		@include container();

		@include media-breakpoint-up(lg) {
			max-width: 820px;
			box-sizing: content-box;
		}

		@include media-breakpoint-up(xxl) {
			max-width: 900px;
		}

		@include media-breakpoint-up(xxxl) {
			max-width: 1040px;
		}
	}

	&__links {
		display: none;

		@include media-breakpoint-up(lg) {
			margin: 76px 0 68px 0;
			display: grid;
			grid-template-columns: repeat(5, auto);
			justify-content: space-between;
		}
	}

	&__social {
		margin: 39px 0 63px 0;
		display: flex;
		justify-content: center;

		@include media-breakpoint-up(lg) {
			margin: 0 0 28px 0;
			justify-content: space-between;
			align-items: center;
		}
	}

	&__lang {
		display: none;

		@include media-breakpoint-up(lg) {
			display: block;
		}
	}

	&__list {
		@include list-clear();

		position: relative;

		&:nth-child(3) {
			@include media-breakpoint-up(xxl) {
				left: -3px;
			}
		}

		&:nth-child(4) {
			@include media-breakpoint-up(xxl) {
				left: -2px;
			}
		}
	}

	&__bottom {
		@include media-breakpoint-up(lg) {
			display: flex;
			justify-content: space-between;
		}
	}

	&__note {
		position: relative;
		margin-bottom: 33px;
		text-align: center;

		@include media-breakpoint-up(lg) {
			top: 22px;
			text-align: right;
		}

		small {
			display: block;
			font-family: var(--font-family);
			font-size: 12.4px;
			line-height: 20px;
		}
	}
}
</style>
