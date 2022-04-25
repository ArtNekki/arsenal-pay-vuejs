<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    type: String,
  },
})
export default class Btn extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn {

     width: 40px;
     height: 40px;
     background: var(--color-bg-blue);
     border-radius: var(--border-radius-md);

    @include media-breakpoint-up(md) {
      background: red;
    }
  }
</style>
