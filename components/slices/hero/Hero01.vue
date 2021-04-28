<template>
  <div
    class="hero-1 slice flex-wrap md:flex-no-wrap flex md:pt-slice-half min-h-screen"
  >
    <div
      class="md:py-slice-half md:w-r6/12 mx-r1/12 md:mr-0 md:flex md:flex-col md:justify-center order-2 md:order-1 h-4/6 md:h-full"
    >
      <h1 class="heading-1 mb-medium" v-html="title" />
      <p v-if="text" class="whitespace-pre-line" v-html="text" />
      <KataLinks :links="links" />
    </div>

    <div
      class="media-wrap mb-large md:mb-0 md:mx-large md:w-r5/12 w-full relative order-1 md:order-2"
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
import { title, text, links, media } from '../shared'

export default {
  mixins: [title, text, links, media],
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