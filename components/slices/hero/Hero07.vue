<template>
  <div
    class="
      hero-7
      slice
      flex-wrap
      md:flex-no-wrap
      md:justify-between
      flex
      min-h-screen
    "
  >
    <div class="media-wrap mb-large md:mb-0 md:w-r5/12 w-full relative">
      <KataMedia
        :media="media"
        :ratio="1"
        :max-width="2000"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="
        body
        md:py-slice-half
        md:w-r7/12
        px-r1/12
        md:pr-0
        md:flex md:flex-col
        md:justify-center
      "
    >
      <h1
        v-if="superHeading"
        v-kata-html="superHeading"
        class="super-heading"
      />
      <h1 v-else-if="title" v-kata-html="title" class="heading-1" />
      <h2
        v-if="title && superHeading"
        v-kata-html="title"
        class="heading-1 mt-medium"
      />
      <p v-if="text" v-kata-html="text" class="whitespace-pre-line mt-medium" />
      <KataLinks v-if="links" :links="links" class="links mt-medium" />
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
.hero-7 .media-dots {
  bottom: var(--spacing-small);
  left: -25px;
  width: auto;

  li {
    display: block;

    button {
      &::before {
        color: $primary !important;
        font-size: 10px;
      }
    }
  }

  @include md-down {
    left: 0;
  }
}
@include md-down {
  .hero-7 .media-wrap {
    height: 35vh;
  }
}
