<template>
  <span
    v-if="isDraft(id)"
    class="text-base text-red-600 p-1 border border-red-900"
  >
    Draft
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
