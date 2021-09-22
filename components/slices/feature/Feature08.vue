<template>
  <div class="slice feature-8">
    <div class="w-r10/12 mx-r1/12 sm:flex mb-large">
      <div class="sm:w-r6/12 mr-large">
        <h2 class="heading-2 fade-up" v-kata-html="title" />
      </div>
      <div class="sm:w-r4/12">
        <p v-if="text" class="fade-up" v-kata-html="text" />
      </div>
    </div>
    <KataImage
      :image="image"
      :ratio="16 / 9"
      :max-width="3000"
      class="h-screen w-full object-cover"
    />
  </div>
</template>

<script>
import { title, text, image } from '../shared'

export default {
  mixins: [title, text, image],
}
</script>

<style lang="scss" scoped>
.feature-8 {
}
</style>
