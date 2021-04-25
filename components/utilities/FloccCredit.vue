<template>
  <a v-if="credit.url" :href="credit.url" target="_blank">
    {{ credit.linkText }}
  </a>
</template>

<script>
export default {
  computed: {
    credit() {
      return this.$store.state.globalContent.floccCredit
    },
  },
}
</script>
