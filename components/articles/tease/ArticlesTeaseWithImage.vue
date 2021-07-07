<template>
  <component :is="link ? 'nuxt-link' : 'div'" :to="link">
    <KataImage
      :image="image"
      :max-width="650"
      :ratio="6 / 4"
      sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
    />
    <p v-if="categories && categories.length" class="category mt-small">
      <span v-for="(cat, i) in categories" :key="cat._key">
        {{ getCategoryTitle(cat._ref) }}
        <span v-if="i != categories.length - 1">|</span>
      </span>
    </p>
    <p v-if="date" class="date mt-small">
      {{ date | formatDate }}
    </p>
    <h3 class="mt-small">
      {{ title }}
      <DraftLabel :id="itemId" />
    </h3>
  </component>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    itemId: {
      type: String,
      required: true,
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
    categories: {
      type: Array,
      default: function () {
        return []
      },
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
