<template>
  <div
    class="hero-1 slice flex-wrap md:flex-nowrap md:justify-between flex min-h-screen"
  >
    <div
      class="md:py-slice-half md:w-1/2 px-r1/12 md:pr-large md:flex md:flex-col md:justify-center order-2 md:order-1 content"
    >
      <h1
        v-if="superHeading"
        v-kata-html="superHeading"
        class="super-heading mb-medium"
      />
      <h1 v-else-if="title" v-kata-html="title" class="heading-1 mb-medium" />
      <h2
        v-if="title && superHeading"
        v-kata-html="title"
        class="heading-1 mb-medium"
      />
      <p v-if="text" v-kata-html="text" class="whitespace-pre-line" />
      <KataLinks v-if="links" :links="links" class="mt-medium" />
    </div>

    <div
      class="media-wrap mb-large md:mb-0 md:w-1/2 w-full relative order-1 md:order-2"
    >
      <KataMedia
        :media="media"
        :ratio="1"
        :max-width="2000"
        class="h-full w-full object-cover"
      />
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
.hero-1 .media-dots {
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
  .hero-1 .media-wrap {
    height: 35vh;
  }
}
</style>
