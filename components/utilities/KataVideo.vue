<template>
  <video
    v-if="video"
    ref="video"
    v-observe-visibility="isVisible"
    class="kata-video"
    nocontrols
    muted
    :autoplay="false"
    preload="true"
    playsinline
    :poster="image"
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
  data() {
    return {
      // video: '',
      resizeTimer: null,
      playPromise: false,
      isMobile: false,
      image: '',
      loaded: false,
    }
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
      this.image = `https://image.mux.com/${this.playbackId}/thumbnail.jpg?time=0`
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
  methods: {
    isVisible(isVisible, entry) {
      // if (!this.isMobile) {
      let context = this
      this.$nextTick(() => {
        let video = context.$refs.video
        if (isVisible) {
          context.playPromise = video.play()
        } else {
          if (context.playPromise && context.playPromise !== undefined) {
            context.playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
                video.pause()
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
                console.log(error)
              })
          }
        }
      })
      // }
    },
  },
}
</script>
