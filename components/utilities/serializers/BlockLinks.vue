<template>
  <div v-if="link" class="-mx-2 my-medium">
    <KataLink
      v-for="item in link"
      v-bind="item"
      :key="item._key"
      class="mx-2 inline-block"
    />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Array,
      default: null,
    },
  },
}
</script>
