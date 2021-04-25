<template>
  <transition-group
    v-if="articles"
    :class="ulClass"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="item in articles" :key="item._id">
      <slot name="tease" :item="item"></slot>
    </li>
  </transition-group>
  <p v-else>No results found, try changing your filters</p>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '3',
    },
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
  computed: {
    ulClass() {
      switch (this.cols) {
        case '4':
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
        case '2':
          return 'w-full grid gap-medium grid-cols-1 lg:grid-cols-2'
        default:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      }
    },
  },
}
</script>
