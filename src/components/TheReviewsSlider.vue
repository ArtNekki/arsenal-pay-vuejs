<template>
	<div class="swiper-box">
		<swiper :modules="modules" slides-per-view="auto" :space-between="20" navigation @resize="onResize">
			<swiper-slide v-for="review in reviews" :key="review">
				<BaseReviewCard :data="review" />
			</swiper-slide>
		</swiper>
	</div>
	<!--			<button @click="swiper.slideNext()">Next</button>-->
</template>

<script lang="ts">
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { FreeMode, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BaseReviewCard from "@/components/base/BaseReviewCard.vue";

// Import Swiper styles
export default {
	props: {
		reviews: Object,
	},
	components: {
		Swiper,
		SwiperSlide,
		BaseReviewCard,
	},
	setup() {
		const onResize = (swiper: any) => {
			const breakPointMatched = window.matchMedia(`(min-width: 1045px)`).matches;

			if (breakPointMatched) {
				swiper.disable();
			} else {
				swiper.enable();
			}
		};

		return {
			onResize,
			modules: [Navigation, Pagination, FreeMode],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-box {
	position: relative;
	z-index: 2;
	width: 100%;

	@include media-breakpoint-up(md) {
		margin-top: -19px;
	}
}

.swiper {
	position: relative;
	padding: 73px var(--container-padding-x) 60px;
	left: calc(-1 * var(--container-padding-x));
	width: 100%;

	@media (min-width: 1045px) {
		overflow: unset;
		left: -59px;
	}

	@include media-breakpoint-up(xxl) {
		left: -85px;
	}

	&-wrapper {
		@include media-breakpoint-up(sm) {
			left: -20px;
		}

		@include media-breakpoint-up(md) {
			left: 0;
		}
	}

	&-slide {
		width: 320px !important;
	}

	&-button {
		@include btn-default();

		position: absolute;
		top: 27px;
		z-index: 10;
		cursor: pointer;

		@include media-breakpoint-up(md) {
			display: none;
		}

		@include focus {
			outline: none;
		}

		&-prev {
			left: 0;
		}

		&-next {
			right: 0;
		}

		&-disabled {
			cursor: not-allowed;
		}

		svg {
			--icon-color: var(--blue-dark-color);

			@include hover() {
				--icon-color: var(--blue-dark-color);
			}
		}

		&-disabled svg {
			--icon-color: rgba(0, 0, 0, 0.3);

			@include hover() {
				--icon-color: rgba(0, 0, 0, 0.3);
			}
		}
	}
}

:deep(.swiper) {
	@include media-breakpoint-up(xxl) {
		margin-left: 6px;
	}
}

:deep(.swiper) .swiper-wrapper {
	@media (min-width: 1045px) {
		transform: translate3d(0, 0, 0) !important;
	}
}

:deep(.swiper) .swiper-button-prev,
:deep(.swiper) .swiper-button-next {
	top: 45px;
	width: 48px;
	height: 38px;
	background-color: var(--color-bg-blue);

	&::after {
		content: "";
		width: inherit;
		height: inherit;
	}
}

:deep(.swiper) .swiper-button-prev {
	left: var(--container-padding-x);

	&::after {
		content: "";
		background-image: url("~@/assets/icons/arrow-right.svg");
	}

	@include media-breakpoint-up(sm) {
		left: calc(var(--container-padding-x) + 20px);
	}
}

:deep(.swiper) .swiper-button-next {
	right: var(--container-padding-x);

	&::after {
		background-image: url("~@/assets/icons/arrow-right.svg");
	}

	@include media-breakpoint-up(sm) {
		right: calc(var(--container-padding-x) + 20px);
	}
}

:deep(.swiper) .swiper-slide {
	@include media-breakpoint-up(xxl) {
		margin-right: 40px !important;
	}
}
</style>
