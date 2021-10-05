<template>
  <div class="slice feature-4 w-r10/12 mx-r1/12 sm:flex">
    <div class="sm:w-1/2 sm:mr-large">
      <h2 v-if="title" v-kata-html="title" class="mb-large fade-up" />
    </div>
    <div class="sm:w-1/2 mb-large sm:mb-0 fade-up">
      <p v-if="text" v-kata-html="text" class="whitespace-pre-line" />
      <KataLinks v-if="links" :links="links" class="mt-medium" />
    </div>
  </div>
</template>

<script>
import { title, text, links } from '../shared'
export default {
  mixins: [title, text, links],
}
</script>
