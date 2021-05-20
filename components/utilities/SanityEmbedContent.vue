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
import BlockLinks from './serializers/BlockLinks.vue'
import FileLink from './serializers/FileLink.vue'
import InternalLink from './serializers/InternalLink.vue'
import ExternalLink from './serializers/ExternalLink.vue'
import TableField from './serializers/TableField.vue'
import Accordion from './serializers/Accordion.vue'

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
          image: Image,
          link: BlockLinks,
          tableField: TableField,
          accordion: Accordion
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
    margin-bottom: var(--spacing-medium);
  }
  h2,
  h3 {
    margin-bottom: var(--spacing-small);
  }
  p + ul {
    margin-top: var(--spacing-medium);
  }
  p + h2,
  p + h3 {
    margin-top: var(--spacing-large);
  }

  ol {
    list-style: decimal;
    padding-left: 2.5em;
  }

  ul {
    list-style: disc;
    padding-left: 2.5em;
  }

  li {
    padding-left: 0 !important;
  }

  a {
    @apply text-primary;
  }
}
</style>
