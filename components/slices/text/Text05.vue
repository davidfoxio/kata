<template>
  <div class="slice text-5 flex flex-col sm:flex-row relative justify-start">
    <div
      class="sm:w-r6/12 sm:ml-r1/12 sm:mr-large order-2 sm:order-1 sm:py-slice"
    >
      <h2 v-if="title" class="mb-large heading-2 fade-up" v-html="title" />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
    <div class="sm:w-r5/12 order-1 sm:order-2 mb-large sm:mb-0 sm:relative">
      <KataImage
        v-if="image"
        :image="image"
        :ratio="510 / 714"
        :max-width="1000"
        class="sm:h-full sm:w-full sm:absolute sm:top-0 sm:left-0 sm:object-cover sm:bottom-0 sm:m-auto"
      />
    </div>
  </div>
</template>

<script>
import { title, textBody, image } from '../shared'
export default {
  mixins: [title, textBody, image],
}
</script>
