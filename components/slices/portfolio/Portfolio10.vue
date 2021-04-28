<template>
  <div class="portfolio-10 slice">
    <div v-if="title" class="w-r10/12 mx-r1/12 text-center title">
      <h2 class="heading-2 mb-large fade-up" v-html="title" />
    </div>
    <div v-if="articles && articles.length > 0" class="slider relative fade-up">
      <VueSlickCarousel
        v-bind="settings"
        ref="portfolio-10-slider"
        class="portfolio-10-slider pl-r1/12"
      >
        <template #prevArrow="arrowOption">
          <button
            class="carousel-nav prev focus:outline-none mb-medium"
            title="Previous Slide"
          >
            <span></span>
          </button>
        </template>

        <div v-for="item in articles" :key="item._id" class="px-small">
          <slot name="tease" :item="item"></slot>
        </div>

        <template #nextArrow="arrowOption">
          <button
            class="carousel-nav next focus:outline-none"
            title="Next Slide"
          >
            <span></span>
          </button>
        </template>
      </VueSlickCarousel>
    </div>
    <p v-else>No results found.</p>
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
    articles: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3.5,
        infinite: false,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1.2,
              autoplaySpeed: 2000,
            },
          },
        ],
      },
      afterChange: function (e) {
        console.log('cahnged;', e)
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['portfolio-10-slider'].next()
    },
    showPrev() {
      this.$refs['portfolio-10-slider'].prev()
    },
  },
}
</script>

<style lang="scss">
.portfolio-10 {
  position: relative;

  .slick-disabled {
    opacity: 0;
  }
}
</style>
