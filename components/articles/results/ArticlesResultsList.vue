<template>
  <div
    v-if="articles && articles.length > 0"
    class="articles-results-list py-slice-half w-r10/12 mx-r1/12 md:px-r1/12 lg:px-r2/12 sm:flex relative"
  >
    <transition-group tag="ul" name="fade" mode="out-in" class="w-full">
      <li v-for="item in articles" :key="item._id || item._key">
        <slot name="tease" :item="item">
          {{ item.title }}
        </slot>
      </li>
    </transition-group>
  </div>
  <div v-else class="py-slice-half px-5 sm:flex sm:space-x-5">
    <p>No results found.</p>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      default: null,
      type: Array,
    },
  },
}
</script>
