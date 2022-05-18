<template>
	<div></div>
	<a :href="href" class="plugin-box">
		<div class="plugin-box__body">
			<BaseIcon :name="name" :width="width" :height="height" />
			<div class="plugin-box__caret">
				<BaseIcon name="caret-right" width="48" height="38" />
			</div>
		</div>
		<ul v-if="links?.length" class="plugin-box__list">
			<li v-for="link in links" class="plugin-box__item" :key="link">
				<BaseLink :href="link.href" :blank="true" color="blue">
					{{ link.text }}
					<template v-slot:icon>
						<BaseIcon name="invoice-medium" width="48" height="38"></BaseIcon>
					</template>
				</BaseLink>
			</li>
		</ul>
	</a>
</template>

<script lang="ts">
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
		name: {
			type: String,
			default: "logo-ecwid",
		},
		links: String,
	},
})
export default class BasePluginBox extends Vue {
	public width!: string;
	public height = `60`;

	// mounted() {
	// 	switch (this.name) {
	// 		case `logo-ecwid`:
	// 			this.width = `140`;
	// 			break;
	// 		case `logo-tilda`:
	// 			this.width = `164`;
	// 			break;
	// 		case `logo-in-sales`:
	// 			this.width = `96`;
	// 			break;
	// 		case `logo-joomla`:
	// 			this.width = `152`;
	// 			break;
	// 		case `logo-netcat`:
	// 			this.width = `132`;
	// 			break;
	// 		case `logo-webasyst`:
	// 			this.width = `145`;
	// 			break;
	// 		case `logo-umi-cms`:
	// 			this.width = `125`;
	// 			break;
	// 		case `logo-bitrix`:
	// 			this.width = `190`;
	// 			break;
	// 		case `logo-woocommerce`:
	// 			this.width = `170`;
	// 			break;
	// 		case `logo-opencart`:
	// 			this.width = `166`;
	// 			break;
	// 		case `logo-prestashop`:
	// 			this.width = `180`;
	// 			break;
	// 		case `logo-siberian`:
	// 			this.width = `140`;
	// 			break;
	// 		case `logo-virtuemart`:
	// 			this.width = `140`;
	// 			break;
	// 	}
	// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
