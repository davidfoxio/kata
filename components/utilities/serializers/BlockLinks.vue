<template>
  <div v-if="link" class="space-x-small kata-block-links mt-medium">
    <KataLink
      v-for="item in link"
      v-bind="item"
      :key="item._key"
      class="inline-block"
    />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.embed-content-wrap {
  .kata-block-links.mt-medium {
    margin-bottom: 0;
  }
}
</style>
