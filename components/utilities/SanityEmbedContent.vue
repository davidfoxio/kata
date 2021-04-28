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
  h2,
  h3,
  .youtube-wrap,
  .btn-primary {
    margin-bottom: var(--spacing-medium);
  }
  p + ul,
  p + h2,
  p + h3 {
    margin-top: var(--spacing-medium);
  }
  li {
    position: relative;
    padding-left: 20px;
    list-style: none;
    margin-left: 10px;

    &::before {
      content: '\2022';
      // color: $tertiary;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
