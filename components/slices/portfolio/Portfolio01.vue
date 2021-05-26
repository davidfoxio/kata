<template>
  <Portfolio04 :thumbnails="thumnails" />
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
