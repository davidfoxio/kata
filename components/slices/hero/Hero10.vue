<template>
  <div class="slice hero-10">
    <div
      class="w-r10/12 lg:w-r9/12 xl:w-r7/12 px-r1/12 relative z-1 content-wrap"
    >
      <div
        class="flex-col flex items-start justify-end w-full h-full min-h-screen py-slice-half content"
      >
        <div v-if="superHeading">
          <h1 v-kata-html="superHeading" class="label-1 text-white mb-medium" />
          <h2 v-if="title" v-kata-html="title" class="heading-1 text-white" />
        </div>
        <h1 v-else v-kata-html="title" class="heading-1 text-white" />
        <p
          v-if="text"
          v-kata-html="text"
          class="text-white mt-medium whitespace-pre-line"
        />
        <KataLinks v-if="links" :links="links" class="mt-medium w-full" />
      </div>
    </div>
    <div
      class="bg-black w-full h-full overflow-hidden image absolute top-0 left-0"
    >
      <KataMedia
        :media="media"
        :ratio="ratio"
        :max-width="3000"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import { title, superHeading, text, links, media } from '../shared'

export default {
  mixins: [title, superHeading, text, links, media],
  data() {
    return {
      ratio: 16 / 9,
    }
  },
  mounted() {
    if (
      process.client &&
      window.matchMedia('(orientation: portrait)').matches
    ) {
      this.ratio = 3 / 4
    }
  },
}
</script>

<style lang="scss">
.hero-10 {
  position: relative;
  background: black;

  img {
    opacity: 0.75 !important;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
