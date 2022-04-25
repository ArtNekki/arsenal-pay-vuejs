<template>
  <div class="note">
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
export default class Note extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .note {

    &__text {
      font-size: 16.1px;
      line-height: 24px;
      letter-spacing: -0.61px;
    }
  }
</style>
