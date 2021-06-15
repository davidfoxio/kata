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
      class="mx-r1/12"
      :class="{
        'md:w-r7/12': hasImg,
        'md:mr-large': imgRight,
        'md:ml-large': imgLeft,
      }"
    >
      <div class="mb-medium">
        <span v-if="showNumbers" class="heading-2">{{ number }}.</span>
        <h3 v-if="title" class="heading-2 fade-up inline" v-html="title" />
      </div>

      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="fade-up mb-medium"
      />
    </div>
    <div class="md:w-r4/12">
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
