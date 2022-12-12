<template>
  <a class="external-link" :href="href ? href : url" :target="target">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    url: { type: String, default: null },
    target: { type: String, default: '_blank' },
  },
}
</script>
