<template>
  <SanityContent
    :blocks="blocks"
    :serializers="serializers"
    class="embed-content-wrap"
  />
</template>

<script>
import Youtube from './serializers/Youtube.vue'
import Image from './serializers/SanityImage.vue'
import KataLinks from './KataLinks.vue'
import FileLink from './serializers/FileLink.vue'
import InternalLink from './serializers/InternalLink.vue'
import ExternalLink from './serializers/ExternalLink.vue'

export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      serializers: {
        types: {
          youtube: Youtube,
          standardImage: Image,
          link: KataLinks,
        },
        marks: {
          internalLink: InternalLink,
          externalLink: ExternalLink,
          file: FileLink,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.embed-content-wrap {
  img,
  .youtube-wrap,
  .btn-primary {
    margin-bottom: 1rem;
  }
}
</style>
