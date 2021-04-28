<template>
  <n-link v-if="type == 'local' && link && link._ref" :to="path(link._ref)">
    <slot></slot>
  </n-link>
  <a v-else-if="type == 'external' && link" :href="link" target="_blank">
    <slot></slot>
  </a>
  <div v-else><slot></slot></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'local',
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    path(ref) {
      let link = this.$store.getters['references/getLinkFromReference'](ref)
      return link.path ? link.path : null
    },
  },
}
</script>
