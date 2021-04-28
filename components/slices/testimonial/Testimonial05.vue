<template>
  <div
    class="slice testimonials-5 w-r10/12 mx-r1/12 lg:w-r8/12 lg:mx-r2/12 text-center"
  >
    <p v-if="quote" class="heading-3 mb-large fade-up" v-html="quote" />
    <p v-if="cite" class="label-1 fade-up" v-html="cite" />
    <KataLinks v-if="links" v-bind="links" class="mt-large fade-up" />
  </div>
</template>

<script>
import { links } from '../shared'
export default {
  mixins: [links],
  props: {
    quote: {
      type: String,
      required: true,
    },
    cite: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
