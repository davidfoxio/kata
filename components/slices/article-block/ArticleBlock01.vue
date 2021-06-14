<template>
  <section
    class="slice article-block-1"
    :class="{
      flex: imageAlignment,
      'flex-row-reverse': imageAlignment == 'left',
    }"
  >
    <div :class="{ 'w-2/3': imageAlignment }">
      <h3 v-if="title" class="mb-large heading-2 fade-up" v-html="title" />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
    <div
      class="sm:w-r5/12 order-1 sm:order-2 mb-large sm:mb-0 sm:relative image"
    >
      <KataImage :image="image" :ratio="510 / 714" :max-width="1000" class="" />
    </div>
  </section>
</template>

<script>
import { title, textBody, image } from '../shared'
export default {
  mixins: [title, textBody, image],
  props: {
    imageAlignment: {
      type: String,
      default: 'right',
    },
  },
}
</script>
