<template>
  <div class="hero-6 slice">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :max-width="2500"
      class="hero-animation border-animate"
    />

    <div class="mt-large mx-r1/12 w-r10/12 md:flex md:justify-between text">
      <div class="md:w-1/2 md:pr-large">
        <h1
          v-if="superHeading"
          v-kata-html="superHeading"
          class="super-heading"
        />
        <h1 v-else-if="title" v-kata-html="title" class="heading-1" />
        <h2
          v-if="superHeading && title"
          v-kata-html="title"
          class="heading-1 mt-small"
        />
      </div>
      <div class="md:w-1/2">
        <p
          v-if="text"
          v-kata-html="text"
          class="mb-medium whitespace-pre-line"
        />
        <KataLinks v-if="links" :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title, text, links, media } from '../shared'
export default {
  mixins: [superHeading, title, text, links, media],
  props: {
    ratio: {
      type: Number,
      default: 16 / 9,
    },
  },
}
</script>

<style lang="scss">
.hero-6 {
  img {
    object-fit: cover;
    max-height: 60vh;
    width: 100%;
  }
}
</style>
