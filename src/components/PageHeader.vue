<template>
	<div class="page-header">
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
export default class PageHeader extends Vue {
	msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-header {
	background: red;
	height: 70px;
}
</style>
