<template>
  <div v-if="articles" class="py-slice-half px-5 sm:flex sm:space-x-5 relative">
    <div class="sm:w-1/2">
      <transition-group tag="ul" name="fade" mode="out-in">
        <li v-for="item in articles" :key="item._id">
          <slot name="tease" :item="item"></slot>
        </li>
      </transition-group>
    </div>
    <div class="sm:w-1/2 sm:sticky child">
      <nuxt-child v-if="$route.params.slug" />
    </div>
  </div>
  <div v-else class="py-slice-half px-5 sm:flex sm:space-x-5">
    <p>
      No results found. Try changing your filters or email us at
      <a href="mailto:hello@habin.co.uk" class="underline">hello@habin.co.uk</a>
      if you can't find what you're looking for.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
}
</script>
