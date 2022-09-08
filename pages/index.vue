<template>
  <div class="index">
    <div class="mx-auto" style="max-width: 1000px; padding: 0, 32px">
      <h1 class="text-2xl font-bold text-center py-24">Aotter Gallery</h1>

      <client-only>
        <Button
          v-if="startIndex >= 11"
          class="mb-12"
          @click="startIndex -= size"
        >
          載入更多
        </Button>
      </client-only>

      <section v-if="photos && photos.length > 0">
        <transition-group name="list" class="card-list">
          <Card
            v-for="(item, index) in photos.filter(
              (photo, i) => startIndex <= photo.id && photo.id <= endIndex
            )"
            :id="item.id"
            :key="index"
            :title="item.title"
            :url="item.url"
            :thumbnail-url="item.thumbnailUrl"
            :is-current-id="item.id === Number(id)"
          />
        </transition-group>
      </section>

      <client-only>
        <Button
          v-if="endIndex < photos.length"
          class="my-12"
          @click="addPhotoAfter"
        >
          載入更多
        </Button>
      </client-only>
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
    const id = computed(() => route.value.query.id)

    const photos = ref([])
    const startIndex = ref(1)
    const endIndex = ref(0)
    const size = 60 // 每次載入數量

    // 取得 photos 後要做的事情
    useFetch(async () => {
      // 1. 取得 photos
      photos.value = await fetchPhotos()

      // 2. 分享 FB 時，根據圖片 id 抓取對應資訊
      const photo = photos.value.find((photo) => {
        return Number(id.value) === Number(photo.id)
      })

      if (id.value && photo) {
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

      // 3. 記錄所需 index 資訊
      if (id.value && Number(id.value) > photos.value.length) {
        startIndex.value = 1
        endIndex.value = size
      } else if (id.value) {
        const initSize = 10
        const currentIndex = Number(id.value)
        const currentPage = Math.ceil(currentIndex / initSize)

        startIndex.value = (currentPage - 1) * initSize + 1
        endIndex.value = currentPage * initSize
      } else {
        startIndex.value = 1
        endIndex.value = size
      }
    })

    // click handler
    const addPhotoAfter = () => {
      endIndex.value += size
    }
    const addPhotoBefore = () => {
      startIndex.value += size
    }

    return {
      photos,
      startIndex,
      endIndex,
      id,
      size,
      addPhotoAfter,
      addPhotoBefore,
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
