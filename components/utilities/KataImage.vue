<template>
  <img
    :srcSet="srcSet"
    :src="src"
    :sizes="sizes"
    :class="{ loaded: loaded }"
    :width="maxWidth"
    :height="maxWidth * ratio"
    class="kata-image"
    @load="loaded = true"
  />
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
    maxWidth: {
      type: Number,
      default: 800,
    },
    ratio: {
      type: Number,
      default: function () {
        return 6 / 4
      },
    },
    sizes: {
      type: String,
      default: '100vw',
    },
  },
  data() {
    return {
      loaded: false,
    }
  },
  computed: {
    src() {
      // let calcWidth = this.maxWidth
      // for (
      //   let width = this.maxWidth;
      //   width > 200;
      //   width -= this.increment(this.maxWidth)
      // ) {
      //   calcWidth = width
      // }

      let calcWidth = this.maxWidth / 4

      return this.$imgUrl(this.image)
        .width(calcWidth)
        .height(this.h(calcWidth))
        .quality(80)
        .url()
    },
    srcSet() {
      let srcSet = ''

      for (
        let width = this.maxWidth;
        width > 200;
        width -= this.increment(this.maxWidth)
      ) {
        srcSet += `${this.$imgUrl(this.image)
          .width(width)
          .height(this.h(width))
          .quality(80)
          .url()} ${width}w,`
      }
      return srcSet.slice(0, -1) //remove the trailing comma
    },
  },
  methods: {
    increment(maxWidth) {
      const fiths = Math.floor(maxWidth / 5)
      let increment = fiths > 200 ? 200 : fiths
      return increment
    },
    h(val) {
      return Math.floor(val / this.ratio)
    },
    imgMeta(ref) {
      return this.$store.getters['references/getImageMetadata'](ref)
    },
    // onLoad() {
    // },
  },
}
</script>

<style scoped lang="scss">
img.kata-image {
  transition: 1s ease;
  opacity: 0;
  &.loaded,
  &.isLoaded {
    opacity: 1;
  }
}
</style>
