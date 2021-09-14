<template>
  <div
    class="
      slice
      call-to-action-2
      w-r10/12
      mx-r1/12
      md:w-r7/12
      md:mx-auto
      text-center
    "
  >
    <h2 v-if="title" class="heading-2 fade-up mb-medium" v-kata-html="title" />
    <div class="flex justify-evenly sm:px-r1/12 xl:px-r2/12" v-if="items">
      <div v-for="item in items" :key="item._key">
        <h3
          v-if="item.title"
          class="heading-2 fade-up mb-medium"
          v-kata-html="item.title"
        />
        <p
          v-if="item.text"
          class="fade-up mb-medium whitespace-pre-line"
          v-kata-html="item.text"
        />
        <KataLinks v-if="item.links" :links="item.links" class="fade-up" />
      </div>
    </div>
  </div>
</template>

<script>
import { links, title, text } from '../shared'
export default {
  mixins: [links, title, text],
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
}
</script>
