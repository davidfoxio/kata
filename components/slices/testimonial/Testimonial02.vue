<template>
  <div class="slice testimonials-2">
    <div v-if="testimonials && testimonials.length > 1" class="flex">
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
        ref="testimonials-2-carousel"
        :class="{
          'mx-r1/12 w-r10/12': testimonials.length == 1,
          'w-r8/12': testimonials.length > 1,
        }"
      >
        <div v-for="item in testimonials" :key="item._key" class="pr-large">
          <div class="md:flex md:items-center">
            <div
              v-if="item.image"
              class="w-1/2 md:w-1/3 md:pr-medium mb-medium md:mb-0"
            >
              <KataImage
                :image="item.image"
                :max-width="500"
                :ratio="251 / 285"
                data-not-lazy
              />
            </div>
            <div :class="{ 'md:w-2/3 md:pl-medium': item.image }">
              <p
                v-if="item.quote"
                v-kata-html="item.quote"
                class="heading-3 mb-large"
              />
              <p v-if="item.name" v-kata-html="item.name" class="label-1" />
              <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1" />
              <KataLinks
                v-if="item.links && item.links.link"
                :links="item.links.link"
                class="mt-small"
              />
            </div>
          </div>
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
      <div v-for="item in testimonials" :key="item._key" class="pr-large">
        <div class="md:flex md:items-center">
          <div
            v-if="item.image"
            class="w-1/2 md:w-1/3 md:pr-medium mb-medium md:mb-0"
          >
            <KataImage
              :image="item.image"
              :max-width="500"
              :ratio="251 / 285"
              data-not-lazy
            />
          </div>
          <div :class="{ 'md:w-2/3 md:pl-medium': item.image }">
            <p
              v-if="item.quote"
              v-kata-html="item.quote"
              class="heading-3 mb-large"
            />
            <p v-if="item.name" v-kata-html="item.name" class="label-1" />
            <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1" />
            <KataLinks
              v-if="item.links && item.links.link"
              :links="item.links.link"
              class="mt-small"
            />
          </div>
        </div>
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
      this.$refs['testimonials-2-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-2-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-2 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
}
</style>
