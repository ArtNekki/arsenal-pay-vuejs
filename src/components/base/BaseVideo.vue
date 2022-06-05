<template>
	<article class="video">
		<ul class="video__nav">
			<li class="video__item" @click="setCurrentTime(5.25)">
				<span
					>Клиент выбирает товар<br class="br br--show-xs" />
					и переходит к оплате</span
				>
			</li>
			<li class="video__item" @click="setCurrentTime(7)">
				<span
					>Клиент вводит данные карты<br class="br br--show-xs" />
					и получает чек на email</span
				>
			</li>
			<li class="video__item" @click="setCurrentTime(25)">
				<span
					>Клиент может сразу сообщить<br class="br br--show-xs" />
					о покупке через кнопки связи</span
				>
			</li>
			<li class="video__item" @click="setCurrentTime(31)">
				<span
					>Вам приходит уведомление<br class="br br--show-xs" />
					на email и в личный кабинет</span
				>
			</li>
		</ul>
		<video id="player" ref="player" playsinline controls width="1100" height="600">
			<source :src="require(`@/assets/videos/vk/desktop.mp4`)" type="video/mp4" />
		</video>
	</article>
</template>

<script lang="js">
import {reactive, ref, watch} from "vue";
import Plyr from "plyr";

export default {
	props: {
		options: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			player: null
		}
	},
	mounted() {
		this.player = new Plyr(`#${this.$refs.player.id}`, {
			controls: ['play-large', 'progress', 'current-time']
		});
	},
	methods: {
		setCurrentTime(time) {
			this.player.currentTime = time;
		}
	},
	watch: {
		player: {
			handler(val, oldVal) {
				console.log('watch player', val.currentTime);
			},
			deep: true
		},
	},
	beforeUnmount() {
		if (this.player) {
			this.player.destroy();
		}
	}
}
</script>

<style scoped lang="scss">
.video {
	//--plyr-color-main: red;
	//--plyr-menu-color: green;
	//--plyr-menu-shadow: none;
	//--plyr-control-icon-size: 70px;
	//--plyr-video-controls-background: var(--color-bg-pink);

	position: relative;
	z-index: var(--layer-2);

	&__nav {
		@include list-clear();

		display: grid;
		grid-template-columns: repeat(4, 270px);
		grid-column-gap: 26px;
	}

	&__item {
		position: relative;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: 2px solid var(--color-bg-blue);
		border-radius: var(--border-radius-3xl);
		cursor: pointer;

		@include hover {
			background-color: var(--color-bg-blue);
			color: var(--color-text-inverse);
		}

		&:not(:last-child)::after {
			content: "";
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: -20px;
			width: 12px;
			height: 12px;
			border-radius: var(--border-radius-half);
			background-color: var(--color-bg-blue);
		}

		span {
			font-size: 14.6px;
			font-weight: 300;
			line-height: 1.64;
			letter-spacing: -0.5px;
		}
	}
}
</style>
