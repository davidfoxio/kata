<template>
  <div class="team-4 slice w-r10/12 mx-r1/12">
    <div class="heading mb-large">
      <h2 v-if="title" class="fade-up" v-html="title" />
      <p v-if="text" class="mt-medium fade-up" v-html="text" />
    </div>
    <div class="team-list">
      <ul :class="ulClass">
        <li v-for="item in thumbnails" :key="item._id" class="fade-up">
          <slot name="tease" :item="item">
            <KataImage
              :image="item.image"
              class="mb-small"
              :ratio="255 / 340"
            />
            <h3
              v-if="item.title"
              class="mb-small label-1"
              v-html="item.title"
            />
            <p v-if="item.text" class="para-2" v-html="item.text" />
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    cols: {
      type: Number,
      default: 4,
    },
    thumbnails: {
      default: null,
      type: Array,
    },
  },
  computed: {
    ulClass() {
      switch (this.cols) {
        case 4:
          return 'w-full grid gap-medium grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        case 3:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        case 2:
          return 'w-full grid gap-medium grid-cols-1 lg:grid-cols-2'
        default:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    },
  },
}
</script>
