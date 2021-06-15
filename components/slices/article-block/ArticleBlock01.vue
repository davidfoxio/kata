<template>
  <section
    :id="anchor"
    class="slice article-block-1 mb-slice"
    :class="{
      'md:flex': hasImg,
      'w-r10/12 mx-r1/12': !hasImg,
      'md:flex-row-reverse': imgLeft,
    }"
  >
    <div
      :class="{
        'md:w-2/3': hasImg,
        'mx-r1/12 md:mr-large': (hasImg && !imgLeft) || (hasImg && imgRight),
        'mx-r1/12 md:ml-large': hasImg && imgLeft,
      }"
    >
      <h3 v-if="title" class="mb-medium heading-2 fade-up">
        <span v-if="showNumbers && number">{{ number }}.</span>
        {{ title }}
      </h3>
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
    <div class="md:w-1/3" v-if="image">
      <KataImage :image="image" :ratio="3 / 4" :max-width="1000" class="" />
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
