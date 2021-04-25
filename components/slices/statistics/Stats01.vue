<template>
  <div class="slice stats-1 w-r10/12 mx-r1/12">
    <h2 v-if="title" class="heading-2" v-html="title" />

    <div class="flex flex-wrap -mx-medium">
      <div
        v-for="item in statistics"
        :key="item._key"
        class="stat flex-grow w-1/4 px-medium"
      >
        <p v-if="item.stat" class="heading-2 statistic" v-html="item.stat" />
        <p v-if="item.title" v-html="item.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { title } from '../shared'
export default {
  mixins: [title],
  props: {
    statistics: {
      type: Array,
      required: true,
    },
  },
}
</script>
