<template>
  <video
    v-if="video"
    ref="video"
    controls
    controlsList="nodownload"
    disablePictureInPicture
    preload="true"
    playsinline
  ></video>
</template>

<script>
import Hls from 'hls.js'

export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    playbackId() {
      return this.$store.getters['references/getPlaybackIdFromRef'](
        this.video.asset._ref
      )
    },
  },
  mounted() {
    if (this.video) {
      // https://github.com/video-dev/hls.js/#embedding-hlsjs
      const videoSrc = `https://stream.mux.com/${this.playbackId}.m3u8`
      const video = this.$refs.video

      if (Hls.isSupported()) {
        let hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(video)
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc
      }
    }
  },
}
</script>

<style lang="scss" scoped>
video::-internal-media-controls-overlay-cast-button {
  display: none;
}
</style>
