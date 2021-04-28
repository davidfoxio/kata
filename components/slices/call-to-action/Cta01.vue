<template>
  <div class="slice call-to-action-1 w-r10/12 mx-r1/12 text-center">
    <h2 v-if="title" class="heading-2 fade-up mb-medium" v-html="title" />
    <p
      v-if="text"
      class="fade-up mb-medium sm:px-r1/12 md:px-r2/12"
      v-html="text"
    />
    <KataLinks v-if="links" :links="links" class="fade-up" />
  </div>
</template>

<script>
import { links, title, text } from '../shared'
export default {
  mixins: [links, title, text],
}
</script>
