<template>
  <div class="slice feature-3 stack-children">
    <KataImage
      :image="image"
      :ratio="16 / 9"
      :max-width="3000"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r10/12 md:w-r8/12 lg:w-r6/12 h-screen flex flex-col justify-end items-start z-1 p-r1/12 md:pr-0 content"
    >
      <h2 class="heading-2 text-white mb-medium fade-up" v-kata-html="title" />
      <p
        v-if="text"
        class="text-white mb-medium fade-up"
        v-kata-html="text"
      />
      <KataLinks :links="links" class="fade-up" />
    </div>
  </div>
</template>

<script>
import { title, text, links, image } from '../shared'

export default {
  mixins: [title, text, links, image],
}
</script>

<style lang="scss" scoped>
.feature-3 {
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
