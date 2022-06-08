<template>
	<transition name="fade">
		<div v-if="isActive" class="cookie">
			<div class="cookie__wrapper">
				<div class="cookie__main">
					<div class="cookie__icon">
						<BaseIcon name="cookie" width="20" height="20" />
					</div>
					<p class="cookie__text">
						Сохраняем cookie по
						<a
							class="cookie__link"
							href="https://arsenalpay.ru/documentation/#politika-obrabotki-personal-nyh-dannyh-i-konfidencial-nosti"
							target="_blank"
							rel="noopener noreferrer"
							>правилам конфиденциальности.</a
						>
					</p>
					<BaseButton size="xs" view="purple" @click="applyAgreement()">Хорошо</BaseButton>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import BaseIcon from "./base/BaseIcon.vue";
import BaseButton from "./base/BaseButton.vue";

const STORAGE_KEY = "cookiesAgreement";
const STORAGE_TOKEN = "ok";
const STORAGE_ERROR = "LocalStorage does not available";

export default {
	components: {
		BaseIcon,
		BaseButton,
	},
	props: {
		type: String,
	},
	data() {
		return {
			storage: "",
			isActive: false,
		};
	},
	mounted() {
		this.storage = window.localStorage;
		this.showIfNeeded();
	},
	methods: {
		showIfNeeded() {
			let cookiesAgreement;

			try {
				cookiesAgreement = this.storage.getItem(STORAGE_KEY);
			} catch (error) {
				console.error(STORAGE_ERROR);
				console.error(error);
			}

			if (STORAGE_TOKEN !== cookiesAgreement) {
				this.isActive = true;
			}
		},

		applyAgreement() {
			try {
				this.storage.setItem(STORAGE_KEY, STORAGE_TOKEN);
			} catch (error) {
				console.error(STORAGE_ERROR);
				console.error(error);

				return;
			}

			this.isActive = false;
		},
	},
};
</script>

<style scoped lang="scss">
.cookie {
	background-color: var(--color-bg-pink-light);
	position: -webkit-sticky;
	position: sticky;
	bottom: 0;
	z-index: 9999;
	height: 36px;
	overflow: hidden;

	&:after,
	&:before {
		content: "";
		display: table;
	}

	@media screen and (max-width: 599px) {
		height: auto;
	}

	&__wrapper {
		padding: 8px 20px;

		@media screen and (max-width: 599px) {
			padding: 10px 20px;
		}
	}

	&__main {
		display: flex;
		align-items: center;
		max-width: 444px;
		margin: 0 auto;

		@supports (-moz-appearance: none) {
			max-width: 447px;
		}
	}

	&__icon {
		margin-right: 8px;
		margin-bottom: 2px;

		@media screen and (max-width: 599px) {
			display: none;
		}
	}

	&__link,
	&__text {
		padding: 0;
		margin: 0;
		font-size: 12.2px;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.31;
		letter-spacing: -0.23px;
		text-align: center;
		font-weight: 300;
		color: var(--color-bg-black-lighten);
	}

	&__link {
		font-weight: 500;
		color: var(--color-text-purple);
		text-decoration: none;
	}

	&__text {
		@media screen and (max-width: 599px) {
			text-align: left;
		}
	}
}
</style>
