<template>
  <div v-if="links.length" class="-mx-2">
    <KataLink
      v-for="link in links"
      v-bind="link"
      :key="link._key"
      class="mx-2 inline-block"
    />
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
}
</script>
