<template>
	<div class="btn">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		type: String,
	},
})
export default class Chips extends Vue {
	msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chips {
	margin-bottom: 12px;

	@include media-breakpoint-up(md) {
		margin-bottom: 16px;
	}
}
</style>
