<template>
  <div class="news-3 slice">
    <h2
      v-if="title"
      class="heading-2 mb-large text-center fade-up"
      v-html="title"
    />

    <div v-if="articles" ref="listItems" class="relative">
      <VueSlickCarousel v-bind="settings" class="news-3-slider">
        <template #prevArrow="arrowOption">
          <button
            class="carousel-nav prev focus:outline-none mb-medium"
            title="Previous Slide"
          >
            <span></span>
          </button>
        </template>
        <div
          v-for="item in articles"
          :key="item._id"
          class="px-small slide-item"
        >
          <slot name="tease" :item="item" class="fade-up"></slot>
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
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
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
              slidesToShow: 1,
              autoplaySpeed: 3000,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.news-3 {
  .slick-track {
    display: flex;

    .slick-slide > div {
      height: 100%;
    }
  }
  .carousel-nav {
    position: absolute;
    z-index: 50;

    &.prev {
      left: var(--screen-border-size);
    }
    &.next {
      right: var(--screen-border-size);
    }
  }
}
</style>
