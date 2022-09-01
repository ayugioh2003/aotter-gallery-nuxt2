<template>
  <div class="card">
    <div class="card-image relative">
      <button class="card-button">
        <font-awesome-icon icon="fa-solid fa-link" style="color: #566675" />
      </button>
      <img :src="thumbnailUrl" alt="" />
    </div>
    <div class="card-body">{{ title }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

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
  setup() {
    const message = ref('this is card')

    return {
      message,
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
