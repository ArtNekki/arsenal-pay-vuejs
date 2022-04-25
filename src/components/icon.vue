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
export default class Icon extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .icon {

    &_size_sm {
      width: 45px;
      height: 36px;
    }

    &_size_md {
      width: 48px;
      height: 38px;
    }

    &_size_lg {
      width: 120px;
      height: 120px;
    }
  }
</style>
