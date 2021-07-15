<template>
  <div class="slice feature-7 w-r10/12 mx-r1/12 text-center">
    <div class="mb-large" v-if="title || text">
      <h2 class="fade-up heading-2" v-html="title" />
      <p v-if="text" v-html="text" class="mt-medium fade-up lg:px-r1/12" />
    </div>
    <ul
      v-if="features"
      class="flex flex-wrap -mx-medium -mb-large"
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
          class="mb-small mx-auto object-contain"
        />
        <h3 v-if="item.title" class="label-1 mb-small" v-html="item.title" />
        <p v-if="item.text" class="para-2" v-html="item.text" />
      </li>
    </ul>
    <KataLinks v-if="links" :links="links" class="mt-large fade-up" />
  </div>
</template>

<script>
import { title, text, links } from '../shared'
export default {
  mixins: [title, text, links],
  props: {
    features: {
      type: Array,
      required: true,
    },
    max: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    width() {
      let length = this.features.length
      if (length % 4 == 0 && this.max >= 4) {
        return 'sm:w-1/2 md:w-1/4'
      } else if (
        (length % 3 == 0 || length % 6 == 0 || length % 5 == 0) &&
        this.max >= 3
      ) {
        return 'sm:w-1/2 md:w-1/3'
      }
      return 'sm:w-1/2'
    },
  },
}
</script>

<style lang="scss">
.feature-7 .item img {
  width: 60px;
  height: 60px;
}
</style>
