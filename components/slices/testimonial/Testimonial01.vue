<template>
  <div class="slice testimonials-1">
    <div class="container text-center mb-medium">
      <h2 v-if="title" v-kata-html="title" class="label-1 fade-up" />
    </div>
    <div v-if="testimonials.length > 1" class="flex">
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
        ref="testimonials-1-carousel"
        :class="{
          'mx-r1/12 w-r10/12': testimonials.length == 1,
          'w-r8/12': testimonials.length > 1,
        }"
        class="fade-up"
      >
        <div
          v-for="item in testimonials"
          :key="item._key"
          class="md:px-r1/12 text-center"
        >
          <p
            v-if="item.quote"
            class="heading-3 mb-large"
            v-kata-html="item.quote"
          />
          <KataSimpleImage
            :image="item.image"
            width="100"
            height="100"
            data-not-lazy
            class="mx-auto mb-small rounded-full"
          />
          <p v-if="item.name" class="label-1" v-kata-html="item.name" />
          <p v-if="item.job" class="para-4 mt-1" v-kata-html="item.job" />
          <KataLinks
            v-if="item.links && item.links.link"
            :links="item.links.link"
            class="mt-small"
          />
        </div>
      </VueSlickCarousel>
      <div
        v-if="testimonials.length > 1"
        class="w-r2/12 flex justify-center items-center"
      >
        <button
          class="carousel-nav next focus:outline-none"
          title="Next Slide"
          @click="showNext"
        >
          <span></span>
        </button>
      </div>
    </div>
    <div v-else class="mx-r1/12 w-r10/12">
      <div
        v-for="item in testimonials"
        :key="item._key"
        class="md:px-r1/12 text-center"
      >
        <p
          v-if="item.quote"
          class="heading-3 mb-large fade-up"
          v-kata-html="item.quote"
        />
        <KataSimpleImage
          :image="item.image"
          width="60"
          height="60"
          data-not-lazy
          class="mx-auto mb-small rounded-full fade-up"
        />
        <p v-if="item.name" class="label-1 fade-up" v-kata-html="item.name" />
        <p v-if="item.job" class="para-4 mt-1 fade-up" v-kata-html="item.job" />
        <KataLinks
          v-if="item.links && item.links.link"
          :links="item.links.link"
          class="mt-small fade-up"
        />
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
    title: {
      type: String,
      default: '',
    },
    testimonials: {
      type: Array,
      default: null,
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
      this.$refs['testimonials-1-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-1-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-1 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
}
</style>
