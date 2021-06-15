<template>
  <Text05
    v-if="hasImg"
    :id="anchor"
    v-bind="$props"
    :title="number + '. ' + title"
    :class="{ 'sm:flex-row-reverse': imgLeft }"
  />
  <Text02 v-else :id="anchor" v-bind="$props" :title="number + '. ' + title" />
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
  },
}
</script>
