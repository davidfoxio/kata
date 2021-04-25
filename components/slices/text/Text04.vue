<template>
  <div class="slice text-4 md:flex w-full">
    <div class="w-full md:w-1/3 mb-large sm:mb-0">
      <KataMedia
        v-if="media"
        :media="media"
        :ratio="ratio"
        :max-width="900"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="mx-r1/12 w-r10/12 md:w-2/3 md:ml-large py-medium md:mr-0 md:pr-r1/12"
    >
      <div v-if="superHeading">
        <h2 class="mb-medium label-1" v-html="superHeading" />
        <h3 v-if="title" class="mb-medium heading-3" v-html="title" />
      </div>
      <h2 v-else-if="title" class="mb-medium heading-3" v-html="title" />

      <div class="sm:flex sm:flex-wrap sm:-mx-small sm:-mb-medium">
        <div
          v-for="item in list"
          :key="item._key"
          class="sm:w-1/2 sm:px-small pb-medium"
        >
          <p v-if="item.title" class="label-1" v-html="item.title" />
          <p v-if="item.text" class="para-2" v-html="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title, media } from '../shared'
export default {
  mixins: [superHeading, title, media],
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ratio() {
      if (process.client && window.matchMedia('(max-width:699px)').matches) {
        return 16 / 9
      }
      return 510 / 716
    },
  },
}
</script>
