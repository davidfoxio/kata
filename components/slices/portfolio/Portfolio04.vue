<template>
  <div class="slice portfolio-4 mx-r1/12 w-r10/12">
    <div class="mb-large text-center">
      <h2 v-if="title" class="mb-medium fade-up">{{ title }}</h2>
    </div>
    <div class="mb-large flex flex-wrap justify-evenly -mx-small">
      <div
        v-for="item in thumbnails"
        :key="item._key"
        class="px-small md:w-1/3 fade-up"
      >
        <slot name="tease" :item="item">
          <component
            :is="item.link ? 'nuxt-link' : 'div'"
            :to="item.link ? getLink(item.link._ref) : ''"
          >
            <KataImage :image="item.image" :ratio="4 / 3" class="mb-small" />
            <h3
              v-if="item.title"
              class="mb-small label-1"
              v-html="item.title"
            />
            <p
              v-if="item.text"
              class="para-4"
              v-html="item.text"
            />
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
}
</script>
