<template>
  <div v-if="articles && articles.length" class="news-3 slice">
    <div v-if="title || text" class="w-r10/12 mx-auto text-center mb-medium">
      <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up" />
      <p v-if="text" v-kata-html="text" class="fade-up whitespace-pre-line" />
    </div>

    <div ref="listItems" class="relative">
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
          <slot name="tease" :item="item" class="fade-up">
            <ArticlesTeaseWithImage
              :item-id="item._id"
              :link="getLink(item._id)"
              :title="item.title"
              :image="item.image"
            />
          </slot>
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
    <KataLinks v-if="links" :links="links" class="mt-small" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, links, text } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title, links, text],
  props: {
    articles: {
      type: Array,
      default: null,
    },
    settings: {
      type: Object,
      default: () => ({
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
      }),
    },
  },
}
</script>

<style lang="scss">
.news-3 {
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: white;
    outline: none;
    background: white;
  }
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
