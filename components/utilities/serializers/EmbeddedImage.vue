<template>
  <div v-if="asset && theImage && src()" class="image">
    <nuxt-img
      :src="src()"
      :class="{ loaded: loaded }"
      :width="maxWidth"
      class="embedded-image w-full h-auto"
      :alt="asset ? $imgMeta(asset._ref).alt : ''"
      :title="asset ? $imgMeta(asset._ref).title : ''"
      loading="lazy"
      :sizes="sizes"
      :format="format"
      @onLoad="imgLoaded"
    />
    <p
      v-if="caption"
      class="image-caption btn-small mb-medium -mt-small"
      v-html="caption"
    />
  </div>
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
      default: 1500,
    },
    ratio: {
      type: Number,
      default: null,
    },
    sizes: {
      type: String,
      default: 'md:95vw xl:75vw',
    },
    caption: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    loaded: false,
    format: 'webp',
  }),
  computed: {
    theImage() {
      if (this.asset) {
        return { asset: this.asset }
      } else {
        return {}
      }
    },
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
          srcSet += `${this.$imgUrl(this.theImage)
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
          srcSet += `${this.$imgUrl(this.theImage)
            .width(width)
            .url()} ${width}w,`
        }
      }
      return srcSet
    },
  },
  methods: {
    src() {
      // let calcWidth = Math.round(this.maxWidth / 4)
      let url = this.$imgUrl(this.theImage)
        .quality(80)
        .width(this.maxWidth)
        .height(this.height)
        .url()
      if (url && url.includes('.svg')) {
        this.format = ''
      }
      return url
    },
    h(val) {
      if (this.ratio) return Math.floor(val / this.ratio)
    },
    imgMeta(ref) {
      return this.$store.getters['references/getImageMetadata'](ref)
    },
  },
}
</script>
