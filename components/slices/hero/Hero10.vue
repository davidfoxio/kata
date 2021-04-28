<template>
  <div class="slice hero-10 stack-children">
    <KataMedia
      :media="media"
      :ratio="16 / 9"
      :max-width="3000"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r10/12 lg:w-r9/12 xl:w-r7/12 p-r1/12 h-screen flex flex-col justify-end items-start text-left z-1"
    >
      <div v-if="superHeading">
        <h1 class="label-1 text-white mb-medium" v-html="superHeading" />
        <h2
          v-if="title"
          class="heading-1 text-white mb-medium"
          v-html="title"
        />
      </div>
      <h1 v-else class="heading-1 text-white mb-medium" v-html="title" />
      <p
        v-if="text"
        class="text-white mb-medium whitespace-pre-line"
        v-html="text"
      />
      <KataLinks v-if="links" :links="links" />
    </div>
  </div>
</template>

<script>
import { title, superHeading, text, links, media } from '../shared'

export default {
  mixins: [title, superHeading, text, links, media],
}
</script>

<style lang="scss" scoped>
.hero-10 {
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
