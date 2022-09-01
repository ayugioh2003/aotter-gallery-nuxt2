<template>
  <div class="card">
    <div class="card-image relative">
      <button class="card-button" @click="copyUrl()">
        <span v-if="copied" class="text-white">已複製網址</span>
        <font-awesome-icon
          v-else
          icon="fa-solid fa-link"
          style="color: #566675"
        />
      </button>
      <img :src="thumbnailUrl" alt="" />
    </div>
    <div class="card-body">{{ title }}</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import { useClipboard } from '@vueuse/core'

export default defineComponent({
  name: 'AotterCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const source = ref('')
    const { text, copy, copied, isSupported } = useClipboard({ source })

    onMounted(() => {
      source.value = window.location.origin + `?id=${props.id}`
    })

    const copyUrl = () => {
      copy().then((test) => console.log('test'))
    }

    return {
      text,
      copy,
      copied,
      isSupported,
      copyUrl,
    }
  },
  head: {},
})
</script>

<style lang="scss">
.card {
  width: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe6ed;

  &-button {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px;
    background-color: #c3cfd9;
    border-radius: 50%;
    transition: all 300ms;

    &:hover {
      background-color: #7f878d;
    }
  }
  &-body {
    background-color: white;
    margin: 0 2px 2px 2px;
    padding: 8px 4px;
  }
}
</style>
