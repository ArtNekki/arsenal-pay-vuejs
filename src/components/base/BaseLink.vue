<template>
	<a
		:href="href"
		:active="isActive"
		:target="blank ? '_blank' : ''"
		class="link"
		:class="{
			['link_size_' + size]: size,
			['link_color_' + color]: color,
			['link_type_' + type]: type,
			['link_in_' + linkIn]: linkIn,
			['link_with_icon']: icon,
		}"
	>
		<span>
			<slot />
		</span>
		<slot name="icon" />
	</a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		href: String,
		isActive: Boolean,
		blank: Boolean,
		type: String,
		size: String,
		color: String,
		linkIn: String,
		icon: Boolean,
	},
})
export default class BaseLink extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
	@include clear-link-outline();

	position: relative;
	font-size: 14px;
	font-weight: 500;
	line-height: 30px;
	letter-spacing: -0.16px;
	color: var(--color-text-secondary);
	text-decoration: none;
	cursor: pointer;

	@-moz-document url-prefix() {
		&::before {
			bottom: -5px;
		}
	}

	span {
		position: relative;
		//display: inline-block;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: -4px;
			//bottom: 0;
			width: 100%;
			height: 1px;
			background-color: var(--color-text-secondary);
			opacity: 0;
			transition: background-color 0.3s;

			@include hover() {
				opacity: 1;
			}
		}
	}

	&_color_purple {
		color: var(--color-text-purple);

		span::before {
			background-color: var(--color-text-purple);
		}
	}

	&_color_pink {
		color: var(--color-text-pink);

		span::before {
			background-color: var(--color-text-pink);
		}
	}

	&_color_blue {
		color: var(--color-text-blue);

		span::before {
			background-color: var(--color-text-blue);
		}
	}

	&_size_sm {
		font-size: 12.4px;
		line-height: 15px;
		font-weight: 400;
		letter-spacing: 0.065px;

		span::before {
			bottom: -3px;
		}
	}

	&_in_footer {
		line-height: 32px;
	}

	&_in_text {
		font-family: inherit;
		font-size: inherit;
		font-weight: 500;
		line-height: inherit;
		letter-spacing: inherit;
	}

	//&_type_more {
	//	--icon-size: 14px;
	//
	//	line-height: var(--icon-size);
	//	text-transform: uppercase;
	//	user-select: none;
	//
	//	&::before {
	//		display: none;
	//	}
	//
	//	&::after {
	//		content: "";
	//		position: absolute;
	//		top: 50%;
	//		transform: translateY(-50%);
	//		right: -21px;
	//		width: var(--icon-size);
	//		height: var(--icon-size);
	//		display: inline-block;
	//		//background: url("arrow-right--blue") no-repeat;
	//	}
	//
	//	&.link_color_purple {
	//		&::after {
	//			//background: url("arrow-right--purple") no-repeat;
	//		}
	//
	//		span::before {
	//			background-color: var(--purple-dark-color);
	//		}
	//	}
	//}

	&_with_icon {
		text-transform: uppercase;

		:deep(svg) {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	&_type_login {
		display: block;
		line-height: normal;

		&::before {
			display: none;
		}

		&::after {
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -7px;
			width: 61px;
			height: 27px;
			border-radius: 18px;
			border: 1px solid rgba(#000000, 0.25);
			transition: background-color 0.3s linear, border-color 0.3s linear;

			@include hover {
				border-color: rgba(#000000, 0.6);
				background-color: rgba(#000000, 0.04);
			}
		}
	}
}
</style>
