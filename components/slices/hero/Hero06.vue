<template>
  <div class="hero-6 slice">
    <KataMedia
      :media="media"
      :ratio="16 / 9"
      :max-width="2500"
      class="px-medium"
    />

    <div class="mt-slice-half mx-r1/12 w-r10/12 sm:flex">
      <div class="sm:w-1/2 sm:pr-small">
        <h1 v-if="title" class="heading-1" v-html="title" />
      </div>
      <div class="sm:w-1/2 sm:pl-small">
        <p v-if="text" class="mb-medium whitespace-pre-line" v-html="text" />
        <KataLinks v-if="links" :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import { title, text, links, media } from '../shared'
export default {
  mixins: [title, text, links, media],
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
