<template>
  <div class="portfolio-8 slice w-r10/12 mx-r1/12">
    <h2 v-if="title" class="mb-medium" v-html="title" />
    <p v-if="text" class="mb-medium" v-html="text" />
    <transition-group
      v-if="feed"
      :class="ulClass"
      tag="ul"
      name="fade"
      mode="out-in"
    >
      <li v-for="(item, i) in feed" :key="item._id || i" class="mb-medium relative">
        <slot name="tease" :item="item"></slot>
      </li>
    </transition-group>
    <p v-else>No results found, try changing your filters</p>
  </div>
</template>

<script>
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    cols: {
      type: Number,
      default: 3,
    },
    feed: {
      default: null,
      type: Array,
    },
  },
  computed: {
    ulClass() {
      switch (this.cols) {
        case 4:
          return 'w-full grid gap-medium grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
        case 2:
          return 'w-full grid gap-medium grid-cols-1 lg:grid-cols-2'
        default:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    },
  },
}
</script>
