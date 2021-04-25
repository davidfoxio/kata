<template>
  <div class="slice text-1 md:flex mx-r1/12 w-r10/12">
    <div class="mb-large md:mb-0 md:w-r4/12 md:pr-r1/12">
      <h2 v-if="title" class="heading-3" v-html="title" />
    </div>
    <div class="md:w-r6/12 columns-2">
      <SanityEmbedContent v-if="textBody" :blocks="textBody" />
    </div>
  </div>
</template>

<script>
import { title, textBody } from '../shared'
export default {
  mixins: [title, textBody],
}
</script>
