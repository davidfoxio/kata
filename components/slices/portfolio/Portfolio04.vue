<template>
  <div class="slice portfolio-5 mx-r1/12 w-r10/12">
    <div class="mb-large text-center">
      <h2 v-if="title" class="mb-medium">{{ title }}</h2>
    </div>
    <div class="mb-large flex flex-wrap justify-evenly -mx-small">
      <div
        v-for="item in thumbnails"
        :key="item._key"
        class="px-small md:w-1/3"
      >
        <KataImage
          v-if="item.image"
          :image="item.image"
          :ratio="4 / 3"
          class="mb-small"
        />
        <h3 v-if="item.title" class="mb-small label-1" v-html="item.title" />
        <p v-if="item.description" class="para-4" v-html="item.description" />
      </div>
    </div>
    <div v-if="links" class="text-center">
      <KataLinks :links="links" />
    </div>
  </div>
</template>

<script>
import { title, links } from '../shared'
export default {
  mixins: [title, links],
  props: {
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
        slidesToShow: 1.2,
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
    width: 20px;
    height: 20px;
    position: relative;

    &:before {
      border-style: solid;
      border-width: 2px 2px 0 0;
      content: '';
      display: inline-block;
      height: 20px;
      width: 20px;
      vertical-align: top;
    }
  }

  .prev {
    &:before {
      transform: rotate(-135deg);
    }
  }
  .next {
    &:before {
      transform: rotate(45deg);
    }
  }
}
</style>
