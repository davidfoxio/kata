<template>
  <div class="slice hero-4">
    <div
      class="w-r10/12 mx-r1/12 md:w-r6/12 md:mx-r3/12 flex flex-col justify-center text-center z-1"
    >
      <h1 class="heading-1 mb-slice-half" v-kata-html="title" />
    </div>

    <div class="w-r10/12 mx-r1/12 text-center z-1 mb-slice">
      <KataMedia
        :media="media"
        :ratio="3 / 1"
        :max-width="3000"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import { title, media } from '../shared'

export default {
  mixins: [title, media],
}
</script>
