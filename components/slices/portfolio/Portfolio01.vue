<template>
  <Portfolio04 :thumbnails="thumbnails" />
</template>

<script>
export default {
  props: {
    thumbnails: {
      type: Array,
      required: true,
    },
  },
}
</script>
