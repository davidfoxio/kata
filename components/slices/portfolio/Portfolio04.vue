<template>
  <div class="slice portfolio-4 mx-r1/12 w-r10/12">
    <div class="mb-large text-center">
      <h2 v-if="title" class="fade-up">{{ title }}</h2>
      <p
        v-if="text"
        class="mt-medium whitespace-pre-line lg:px-r1/12"
        v-html="text"
      />
    </div>
    <div class="mb-large flex flex-wrap justify-evenly -mx-small">
      <div
        v-for="item in thumbnails"
        :key="item._key"
        class="px-small md:w-1/3 flex-grow fade-up thumbnail"
      >
        <slot name="tease" :item="item">
          <component
            :is="item.link ? 'nuxt-link' : 'div'"
            :to="item.link ? getLink(item.link._ref) : ''"
          >
            <KataImage
              :image="item.image"
              :ratio="3 / 4"
              class="mb-small max-h-[70vh] object-cover"
            />
            <h3
              v-if="item.title"
              v-kata-html="item.title"
              class="mb-small label-1"
            />
            <p v-if="item.text" v-kata-html="item.text" class="para-4" />
          </component>
        </slot>
      </div>
    </div>
    <div v-if="links" class="text-center">
      <KataLinks :links="links" />
    </div>
  </div>
</template>

<script>
import { title, text, links } from '../shared'
export default {
  mixins: [title, text, links],
  props: {
    thumbnails: {
      type: Array,
      default: null,
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
}
</script>
