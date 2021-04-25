<template>
  <div
    class="slice text-6 flex flex-col sm:flex-row relative justify-start mx-r1/12 w-r10/12"
  >
    <div class="sm:w-r3/12 sm:mr-r1/12">
      <h2 v-if="title" class="heading-3" v-html="title" />
    </div>
    <div class="sm:w-r8/12">
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
