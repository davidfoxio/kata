<template>
  <div
    class="slice feature-2 flex flex-col sm:flex-row relative justify-start px-r1/12 sm:px-0"
  >
    <div class="sm:w-r5/12 sm:ml-r1/12 sm:mr-large order-2 sm:order-1">
      <h2 v-if="title" class="mb-large fade-up" v-html="title" />
      <p v-if="text" class="mb-large fade-up" v-html="text" />
      <ul v-if="shortFeatures">
        <li
          v-for="(item, index) in shortFeatures"
          :key="item.title ? item.title : index"
          class="mb-small fade-up item flex items-center fade-up"
        >
          <component
            :is="item.link ? 'nuxt-link' : 'div'"
            :to="getLink(item.link)"
            class="flex items-center hover:text-primary transition-all duration-500"
          >
            <KataSimpleImage
              v-if="item.icon"
              :image="item.icon"
              width="30"
              height="30"
              class="mb-1 mr-small"
            />
            <h3 v-if="item.title" class="label-1" v-html="item.title" />
            <p v-if="item.text" v-html="item.text" />
          </component>
        </li>
      </ul>
      <KataLinks :links="links" />
    </div>
    <div class="sm:w-1/2 order-1 sm:order-2 mb-large sm:mb-0 sm:relative">
      <KataImage
        v-if="image"
        :image="image"
        :ratio="685 / 514"
        :max-width="1500"
        sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
        class="sm:h-full sm:w-full sm:absolute sm:top-0 sm:left-0 sm:object-cover sm:bottom-0 sm:m-auto"
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
      required: true,
    },
  },
}
</script>
