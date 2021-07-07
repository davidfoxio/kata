<template>
  <div class="slice hero-10">
    <div class="w-r10/12 lg:w-r9/12 xl:w-r7/12 px-r1/12 relative z-1">
      <div
        class="
          flex-col flex
          items-start
          justify-end
          w-full
          h-full
          min-h-screen
          py-slice-half
        "
      >
        <div v-if="superHeading">
          <h1 class="label-1 text-white mb-medium" v-html="superHeading" />
          <h2 v-if="title" class="heading-1 text-white" v-html="title" />
        </div>
        <h1 v-else class="heading-1 text-white" v-html="title" />
        <p
          v-if="text"
          class="text-white mt-medium whitespace-pre-line"
          v-html="text"
        />
        <KataLinks v-if="links" :links="links" class="mt-medium w-full" />
      </div>
    </div>
    <div
      class="bg-black w-full h-full overflow-hidden image absolute top-0 left-0"
    >
      <KataMedia
        :media="media"
        :ratio="16 / 9"
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
