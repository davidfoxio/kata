<template>
  <div class="slice feature-5 w-r10/12 mx-r1/12">
    <h2 v-if="title" class="mb-large fade-up heading-2" v-html="title" />
    <ul
      v-if="features"
      class="flex flex-wrap -mx-medium"
      :class="'length-' + features.length"
    >
      <li
        v-for="(item, index) in features"
        :key="item.title ? item.title : index"
        class="mb-large fade-up px-medium item"
        :class="width"
      >
        <KataImage
          v-if="item.icon"
          :image="item.icon"
          width="50"
          height="50"
          :max-width="400"
          :ratio="1"
          class="mb-small"
        />
        <h3 v-if="item.title" class="label-1 mb-small" v-html="item.title" />
        <p v-if="item.text" v-html="item.text" />
      </li>
    </ul>
    <KataLinks :links="links" />
  </div>
</template>

<script>
import { title, links } from '../shared'
export default {
  mixins: [title, links],
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  computed: {
    width() {
      let length = this.features.length
      if (length % 4 == 0) {
        return 'sm:w-1/2 md:w-1/4'
      } else if (length % 3 == 0 || length % 6 == 0 || length % 5 == 0) {
        return 'sm:w-1/2 md:w-1/3'
      }
      return 'sm:w-1/2'
    },
  },
}
</script>
