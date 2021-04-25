<template>
  <a :href="link" target="_blank" download>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      default: null,
    },
  },
  computed: {
    link() {
      if (this.asset) {
        const ref = this.asset._ref
        return this.$store.getters['references/getLinkFromReference'](ref)
      }
      return ''
    },
  },
}
</script>
