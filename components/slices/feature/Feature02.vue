<template>
  <div
    class="slice feature-2 flex flex-col md:flex-row relative justify-start px-r1/12 md:px-0"
  >
    <div class="md:w-r5/12 md:ml-r1/12 md:mr-large order-2 md:order-1 body">
      <h2 v-if="title" v-kata-html="title" class="mb-large fade-up" />
      <p v-if="text" v-kata-html="text" class="mb-large fade-up" />
      <ul v-if="shortFeatures">
        <li
          v-for="(item, index) in shortFeatures"
          :key="item.title ? item.title : index"
          class="mb-small fade-up item flex items-center fade-up"
        >
          <component
            :is="item.link ? 'nuxt-link' : 'div'"
            :to="item.link"
            class="flex items-center"
            :class="{
              'hover:text-primary transition-all duration-500': item.link,
            }"
          >
            <KataSimpleImage
              v-if="item.icon"
              :image="item.icon"
              width="30"
              height="30"
              class="mb-1 mr-small"
            />
            <h3 v-if="item.title" v-kata-html="item.title" class="label-1" />
            <p v-if="item.text" v-kata-html="item.text" />
          </component>
        </li>
      </ul>
      <KataLinks v-if="links" :links="links" class="fade-up" />
    </div>
    <div class="md:w-1/2 order-1 md:order-2 mb-large md:mb-0 md:relative image">
      <KataImage
        :image="image"
        :ratio="ratio"
        :max-width="1500"
        sizes="sm:90vw md:50vw xl:50vw"
        class="md:h-full md:w-full md:absolute md:top-0 md:left-0 md:object-cover md:bottom-0 md:m-auto"
      />
    </div>
  </div>
</template>

<script>
import { title, text, links, image } from '../shared'
export default {
  mixins: [title, text, links, image],
  props: {
    shortFeatures: {
      type: Array,
      default: null,
    },
    ratio: {
      type: Number,
      default: 685 / 514,
    },
  },
}
</script>
