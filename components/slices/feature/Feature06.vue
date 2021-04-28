<template>
  <div
    class="slice feature-6 w-r10/12 mx-r1/12 sm:flex text-center sm:text-left"
  >
    <div class="w-full sm:w-3/5 mb-large sm:mb-0 sm:pr-large">
      <h2 v-if="title" class="mb-medium fade-up" v-html="title" />
      <KataLinks v-if="links" :links="links" class="fade-up" />
    </div>
    <div class="sm:w-2/5">
      <ul
        v-if="features"
        class="flex flex-wrap -mx-medium"
        :class="'length-' + features.length"
      >
        <li
          v-for="(item, index) in features"
          :key="item.title ? item.title : index"
          class="mb-large fade-up px-medium item sm:flex sm:items-start"
        >
          <KataImage
            v-if="item.icon"
            :image="item.icon"
            width="50"
            height="50"
            :max-width="400"
            :ratio="1"
            class="mb-small mx-auto"
          />
          <div class="sm:pl-small">
            <h3 v-if="item.title" v-html="item.title" />
            <p v-if="item.text" v-html="item.text" />
          </div>
        </li>
      </ul>
    </div>
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
}
</script>
