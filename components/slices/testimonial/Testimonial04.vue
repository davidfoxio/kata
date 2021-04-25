<template>
  <div class="slice testimonials-4">
    <div class="flex">
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
          <p v-if="item.quote" class="heading-3 mb-large" v-html="item.quote" />
          <p v-if="item.name" class="label-1" v-html="item.name" />
          <p v-if="item.job" class="para-4 mt-1" v-html="item.job" />
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

<style lang="scss" scoped>
.testimonials-4 {
  .carousel-nav {
    width: 25px;
    height: 20px;
    position: relative;

    &:before {
      content: '';
      border-style: solid;
      border-width: 2px 2px 0 0;
      display: inline-block;
      height: 10px;
      width: 10px;
      vertical-align: top;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    span {
      width: 25px;
      background: black;
      height: 2px;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .prev {
    &:before {
      transform: rotate(-135deg);
      left: 0;
    }
    span {
      left: -1px;
    }
  }
  .next {
    &:before {
      transform: rotate(45deg);
      right: 0;
    }
    span {
      right: -1px;
    }
  }
}
</style>
