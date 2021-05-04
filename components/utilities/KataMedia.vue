<template>
  <div v-if="media && media[0] && media.length == 1" class="media-image bg-black">
    <KataImage
      :image="media[0]"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
      class="h-full w-full object-cover"
    />
  </div>
  <div v-else-if="media && media.length > 1" class="media-slider">
    <VueSlickCarousel v-bind="settings" class="h-full w-full">
      <div v-for="item in media" :key="item._ref" class="h-full w-full">
        <KataImage
          :image="item"
          :sizes="sizes"
          :ratio="ratio"
          :max-width="maxWidth"
          class="h-full w-full object-cover"
          data-not-lazy
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
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
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots media-dots',
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        fade: true,
        lazyload: 'ondemand',
      },
    }
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
