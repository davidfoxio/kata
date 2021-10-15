<template>
  <div v-if="src || dataSrc" class="vimeo-wrap">
    <iframe
      title="vimeo-player"
      width="640"
      height="360"
      :src="src || dataSrc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    dataSrc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.vimeo-wrap {
  width: 100%;
  position: relative;
  padding-top: calc((360 / 640) * 100%);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
