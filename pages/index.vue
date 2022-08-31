<template>
  <div class="index">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold text-center py-8">Aotter Gallery</h1>
      <section class="card-list">
        <Card v-for="(item, index) in cardList" :key="index" />
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const message = ref('this is card')
    const cardList = ref([...Array(60)].map((v) => v))

    return {
      message,
      cardList,
    }
  },
})
</script>

<style lang="scss">
.card-list {
  @apply mb-8;
  @apply flex flex-wrap justify-around;
  @apply gap-5 md:gap-10 lg:gap-20;
}
</style>
