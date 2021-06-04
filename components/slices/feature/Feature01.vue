<template>
  <div
    class="slice feature-1 w-r10/12 mx-r1/12 flex flex-col"
    :class="{ 'md:flex-row-reverse': reversed, 'md:flex-row': !reversed }"
  >
    <div
      class="md:w-1/2 order-2 md:order-1 py-medium text"
      :class="{ 'md:mr-large': !reversed, 'md:ml-large': reversed }"
    >
      <div v-if="superHeading">
        <h2 class="label-1 mb-medium" v-html="superHeading" />
        <h3 v-if="title" class="heading-2 mb-medium" v-html="title" />
      </div>
      <h2 v-else class="heading-2 mb-medium" v-html="title" />
      <p v-if="text" class="mb-large fade-up" v-html="text" />
      <KataLinks :links="links" class="fade-up" />
    </div>
    <div class="md:w-1/2 order-1 md:order-2 mb-large md:mb-0 image">
      <KataImage
        :image="image"
        :ratio="685 / 514"
        :max-width="1500"
        class="h-full w-full object-cover"
        sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
      />
    </div>
  </div>
</template>

<script>
import { superHeading, title, text, links, image } from '../shared'

export default {
  mixins: [superHeading, title, text, links, image],
  props: {
    reversed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
