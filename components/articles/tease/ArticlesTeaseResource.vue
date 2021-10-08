<template>
  <component
    :is="componentType"
    :to="link"
    :href="link"
    :target="!internalLink ? '_blank' : '_self'"
    class="article-tease-resource relative block"
  >
    <div class="relative title-wrap">
      <h3 v-if="title" v-kata-html="title" class="label-1" />
      <DraftLabel v-if="itemId" :id="itemId" />
    </div>
    <p v-if="date" class="mt-small para-2">{{ date | formatDate }}</p>
    <p v-if="excerpt" v-kata-html="excerpt" class="mt-small para-2" />
  </component>
</template>

<script>
export default {
  props: {
    itemId: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: function () {
        return []
      },
    },
    internalLink: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
  },
  computed: {
    componentType() {
      if (this.link && this.internalLink) {
        return 'n-link'
      } else if (this.link) {
        return 'a'
      }
      return 'div'
    },
  },
  methods: {
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.article-tease-resource {
  transition: 0.5s ease;
  &:hover {
    @apply text-primary;
  }
}
</style>
