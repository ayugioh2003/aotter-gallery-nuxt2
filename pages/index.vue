<template>
  <div class="index">
    <div class="mx-auto" style="max-width: 1000px; padding: 0, 32px">
      <h1 class="text-2xl font-bold text-center py-24">Aotter Gallery</h1>
      <section v-if="photos.length > 0" class="card-list">
        <Card
          v-for="(item, index) in photos.filter((v, i) => i < 20)"
          :id="item.id"
          :key="index"
          :title="item.title"
          :url="item.url"
          :thumbnail-url="item.thumbnailUrl"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { holderApi } from '@/api/holder'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { fetchPhotos } = holderApi()
    const photos = ref([])

    const loadPhotos = async () => {
      const res = await fetchPhotos()

      photos.value = res
      return res
    }

    const { fetch, fetchState } = useFetch(async () => {
      await loadPhotos()
    })
    fetch() // Manually trigger a refetch
    console.log('fetchState', fetchState) // // Access fetch error, pending and timestamp

    return {
      photos,
      loadPhotos,
    }
  },
})
</script>

<style lang="scss">
.card-list {
  @apply mb-8;
  @apply flex flex-wrap justify-around;
  @apply gap-5 md:gap-10;
}
</style>
