<template>
  <div class="slice feature-1 w-r10/12 mx-r1/12 flex flex-col sm:flex-row">
    <div class="sm:w-1/2 sm:mr-large order-2 sm:order-1 py-medium">
      <h2 v-if="title" class="mb-large" v-html="title" />
      <p v-if="text" class="mb-large" v-html="text" />
      <KataLinks :links="links" />
    </div>
    <div class="sm:w-1/2 order-1 sm:order-2 mb-large sm:mb-0">
      <KataMedia
        v-if="media"
        :media="media"
        :ratio="685 / 514"
        :max-width="1500"
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
