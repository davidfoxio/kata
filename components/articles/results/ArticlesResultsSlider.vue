<template>
  <div ref="listItems" v-observe-visibility="visibilityChanged">
    <VueSlickCarousel
      v-if="articles"
      v-bind="settings"
      class="article-results-slider pl-r1/12"
    >
      <div v-for="item in articles" :key="item._id" class="px-small">
        <slot name="tease" :item="item">
          <ArticlesTeaseWithImage
            :item-id="item._id"
            :link="getLink(item._id)"
            :title="item.title"
            :image="item.image"
          />
        </slot>
      </div>
    </VueSlickCarousel>
    <p v-else>No results found.</p>
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
    articles: {
      default: function () {
        return []
      },
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
    }
  },
  mounted() {
    this.size()
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.size()
      }
    },
    size() {
      if (process.client) {
        // this.$nextTick(() => {
        //   let all = this.$refs.listItems.querySelectorAll('.slick-slide')
        //   let height = 0
        //   // console.log(all)
        //   if (all) {
        //     all.forEach((element) => {
        //       element.style.height = 'auto'
        //       if (element.offsetHeight > height) {
        //         height = element.offsetHeight
        //       }
        //     })
        //     all.forEach((element) => {
        //       // console.log(element, height)
        //       element.style.height = height + 'px'
        //       // console.log(element, height)
        //     })
        //   }
        // })
      }
    },
  },
}
</script>

<style lang="scss">
.article-results-slider {
  position: relative;
  button {
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 50;
    background: $primary;
    border-radius: 100%;
    height: 50px;
    width: 50px;

    &:before {
      content: '';
      border-style: solid;
      border-width: 3px 3px 0 0;
      display: inline-block;
      height: 20px;
      width: 20px;
      transform: rotate(-135deg);
      border-color: white;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: 1;
    }

    &:hover {
      background: $primary;
    }

    &.slick-disabled {
      opacity: 0;
    }
  }
  .slick-prev {
    left: 30px;

    &:before {
      right: 12px;
    }
  }
  .slick-next {
    right: 30px;
    &:before {
      transform: rotate(45deg);
      left: 12px;
    }
  }

  @media (max-width: 500px) {
    .slick-next {
      right: 10px;
    }
    .slick-prev {
      left: 10px;
    }
  }
}
</style>
