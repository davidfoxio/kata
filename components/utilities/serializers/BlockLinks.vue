<template>
  <div v-if="link" class="space-x-small kata-block-links">
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
