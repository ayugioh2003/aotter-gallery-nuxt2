<!-- Please remove this file from your project -->
<template>
  <div class="wrapper">
    <div>i'm normal color</div>
    <div class="inner">i'm pink</div>
    {{ message }}
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NuxtTutorial',
  setup() {
    const message = ref('hello world')
    return {
      message,
    }
  },
  head: {},
})
</script>

<style lang="scss">
.wrapper {
  .inner {
    color: pink;
  }
}
</style>
