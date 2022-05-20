<template>
	<a
		:href="href"
		class="plugin-box"
		:class="{
			'plugin-box_is_active': isActive,
			'plugin-box_type_link': href,
		}"
		@click="toggleBoxState"
	>
		<div class="plugin-box__body">
			<BaseIcon :name="name" :width="width" :height="height" />
			<div class="plugin-box__caret">
				<BaseIcon name="caret-right" width="48" height="38" />
			</div>
		</div>
		<ul v-if="links?.length" class="plugin-box__list">
			<li v-for="link in links" class="plugin-box__item" :key="link">
				<BaseLink :href="link.href" :blank="true" color="blue">
					<span v-html="link.text"></span>
					<template v-slot:icon>
						<BaseIcon name="arrow-right" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</li>
		</ul>
	</a>
</template>

<script lang="js">
import { Options, Vue } from "vue-class-component";
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseLink from "./BaseLink.vue";

@Options({
	components: {
		BaseIcon,
		BaseLink,
	},
	props: {
		href: String,
		name: String,
		links: String,
	},
})
export default class BasePluginBox extends Vue {
	 width = '';
	 height = '60';
	 isActive = false;

	toggleBoxState() {
		this.isActive = !this.isActive;
	}

	mounted() {
		switch (this.name) {
			case `logo-ecwid`:
				this.width = `140`;
				break;
			case `logo-tilda`:
				this.width = `164`;
				break;
			case `logo-in-sales`:
				this.width = `96`;
				break;
			case `logo-joomla`:
				this.width = `152`;
				break;
			case `logo-netcat`:
				this.width = `132`;
				break;
			case `logo-webasyst`:
				this.width = `145`;
				break;
			case `logo-umi-cms`:
				this.width = `125`;
				break;
			case `logo-bitrix`:
				this.width = `190`;
				break;
			case `logo-woocommerce`:
				this.width = `170`;
				break;
			case `logo-opencart`:
				this.width = `166`;
				break;
			case `logo-prestashop`:
				this.width = `180`;
				break;
			case `logo-siberian`:
				this.width = `140`;
				break;
			case `logo-virtuemart`:
				this.width = `140`;
				break;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plugin-box {
	display: block;
	border: 1px solid rgba(#000000, 0.2);
	border-radius: 40px;

	@include media-breakpoint-up(sm) {
		width: 100%;
	}

	&:not(:last-child) {
		margin-bottom: 16px;

		@include media-breakpoint-up(md) {
			margin-bottom: 22px;
		}
	}

	@include hover {
		border-color: rgba(#000000, 0.6);
		background-color: rgba(#000000, 0.04);
	}

	&__body {
		position: relative;
		padding: 4px 14px 4px 28px;
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		cursor: pointer;
		user-select: none;
	}

	&__list {
		@include list-clear();

		margin-bottom: 23px; //25
		padding: 0 28px;
		display: none;

		.plugin-box_is_active & {
			display: block;
		}
	}

	&__item {
		margin-top: 8px;
		margin-bottom: 8px;
		text-align: left;

		svg.icon {
			position: absolute;
			top: -9px;
		}

		@-moz-document url-prefix() {
			& {
				margin-top: 7px;
			}
		}
	}

	&__caret {
		transform: rotate3d(0, 0, 1, 90deg);

		.plugin-box_is_active & {
			transform: rotate3d(0, 0, 1, -90deg);
		}

		.plugin-box_type_link & {
			transform: rotate3d(0, 0, 1, 0deg);
		}
	}

	&__item {
		>>> a.link {
			>>> span {
				>>> span br {
					display: block;

					@media (min-width: 414px) {
						display: none;
					}
				}
			}
		}
	}
}
</style>
