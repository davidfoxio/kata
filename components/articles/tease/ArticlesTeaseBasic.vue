<template>
  <component :is="link ? 'nuxt-link' : 'div'" :to="link">
    <h3>
      {{ title }}
      <DraftLabel :id="itemId" />
    </h3>

    <p v-if="categories.length" class="category mt-0">
      <span v-for="(cat, i) in categories" :key="cat._key">
        {{ getCategoryTitle(cat._ref) }}
        <span v-if="i != categories.length - 1">|</span>
      </span>
    </p>
  </component>
</template>

<script>
export default {
  props: {
    itemId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: function () {
        return []
      },
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
