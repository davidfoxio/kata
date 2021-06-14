<template>
  <section
    :id="anchor"
    class="slice article-block-1 mb-slice"
    :class="{
      'md:flex': hasImg,
      'md:flex-row-reverse': imgLeft,
    }"
  >
    <div
      :class="{
        'md:w-2/3': hasImg,
        'md:mr-large': imgRight,
        'md:ml-large': imgLeft,
      }"
    >
      <span v-if="showNumbers" class="heading-2">{{ number }}.</span>
      <h3
        v-if="title"
        class="mb-large heading-2 fade-up inline"
        v-html="title"
      />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
    <div class="md:w-r1/3">
      <KataImage :image="image" :ratio="510 / 714" :max-width="1000" class="" />
    </div>
  </section>
</template>

<script>
import camelCase from 'lodash.camelcase'
import { title, textBody, image } from '../shared'
export default {
  mixins: [title, textBody, image],
  props: {
    imageAlignment: {
      type: String,
      default: 'right',
    },
    number: {
      type: Number,
      default: 0,
    },
    showNumbers: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    anchor() {
      return camelCase(this.title)
    },
    hasImg() {
      return this.image && Object.keys(this.image).length
    },
    imgLeft() {
      return this.imageAlignment == 'left'
    },
    imgRight() {
      return this.imageAlignment == 'right'
    },
  },
}
</script>
