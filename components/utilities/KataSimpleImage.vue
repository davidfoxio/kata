<template>
  <img :alt="$imgMeta(image.asset._ref).alt" :src="src" />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    loader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    src() {
      return this.$imgUrl(this.image).url()
    },
  },
  methods: {
    imgMeta(ref) {
      return this.$store.getters['references/getImageMetadata'](ref)
    },
  },
}
</script>
