<template>
  <div v-if="links && links.length" class="-mx-2 -mb-small kata-links">
    <KataLink
      v-for="link in links"
      v-bind="link"
      :key="link._key"
      class="mx-2 inline-block mb-small fade-up"
    />
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: null,
    },
  },
}
</script>
