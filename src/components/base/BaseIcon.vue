<template>
	<svg
		class="icon"
		:class="{
			['icon_color_' + color]: color && !currentColor,
		}"
		:width="width + 'px'"
		:height="height + 'px'"
		xmlns="http://www.w3.org/2000/svg"
	>
		<use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
	</svg>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		name: String,
		width: String,
		height: String,
		color: String,
		currentColor: Boolean,
	},
})
export default class BaseIcon extends Vue {
	get iconPath() {
		let icon = require(`@/assets/icons/${this.name}.svg`);
		if (Object.prototype.hasOwnProperty.call(icon, "default")) {
			icon = icon.default;
		}

		return icon.url;
	}
}
</script>

<style scoped lang="scss">
.icon {
	&_color_purple {
		color: var(--color-bg-purple);
	}

	&_color_pink {
		color: var(--color-bg-pink);
	}

	&_color_blue {
		color: var(--color-bg-blue);
	}

	&_color_green {
		color: var(--color-bg-green);
	}
}
</style>
