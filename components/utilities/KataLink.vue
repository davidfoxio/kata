<template>
  <nuxt-link v-if="internalLink" :to="path" :class="linkStyle">
    {{ text }}
  </nuxt-link>

  <a
    v-else-if="fileLink"
    :href="link"
    :class="linkStyle"
    class="btn-file"
    target="_blank"
    download
  >
    {{ text }}
  </a>

  <a v-else-if="url" :href="link" :class="linkStyle">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: null,
    },
    linkStyle: {
      type: String,
      default: null,
    },
    internalLink: {
      type: Object,
      default: null,
    },
    fileLink: {
      type: Object,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
  },
  computed: {
    link() {
      if (this.url) {
        return this.url
      } else if (this.internalLink || this.fileLink) {
        const ref = this.internalLink
          ? this.internalLink._ref
          : this.fileLink.asset._ref

        return this.$store.getters['references/getLinkFromReference'](ref)
      } else {
        return null
      }
    },
    path() {
      const path = this.link ? this.link.path : null
      return path
    },
    text() {
      if (this.linkText) {
        return this.linkText
      } else {
        const text = this.link ? this.link.title : null
        return text
      }
    },
  },
}
</script>
