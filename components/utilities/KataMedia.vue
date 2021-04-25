<template>
  <KataImage
    v-if="media[0]"
    :image="media[0]"
    :sizes="sizes"
    :ratio="ratio"
    :max-width="maxWidth"
  />
  <div v-else-if="media.video">Video!</div>
</template>

<script>
export default {
  props: {
    media: {
      type: Array,
      required: true,
    },
    ratio: {
      type: Number,
      default: 6 / 4,
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    sizes: {
      type: String,
      default: '100vw',
    },
  },
}
</script>
