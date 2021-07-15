<template>
  <div class="slice feature-5 w-r10/12 mx-r1/12">
    <div class="mb-large" v-if="title || text">
      <h2 class="fade-up heading-2" v-html="title" />
      <p v-if="text" v-html="text" class="mt-medium fade-up lg:px-r1/12" />
    </div>
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
        <KataSimpleImage
          v-if="item.icon"
          :image="item.icon"
          width="50"
          height="50"
          class="mb-small"
        />
        <p
          v-else-if="autoNumber"
          class="heading-2"
          v-html="index + 1 < 10 ? '0' + (index + 1) : index + 1"
        />
        <h3 v-if="item.title" class="label-1 mb-small" v-html="item.title" />
        <p v-if="item.text" v-html="item.text" />
      </li>
    </ul>
    <KataLinks :links="links" v-if="links" />
  </div>
</template>

<script>
import { title, text, links } from '../shared'
export default {
  mixins: [title, text, links],
  props: {
    features: {
      type: Array,
      default: null,
    },
    autoNumber: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    width() {
      let length = this.features.length
      if (length % 4 == 0) {
        return 'w-full sm:w-1/2 md:w-1/4'
      } else if (length % 3 == 0 || length % 6 == 0 || length % 5 == 0) {
        return 'w-full sm:w-1/2 md:w-1/3'
      }
      return 'w-full sm:w-1/2'
    },
  },
}
</script>
