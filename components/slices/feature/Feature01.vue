<template>
  <div
    class="slice feature-1 w-r10/12 mx-r1/12 flex flex-col"
    :class="{
      'md:flex-row-reverse reversed': reversed,
      'md:flex-row ': !reversed,
    }"
  >
    <div
      class="md:w-1/2 order-2 md:order-1 py-medium text"
      :class="{ 'md:mr-large': !reversed, 'md:ml-large': reversed }"
    >
      <div v-if="superHeading">
        <h2 v-kata-html="superHeading" class="label-1 mb-medium fade-up" />
        <h3
          v-if="title"
          v-kata-html="title"
          class="heading-2 mb-medium fade-up"
        />
      </div>
      <h2 v-else v-kata-html="title" class="heading-2 mb-medium fade-up" />
      <p v-if="text" v-kata-html="text" class="fade-up whitespace-pre-line" />
      <KataLinks v-if="links" :links="links" class="fade-up mt-large" />
    </div>
    <div class="md:w-1/2 order-1 md:order-2 mb-large md:mb-0 image">
      <KataImage
        v-if="image"
        :image="image"
        :ratio="ratio"
        :max-width="1500"
        class="h-full w-full object-cover"
        sizes="sm:90vw md:50vw"
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
    ratio: {
      type: Number,
      default: 685 / 514,
    },
  },
}
</script>
