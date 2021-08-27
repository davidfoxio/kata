<template>
  <div class="flex flex-wrap -mx-small" v-if="total">
    <nuxt-link
      :to="{ path: $route.path, query: { page: 1 } }"
      :class="currentPage === 1 ? disabledStyle : buttonStyles"
    >
      <span class="hidden sm:inline">&#60;&#60;</span>
    </nuxt-link>

    <nuxt-link
      v-for="item in totalPages"
      :key="item"
      :to="{ path: $route.path, query: { page: item } }"
      :class="currentPage === item ? selectedStyles : buttonStyles"
    >
      <span class="hidden sm:inline">{{ item }}</span>
    </nuxt-link>

    <nuxt-link
      :to="{ path: $route.path, query: { page: totalPages } }"
      :class="currentPage === totalPages ? disabledStyle : buttonStyles"
    >
      <span class="hidden sm:inline">&#62;&#62;</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 12,
    },
  },
  computed: {
    buttonStyles() {
      return 'btn-pagination px-small'
    },
    selectedStyles() {
      return 'btn-pagination px-small selected font-bold'
    },
    disabledStyle() {
      return 'btn-pagination disabled px-small pointer-events-none'
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
  },
}
</script>