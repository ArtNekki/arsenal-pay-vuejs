<template>
	<article class="video">
		<el-scrollbar>
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
		</el-scrollbar>
		<div class="video__content">
			<video
				id="player"
				ref="player"
				playsinline
				controls
				:width="`${videoWidth}px`"
				:height="`${videoHeight}px`"
			></video>
		</div>
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
			player: null,
			isMobileScreen: false,
			videoWidth: 0,
			videoHeight: 0
		}
	},
	created()  {
		window.addEventListener("resize", this.resizeHandler);
	},
	unmounted()  {
		window.removeEventListener("resize", this.resizeHandler);
	},
	methods: {
		setCurrentTime(time) {
			this.player.currentTime = time;
		},
		resizeHandler(e)  {
			this.isMobileScreen = window.matchMedia(`(max-width: 1280px)`).matches;
		},
		loadVideo(isMobile) {
			if (isMobile) {
				this.player.source = {
					type: 'video',
					title: 'Mobile video',
					sources: [
						{
							src: require(`@/assets/videos/vk/mobile.mp4`),
							type: 'video/mp4',
							size: 720,
						}
					]
				}
			} else {
				this.player.source = {
					type: 'video',
					title: 'Desktop video',
					sources: [
						{
							src: require(`@/assets/videos/vk/desktop.mp4`),
							type: 'video/mp4',
							size: 720,
						}
					]
				}
			}
		}
	},
	mounted() {
		this.player = new Plyr(`#${this.$refs.player.id}`, {
			controls: ['play-large', 'progress', 'current-time']
		});

		this.player.on('load', (event) => {
			console.log('canplay!!!');
		});

		this.isMobileScreen = window.matchMedia(`(max-width: 1280px)`).matches;
		this.loadVideo(this.isMobileScreen);
	},
	watch: {
		player: {
			handler(val, oldVal) {
				console.log('watch player', val.currentTime);
			},
			deep: true
		},
		isMobileScreen: {
			handler(isMobile) {
				this.loadVideo(isMobile);
			}
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
	--plyr-video-background: transparent;

	position: relative;
	z-index: var(--layer-2);
	margin-top: 100px;
	//overflow: hidden;

	&__nav {
		@include list-clear();

		display: grid;
		grid-template-columns: repeat(4, 270px);
		grid-column-gap: 26px;
		width: 100%;
		max-width: 1158px;
		height: 115px;
		flex-shrink: 0;
	}

	&__item {
		position: relative;
		width: 270px;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		text-align: center;
		border: 2px solid var(--color-bg-blue);
		border-radius: var(--border-radius-3xl);
		box-sizing: border-box;
		cursor: pointer;

		@include hover {
			background-color: var(--color-bg-blue);
			color: var(--color-text-inverse);
		}

		&_is_active {
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

		&::before {
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -26px;
			border-width: 12px 14px 12px 14px;
			border-style: solid;
			border-color: var(--color-bg-blue) transparent transparent transparent;
			opacity: 0;
		}

		&_is_active::before,
		&:hover::before {
			opacity: 1;
		}

		span {
			font-size: 14.6px;
			font-weight: 300;
			line-height: 1.64;
			letter-spacing: -0.5px;
		}
	}

	&__content {
		margin: 84px auto 0;

		width: 320px;
		height: 612px;

		@include media-breakpoint-up(xl) {
			width: 1100px;
			height: 600px;
		}
	}
}

.el-scrollbar {
	//position: absolute;
	//bottom: 0;
	//left: 0;
	width: 100%;
	max-width: 1158px;
}
</style>
