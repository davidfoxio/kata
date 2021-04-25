<template>
  <img
    v-lazy-load
    :alt="asset ? $imgMeta(asset._ref).alt : ''"
    :title="asset ? $imgMeta(asset._ref).title : ''"
    :data-srcset="srcSet"
    :sizes="sizes"
  />
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    ratio: {
      type: Number,
      default: null,
    },
    sizes: {
      type: String,
      default: '100vw',
    },
  },
  computed: {
    srcSet() {
      let srcSet = ''
      function increment(maxWidth) {
        return Math.floor(maxWidth / 5)
      }
      if (this.ratio) {
        for (
          let width = this.maxWidth;
          width > 200;
          width -= increment(this.maxWidth)
        ) {
          srcSet += `${this.$imgUrl({ asset: this.asset })
            .width(width)
            .height(this.h(width))
            .url()} ${width}w,`
        }
      } else {
        for (
          let width = this.maxWidth;
          width > 200;
          width -= increment(this.maxWidth)
        ) {
          srcSet += `${this.$imgUrl({ asset: this.asset })
            .width(width)
            .url()} ${width}w,`
        }
      }
      return srcSet
    },
  },
  methods: {
    h(val) {
      if (this.ratio) return Math.floor(val / this.ratio)
    },
    imgMeta(ref) {
      return this.$store.getters['references/getImageMetadata'](ref)
    },
  },
}
</script>
