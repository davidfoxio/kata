<template>
  <div class="slice text-2 px-r3/12">
    <h2 v-if="title" class="label-1 fade-up" v-html="title" />
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
.text-2 {
}
</style>
