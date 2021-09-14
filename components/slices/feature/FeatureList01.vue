<template>
  <div class="feature-list-01">
    <Feature01
      v-for="(feature, i) in features"
      :key="feature._key"
      v-bind="feature"
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
  },
}
</script>
