<template>
  <div class="feature-list-01">
    <Feature01
      v-for="(feature, i) in features"
      v-bind="feature"
      :id="'feature-list-item-' + i"
      :key="feature._key"
      :ratio="ratio"
      :reversed="i % 2 == 0"
      class="mb-large slice-animation"
    />
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
    },
    ratio: {
      type: Number,
      default: 685 / 514,
    },
  },
}
</script>
