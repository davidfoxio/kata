<template>
  <div
    v-if="thumbnails && thumbnails.length > 0"
    class="slice portfolio-5 md:flex mx-r1/12 w-r10/12 md:mx-0 md:ml-r1/12 md:w-r11/12 overflow-x-hidden"
  >
    <div class="md:w-r2/12 mb-large fade-up">
      <h2 v-if="title" v-kata-html="title" class="mb-medium heading-3" />
      <button
        class="carousel-nav prev focus:outline-none mr-small"
        title="Previous Slide"
        @click="showPrev"
      >
        <span></span>
      </button>
      <button
        class="carousel-nav next focus:outline-none"
        title="Next Slide"
        @click="showNext"
      >
        <span></span>
      </button>
    </div>
    <div class="md:w-r9/12 md:pl-large fade-up">
      <VueSlickCarousel
        v-bind="settings"
        ref="portfolio-5-carousel"
        class="w-full"
      >
        <div v-for="item in thumbnails" :key="item._key" class="slide">
          <div class="portfolio-5-image mb-medium">
            <KataImage
              :image="item.image"
              :ratio="825 / 500"
              :max-width="1500"
              sizes="xl:75vw"
            />
          </div>
          <h3
            v-if="item.title"
            v-kata-html="item.title"
            class="mb-small label-1"
          />
          <p v-if="item.text" v-kata-html="item.text" class="para-2" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title],
  props: {
    thumbnails: {
      type: Array,
      required: true,
    },
    settings: {
      type: Object,
      default: () => ({
        arrows: false,
        dots: false,
        slidesToShow: 1.1,
        infinite: true,
        centerMode: false,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
      }),
    },
  },
  // data() {
  //   return {
  //     settings: {
  //       arrows: false,
  //       dots: false,
  //       slidesToShow: 1.1,
  //       infinite: true,
  //       centerMode: false,
  //       lazyLoad: 'ondemand',
  //       autoplay: true,
  //       autoplaySpeed: 5000,
  //     },
  //   }
  // },
  methods: {
    showNext() {
      this.$refs['portfolio-5-carousel'].next()
    },
    showPrev() {
      this.$refs['portfolio-5-carousel'].prev()
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-5 {
  .slide {
    outline: none !important;
    padding-left: 10%; //fixes infinite loop problem
  }
}
</style>
