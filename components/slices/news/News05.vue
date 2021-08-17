<template>
  <div class="news-5 slice w-r10/12 mx-r1/12">
    <h2 v-if="title" v-kata-html="title" class="mb-large text-center" />
    <component
      :is="link(item._id) ? 'n-link' : 'div'"
      v-for="(item, i) in items"
      :key="item._ref"
      :to="item._id ? link(item._id) : ''"
      class="
        item
        md:flex
        md:items-center
        mb-slice
        md:mb-slice-half
        md:space-x-medium
        block
      "
      :class="{
        'md:flex-row-reverse md:space-x-reverse': i % 2,
      }"
    >
      <div class="md:w-7/12 lg:w-5/12 text md:mb-0 mb-medium">
        <slot name="superHeader" :item="item">
          <h3
            v-if="item.superHeader"
            class="label-2 mb-medium"
            v-kata-html="item.superHeader"
          />
        </slot>
        <h2 v-if="item.title" class="heading-3" v-kata-html="item.title" />
        <p v-if="item.text" class="para-2 mt-medium" v-kata-html="item.text" />
      </div>
      <div class="md:w-5/12 lg:w-7/12 image md:mb-0 mb-medium">
        <KataImage :image="item.image" class="h-full w-full object-cover" />
      </div>
    </component>
  </div>
</template>

<script>
import {title} from '../shared'
export default {
  mixins: [title],
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  methods: {
    link(id) {
      const link = this.$store.getters['references/getLinkFromReference'](id)
      return link ? link.path : ''
    },
  },
}
</script>
