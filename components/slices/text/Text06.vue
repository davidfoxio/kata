<template>
  <div
    class="slice text-6 flex flex-col sm:flex-row relative justify-start mx-r1/12 w-r10/12"
  >
    <div class="sm:w-r3/12 sm:mr-r1/12 title">
      <h2 v-if="title" class="heading-3 fade-up" v-kata-html="title" />
    </div>
    <div class="sm:w-r8/12 body">
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
