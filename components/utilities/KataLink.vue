<template>
  <nuxt-link v-if="internalLink && !isOnSamePage" :to="path" :class="linkStyle">
    {{ text }}
  </nuxt-link>

  <button
    v-else-if="internalLink && isOnSamePage && anchor"
    :class="linkStyle"
    @click="scrollToAnchor(anchor)"
  >
    {{ text }}
  </button>
  <button
    v-else-if="_type == 'anchor'"
    :class="linkStyle"
    @click="scrollTo(anchor)"
  >
    {{ text }}
  </button>

  <a
    v-else-if="fileLink && link"
    :href="link"
    :class="linkStyle"
    class="btn-file"
    target="_blank"
    download
  >
    {{ text }}
  </a>

  <a v-else-if="url && link" :href="link" target="_blank" :class="linkStyle">
    {{ text }}
  </a>

  <nuxt-link
    v-else-if="query && query != null"
    :to="{ query: { lightbox: query } }"
    :class="linkStyle"
  >
    {{ text }}
  </nuxt-link>
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
    anchor: {
      type: String,
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
    query: {
      type: String,
      default: null,
    },
    _type: {
      type: String,
      default: null,
    },
  },
  computed: {
    link() {
      if (this.url) {
        return this.url
      } else if (
        this.internalLink ||
        (this.fileLink && this.fileLink?.asset?._ref)
      ) {
        const ref = this.internalLink
          ? this.internalLink._ref
          : this.fileLink.asset._ref

        return this.$store.getters['references/getLinkFromReference'](ref)
      } else {
        return null
      }
    },
    isOnSamePage() {
      if (this.link?.path) {
        return this.link.path === this.$route.fullPath ? true : false
      } else {
        return false
      }
    },
    path() {
      let path = this.link ? this.link.path : null
      if (this.internalLink && this.anchor) {
        path += this.anchor
      }
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
  methods: {
    scrollTo(anchor) {
      if (process.client) {
        if (anchor.includes('#')) anchor = anchor.replace('#', '')
        let el = document.getElementById(anchor)
        let header = document.getElementById('header')
        if (el && header) {
          window.scrollTo({
            top: el.offsetTop - header.offsetHeight,
            behavior: 'smooth',
          })
        }
      }
    },
    scrollToAnchor(anchor) {
      if (process.client) {
        console.log('whoosh')
        anchor = anchor.toString()
        if (anchor.includes('#')) {
          anchor = anchor.replace('#', '')
        }
        let elem = document.getElementById(anchor, anchor.replace('#', ''))
        if (elem) {
          window.scrollBy({
            top: elem.getBoundingClientRect().top - 150,
            left: 0,
            behavior: 'smooth',
          })
        }
      }
    },
  },
}
</script>
