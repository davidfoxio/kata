<template>
  <div class="slice text-1 md:flex mx-r1/12 w-r10/12">
    <div class="mb-large md:mb-0 md:w-1/2 md:pr-r1/12 title">
      <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up" />
    </div>
    <div class="md:w-1/2 body">
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
  </div>
</template>

<script>
import { title, textBody } from '../shared'
export default {
  mixins: [title, textBody],
}
</script>
