<template>
  <div class="slice hero-5 stack-children">
    <em>this is a placeholder! to be styled.</em>
    <KataMedia
      :media="media"
      :ratio="16 / 9"
      :max-width="3000"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r10/12 mx-r1/12 md:w-r6/12 md:mx-r3/12 h-screen flex flex-col justify-center text-center z-1"
    >
      <h1 class="heading-1 text-white mb-medium" v-html="title" />
    </div>
  </div>
</template>

<script>
import { title, media } from '../shared'

export default {
  mixins: [title, media],
}
</script>
