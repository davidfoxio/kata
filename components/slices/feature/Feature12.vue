<template>
  <div class="slice feature-12 stack-children">
    <KataImage
      :image="image"
      :ratio="16 / 9"
      :max-width="3000"
      class="min-h-screen w-full object-cover"
    />
    <div
      class="w-full md:w-r6/12 min-h-screen flex flex-col justify-end items-start z-1 p-r1/12 text-white"
    >
      <h2 v-kata-html="title" class="heading-2 mb-medium" />
      <p v-if="text" v-kata-html="text" class="mb-medium" />
      <ul v-if="shortFeatures">
        <li
          v-for="(item, index) in shortFeatures"
          :key="item.title ? item.title : index"
          class="mb-small fade-up item flex items-center"
        >
          <component
            :is="item.link ? 'nuxt-link' : 'div'"
            :to="item.link ? getLink(item.link._ref) : '/'"
            class="flex items-center hover:text-primary transition-all duration-500"
          >
            <KataSimpleImage
              v-if="item.icon"
              :image="item.icon"
              width="30"
              height="30"
              class="mb-1 mr-small"
            />
            <h3 v-if="item.title" v-kata-html="item.title" class="label-1" />
            <!-- <p v-if="item.text" v-kata-html="item.text" /> -->
          </component>
        </li>
      </ul>
      <KataLinks :links="links" class="text-center" />
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
  },
}
</script>

<style lang="scss" scoped>
.feature-12 {
  position: relative;
  background: black;

  img {
    opacity: 0.75 !important;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    left: 1px;
    top: 0px;
    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
