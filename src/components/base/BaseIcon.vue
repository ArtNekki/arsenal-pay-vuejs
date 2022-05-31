<template>
	<svg
		class="icon"
		:class="{
			['icon_color_' + color]: color && !currentColor,
			['icon_size_' + size]: size,
			['icon_mgb_' + bottomSpace]: bottomSpace,
		}"
		:width="width"
		:height="height"
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
		size: String,
		color: String,
		currentColor: Boolean,
		bottomSpace: String,
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
	position: relative;
	display: inline-block;
	z-index: var(--layer-2);

	&_color_purple {
		color: var(--color-icon-purple);
	}

	&_color_pink {
		color: var(--color-icon-pink);
	}

	&_color_blue {
		color: var(--color-icon-blue);
	}

	&_color_cyan {
		color: var(--color-icon-cyan);
	}

	&_color_green {
		color: var(--color-icon-green);
	}

	&_color_black {
		color: var(--color-icon-black);
	}

	&_mgb_xs {
	}

	&_mgb_sm {
		margin-bottom: 12px;
	}

	&_mgb_md {
		margin-bottom: 16px;
	}

	&_mgb_xl {
		margin-bottom: 24px;
	}
}
</style>
