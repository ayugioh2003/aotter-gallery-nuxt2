<template>
  <div class="index">
    <div class="mx-auto" style="max-width: 1000px; padding: 0, 32px">
      <h1 class="text-2xl font-bold text-center py-24">Aotter Gallery</h1>
      <section v-if="photos && photos.length > 0" class="card-list">
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
import {
  defineComponent,
  ref,
  useFetch,
  useRoute,
  computed,
  useMeta,
} from '@nuxtjs/composition-api'
import { holderApi } from '@/api/holder'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { fetchPhotos } = holderApi()
    const { meta } = useMeta()
    const route = useRoute()

    const photos = ref()

    // 取得 photos 後要做的事情
    useFetch(async () => {
      // 1. 取得 photos
      photos.value = await fetchPhotos()

      // 2. 分享 FB 時，根據圖片 id 抓取對應資訊
      const id = computed(() => route.value.query.id)
      const photo = photos.value.find((photo) => {
        return Number(id.value) === Number(photo.id)
      })

      if (id && photo) {
        meta.value.push({
          hid: 'ogDescription',
          name: 'og:description',
          content: photo.title,
        })
        meta.value.push({
          hid: 'ogImage',
          name: 'og:image',
          content: photo.url,
        })
      }
    })

    return {
      photos,
    }
  },
  head: {},
})
</script>

<style lang="scss">
.card-list {
  @apply mb-8;
  @apply flex flex-wrap justify-around;
  @apply gap-5 md:gap-10;
}
</style>
