<template>
  <div
    class="slider"
    :class="{ loaded: !loading }"
  >
    <div ref="slider" class="css-slider">
      <div
        v-for="(item, i) in images"
        :key="item._id"
        class="slide-image"
        :class="{
          active: sliderindex == i + 1,
          'last-active': lastActive(i),
        }"
      >
        <KataImage
          v-if="item"
          data-not-lazy
          :image="item"
          :ratio="ratio"
          :max-width="1500"
          class="h-full max-h-screen object-cover w-full"
          sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
        />
      </div>
    </div>
    <div class="slide-transition" :class="{ play: animate }"></div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: null,
    },
    ratio: {
      type: Number,
      default: 4 / 3,
    },
  },
  data() {
    return {
      loading: true,
      animate: false,
      sliderindex: 1,
      sliderWidth: '0px',
    }
  },
  mounted() {
    setInterval(() => {
      if (this.sliderindex < this.images.length) {
        this.sliderindex++
      } else {
        this.sliderindex = 1
      }
    }, 4000)
    this.handleResize()
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (process.client) {
        let pos = this.$refs?.slider?.getBoundingClientRect()
        console.log('pos', pos)
        if (pos) {
          this.sliderWidth = pos.width + 'px;'
        } else {
          this.sliderWidth = '50vw;'
        }
      }
    },
    lastActive(i) {
      if (this.sliderindex - 1 == 0) {
        return i + 1 == this.images.length
      }

      return this.sliderindex - 1 == i + 1
    },
  },
}
</script>

<style lang="scss" scoped>
.css-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 50vh;

  img {
    max-height: calc(100vh - var(--header-height));
    object-fit: cover;
    height: 100%;
    min-height: 50vh;
    object-position: center center;
  }
  @include lg-up {
    min-height: 70vh;
    img {
      min-height: 70vh;
    }
  }

  .slide-image {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s ease-in;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;

    &.last-active {
      z-index: 3;
      width: 100%;
      transition: 0;
      opacity: 1;
    }

    &.active {
      z-index: 5;
      width: 100%;
      transition: 0;
      opacity: 1;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
