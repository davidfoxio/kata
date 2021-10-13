<template>
  <component
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
    class="tease-with-image"
  >
    <KataImage
      v-if="image"
      :image="image"
      :max-width="650"
      :ratio="6 / 4"
      sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
      class="w-full"
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
      <DraftLabel v-if="itemId" :id="itemId" />
    </h3>
    <p v-if="text" v-kata-html="text" class="text mt-small" />
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
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: null,
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
