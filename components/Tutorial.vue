<!-- Please remove this file from your project -->
<template>
  <div class="wrapper">
    <div>i'm normal color</div>
    <div class="inner">i'm pink</div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      hi: 'hello world',
    }
  },
}
</script>

<style lang="scss">
.wrapper {
  .inner {
    color: pink;
  }
}
</style>
