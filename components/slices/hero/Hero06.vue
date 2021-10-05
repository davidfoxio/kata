<template>
  <div class="hero-6 slice">
    <KataMedia
      :media="media"
      :ratio="16 / 9"
      :max-width="2500"
      class="hero-animation border-animate"
    />

    <div class="mt-large mx-r1/12 w-r10/12 sm:flex sm:justify-between">
      <div class="sm:w-1/2 sm:pr-large">
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
      <div class="sm:w-1/2">
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
