<template>
  <button
    class="block py-3 rounded w-full bg-primary hover:bg-primary-dark"
    @click="$emit('click')"
  >
    <slot>載入更多</slot>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AotterButton',
})
</script>

<style lang="scss"></style>
