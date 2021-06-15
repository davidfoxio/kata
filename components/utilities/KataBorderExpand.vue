<template>
  <div
    ref="landscape-expand"
    class="kata-border-expand"
    :class="{ 'slice-animation': !isHero, 'hero-animation': isHero }"
  >
    <!-- <div v-if="img" class="image-wrap">
      <KataImage :image="img" />
    </div> -->
    <div class="colour-background"></div>
    <div class="overlay w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHero: {
      type: Boolean,
      default: false,
    },
    // img: {
    //   type: Object,
    //   default: null,
    // },
  },
}
</script>

<style lang="scss" scoped>
.kata-border-expand {
  width: 100%;
  transition: 0.5s ease;
  position: relative;
  overflow-x: hidden;

  @keyframes landscapeExpand {
    0% {
      width: var(--screen-border-size);
    }
    100% {
      width: 0;
    }
  }

  .image-wrap,
  .colour-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;

    img {
      object-fit: cover;
      width: 100vw;
      height: 100%;
    }

    &:before,
    &:after {
      content: '';
      width: 20px;
      height: 100%;
      position: absolute;
      top: 0;
      background: white;
      z-index: 5;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }

  .colour-background,
  .image-wrap {
    &::before,
    &::after {
      animation-name: landscapeExpand;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-play-state: paused;
      animation-delay: calc(var(--slice-move) * -1s);
      animation-iteration-count: 1;
      animation-fill-mode: both;
      width: var(--screen-border-size);
    }
  }

  &.img {
    position: relative;

    &:after {
      content: '';
      background: linear-gradient(
        92.15deg,
        rgba(0, 0, 0, 0.8) 1.81%,
        rgba(0, 0, 0, 0) 98.4%
      );
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      @media (max-width: 700px) {
        width: 80%;
      }
    }
  }

  .colour-background {
    background: black;
  }

  .overlay {
    // padding-top: 5%;
    // padding-bottom: 5%;
    position: relative;
    z-index: 1;
    color: white;
  }
}
</style>
