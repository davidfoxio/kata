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
      <li
        v-for="(item, i) in feed"
        :key="item._id || i"
        class="mb-medium relative"
      >
        <slot name="tease" :item="item"></slot>
      </li>
    </transition-group>
    <p v-else>No results found</p>
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
    tabletCols: {
      type: Number,
      default: 3,
    },
    mobileCols: {
      type: Number,
      default: 1,
    },
    feed: {
      default: null,
      type: Array,
    },
  },
  computed: {
    ulClass() {
      let classes = 'w-full grid gap-medium'
      switch (this.cols) {
        case 4:
          classes += ' lg:grid-cols-3 xl:grid-cols-4'
          break
        case 2:
          classes += ' lg:grid-cols-2'
          break
        default:
          classes += ' lg:grid-cols-3'
          break
      }
      switch (this.tabletCols) {
        case 4:
          classes += ' md:grid-cols-4'
          break
        case 3:
          classes += ' md:grid-cols-3'
          break
        case 2:
          classes += ' md:grid-cols-2'
          break
        default:
          classes += ' md:grid-cols-3'
          break
      }
      switch (this.mobileCols) {
        case 4:
          classes += ' grid-cols-4'
          break
        case 3:
          classes += ' grid-cols-3'
          break
        case 2:
          classes += ' grid-cols-2'
          break
        case 1:
          classes += ' grid-cols-1'
          break
        default:
          classes += ' grid-cols-1'
          break
      }

      return classes
    },
  },
}
</script>
