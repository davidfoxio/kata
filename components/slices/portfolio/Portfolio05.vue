<template>
  <div
    class="portfolio-5 md:flex mx-r1/12 w-r10/12 md:mx-0 md:ml-r1/12 md:w-r11/12 overflow-x-hidden"
  >
    <div class="md:w-r2/12 mb-large fade-up">
      <h2 v-if="title" class="mb-medium heading-3" v-html="title" />
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
        <div v-for="item in thumbnails" :key="item._key" class="pr-large slide">
          <div class="portfolio-5-image mb-medium">
            <KataImage
              v-if="item.image"
              :image="item.image"
              :ratio="825 / 500"
              :max-width="1500"
              sizes="75vw"
            />
          </div>
          <h3 v-if="item.title" class="mb-small label-1" v-html="item.title" />
          <p v-if="item.text" class="para-2" v-html="item.text" />
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

export default {
  components: { VueSlickCarousel },
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1.1,
        infinite: false,
        centerMode: false,
      },
    }
  },
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
      transition: 0.5s ease;
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
      transition: 0.5s ease;
    }

    &:hover {
      span {
        background: $secondary;
      }
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

  .slide {
    outline: none !important;
  }
}
</style>
