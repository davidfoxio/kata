<template>
  <div class="slice hero-5 stack-children">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :max-width="2500"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r10/12 mx-r1/12 md:w-r6/12 md:mx-r3/12 h-screen flex flex-col justify-center text-center z-1 text relative"
    >
      <h1
        v-if="superHeading"
        v-kata-html="superHeading"
        class="super-heading text-white mb-medium"
      />
      <h1
        v-else-if="title"
        v-kata-html="title"
        class="heading-1 text-white mb-medium"
      />
      <h2
        v-if="title && superHeading"
        v-kata-html="title"
        class="heading-1 text-white mb-medium"
      />
      <p
        v-if="text"
        v-kata-html="text"
        class="text-center text-white mb-medium whitespace-pre-line"
      />
      <KataLinks v-if="links" :links="links" class="text-center" />
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

<style lang="scss" scoped>
.hero-5 {
  position: relative;
  background: black;

  img {
    opacity: 0.75 !important;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    left: 1px;
    top: 0px;
    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
