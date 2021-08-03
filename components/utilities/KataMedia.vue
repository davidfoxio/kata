<template>
  <div v-if="image || video" class="media-image">
    <KataImage
      v-if="image"
      :image="image"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
      class="h-full w-full object-cover"
    />
    <KataVideo
      v-else-if="video"
      :video="video"
      class="h-full w-full object-cover"
      loop
    ></KataVideo>
  </div>
  <div v-else-if="slides && slides.length" class="media-slider">
    <KataCssSlider
      :images="slides"
      class="w-full h-full"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
    />
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Array,
      default: () => [],
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
  computed: {
    image() {
      if (
        this.media &&
        this.media.length === 1 &&
        this.media[0]._type == 'image'
      ) {
        return this.media[0]
      } else {
        return null
      }
    },
    video() {
      if (
        this.media &&
        this.media.length === 1 &&
        this.media[0]._type == 'video'
      ) {
        return this.media[0]
      } else {
        return null
      }
    },
    slides() {
      let slides = []
      // only return images for now
      if (this.media && this.media.length > 1) {
        slides = this.media.filter((item) => item._type == 'image')
      }

      return slides
    },
  },
}
</script>

<style lang="scss">
.media-slider {
  .slick-list,
  .slick-slide > div {
    width: 100%;
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }
}
</style>
