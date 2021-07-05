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
        <h1 v-if="superHeading" class="super-heading" v-html="superHeading" />
        <h1 v-else-if="title" class="heading-1" v-html="title" />
        <h2 v-if="superHeading && title" class="heading-1" v-html="title" />
      </div>
      <div class="sm:w-1/2">
        <p v-if="text" class="mb-medium whitespace-pre-line" v-html="text" />
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
