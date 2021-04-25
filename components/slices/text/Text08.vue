<template>
  <div class="slice text-8 mx-r1/12 w-r10/12">
    <h2 v-if="title" class="mb-medium" v-html="title" />
    <SanityEmbedContent v-if="textBody" :blocks="textBody" />
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
