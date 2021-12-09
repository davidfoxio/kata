<template>
  <div class="slice call-to-action-2 w-r10/12 mx-r1/12 text-center">
    <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up mb-medium" />
    <div
      v-if="items"
      class="md:flex w-full justify-evenly sm:px-r1/12 xl:px-r2/12"
    >
      <div v-for="item in items" :key="item._key" class="md:px-medium">
        <h3
          v-if="item.title"
          v-kata-html="item.title"
          class="heading-3 fade-up mb-medium"
        />
        <p
          v-if="item.text"
          v-kata-html="item.text"
          class="fade-up mb-medium whitespace-pre-line"
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
