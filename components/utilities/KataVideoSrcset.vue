<template>
  <video
    nocontrols
    muted
    autoplay
    :poster="mobileImage && itemIsSet(mobileImage) ? getImage(mobileImage) : ''"
  >
    <source v-if="video" :src="video" type="video/mp4" />
  </video>
</template>

<script>
export default {
  props: {
    video1920: {
      type: Object,
      default: null,
    },
    video1280: {
      type: Object,
      default: null,
    },
    video960: {
      type: Object,
      default: null,
    },
    video640: {
      type: Object,
      default: null,
    },
    mobileImage: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      video: '',
      resizeTimer: null,
    }
  },
  mounted() {
    if (process.client) {
      this.setVideo()
      window.addEventListener('resize', this.setVideo)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setVideo)
  },
  methods: {
    setVideo() {
      clearTimeout(this.resizeTimer)
      let context = this
      this.resizeTimer = setTimeout(function () {
        console.log('resizing')

        if (window.matchMedia('(max-width: 449px)').matches) {
          context.video = ''
        } else if (
          window.matchMedia('(max-width: 640px) and (min-width: 450px)')
            .matches &&
          context.itemIsSet(context.video640)
        ) {
          context.video = context.getLink(context.video640.asset._ref)
          console.log('640px video')
        } else if (
          window.matchMedia('(max-width: 960px)').matches &&
          context.itemIsSet(context.video960)
        ) {
          context.video = context.getLink(context.video960.asset._ref)
          console.log('960px video')
        } else if (
          window.matchMedia('(max-width: 1280px)').matches &&
          context.itemIsSet(context.video1280)
        ) {
          context.video = context.getLink(context.video1280.asset._ref)
          console.log('1280px video')
        } else if (
          window.matchMedia('(min-width: 1281px)').matches &&
          context.itemIsSet(context.video1920)
        ) {
          context.video = context.getLink(context.video1920.asset._ref)
          console.log('1920px video')
        }
      }, 250)
    },
    itemIsSet(item) {
      return item && item.asset?._ref
    },
    getLink(ref) {
      return this.$store.getters['references/getLinkFromReference'](ref)
    },
    getImage(src) {
      return this.$imgUrl(src).width('640').url()
    },
  },
}
</script>
