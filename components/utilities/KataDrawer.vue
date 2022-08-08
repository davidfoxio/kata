<template>
  <div class="kata-drawer relative">
    <transition name="fade">
      <button
        v-if="active"
        title="Close"
        class="kata-drawer-underlay fixed top-0 left-0 w-full h-full cursor-default bg-black"
        :class="{
          'opacity-50': active,
          'opacity-0': !active,
        }"
        @click="close"
      />
    </transition>
    <transition name="slide">
      <div
        v-if="active"
        class="kata-drawer-inner fixed top-0 right-0 flex items-center justify-end h-full w-[90%] md:w-1/2"
      >
        <div
          class="kata-drawer-content bg-primary relative w-full h-full max-h-screen overflow-scroll"
        >
          <slot></slot>
          <button title="Close" class="close-btn" @click="close"></button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    showCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: this.isActive,
    }
  },
  watch: {
    isActive: function (newVal, oldVal) {
      // watch it
      this.active = newVal
    },
  },
  methods: {
    close() {
      console.log('close')
      this.active = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.kata-drawer {
  z-index: 9001;
}
.opacity-95 {
  opacity: 0.95;
}
.close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: black;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
.kata-drawer-underlay {
  transition: 0.5s ease;
}
.slide-enter-active,
.slide-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.slide-enter,
.slide-leave-to {
  transition: all 0.3s linear;
  transform: translateX(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
