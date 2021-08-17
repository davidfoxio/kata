<template>
  <div class="slice testimonials-4">
    <div v-if="testimonials && testimonials.length > 1" class="flex fade-up">
      <div class="w-r2/12 flex justify-center items-center">
        <button
          class="carousel-nav prev focus:outline-none"
          title="Previous Slide"
          @click="showPrev"
        >
          <span></span>
        </button>
      </div>
      <VueSlickCarousel
        v-bind="settings"
        ref="testimonials-4-carousel"
        class="w-r8/12"
      >
        <div v-for="item in testimonials" :key="item._key" class="pr-large">
          <p v-if="item.quote" class="heading-3 mb-large" v-kata-html="item.quote" />
          <p v-if="item.name" class="label-1" v-kata-html="item.name" />
          <p v-if="item.job" class="para-4 mt-1" v-kata-html="item.job" />
        </div>
      </VueSlickCarousel>

      <div class="w-r2/12 flex justify-center items-center">
        <button
          class="carousel-nav next focus:outline-none"
          title="Next Slide"
          @click="showNext"
        >
          <span></span>
        </button>
      </div>
    </div>
    <div v-else class="w-r8/12 mx-r2/12">
      <div v-for="item in testimonials" :key="item._key" class="pr-large">
        <p v-if="item.quote" class="heading-3 mb-large" v-kata-html="item.quote" />
        <p v-if="item.name" class="label-1" v-kata-html="item.name" />
        <p v-if="item.job" class="para-4 mt-1" v-kata-html="item.job" />
      </div>
    </div>
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
    testimonials: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        centerMode: false,
        // fade: true,
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['testimonials-4-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-4-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-4 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
}
</style>
