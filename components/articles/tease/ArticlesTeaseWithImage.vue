<template>
  <component :is="link ? 'nuxt-link' : 'div'" :to="link">
    <KataImage
      v-if="image.asset"
      :image="image"
      :max-width="650"
      :ratio="6 / 4"
      sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
      class="mb-medium"
    />
    <h3>
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
      default: function () {
        return {}
      },
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
  },
}
</script>
