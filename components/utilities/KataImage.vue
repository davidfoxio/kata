<template>
  <img
    v-if="imageIsSet"
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
const defaultImage = {
  _type: 'image',
  asset: {
    _ref: process.env.placeholderId || '',
    _type: 'reference',
  },
}
export default {
  props: {
    image: {
      type: Object,
      // required: true,
      default: () => {
        if (process.env.NODE_ENV === 'production') {
          return {}
        } else {
          return defaultImage
        }
      },
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
    imageIsSet() {
      return this.image.asset?._ref
    },
    theImage() {
      // we often get an empty object when no image is defined
      if (this.imageIsSet) {
        return this.image
      } else if (defaultImage.asset._ref) {
        return defaultImage
      } else {
        return {}
      }
    },
    src() {
      let calcWidth = this.maxWidth / 4

      return this.$imgUrl(this.theImage)
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
        srcSet += `${this.$imgUrl(this.theImage)
          .width(width)
          .height(this.h(width))
          .quality(80)
          .url()} ${width}w,`
      }

      srcSet = srcSet.slice(0, -1) //remove the trailing comma

      return srcSet
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
