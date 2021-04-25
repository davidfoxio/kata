<template>
  <div class="slice md:flex h-screen hero-1">
    <div
      class="h-4/6 md:h-full md:w-r4/12 ml-r1/12 flex flex-col justify-center"
    >
      <h1 class="heading-1 mb-medium" v-html="title" />
      <p v-if="text" v-html="text" />
      <KataLinks :links="links" />
    </div>

    <div class="h-2/6 md:h-full md:ml-r2/12 md:w-r5/12">
      <KataMedia
        :media="media"
        :ratio="1"
        :max-width="2000"
        class="h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { title, text, links, media } from '../shared'

export default {
  mixins: [title, text, links, media],
}
</script>
