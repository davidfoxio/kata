<template>
  <div class="slice text-8 mx-r1/12 w-r10/12 lg:w-r8/12 lg:mx-r2/12">
    <h2 v-if="title" class="mb-medium fade-up heading-3" v-html="title" />
    <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
  </div>
</template>

<script>
import { title, textBody } from '../shared'
export default {
  mixins: [title, textBody],
}
</script>

<style scoped lang="scss">
.text-8 {
}
</style>
