<template>
  <transition :key="query" name="lightbox-fade">
    <!-- TODO: try params instead? -->
    <!-- pass in query that matches the one set in sanity, eg. <Lightbox query="video"> -->
    <div
      v-show="$route.query && $route.query.lightbox == query"
      class="lightbox fixed top-0 left-0 flex items-center justify-center w-full h-full"
    >
      <n-link
        :to="{ query: null }"
        title="Close"
        class="lightbox-underlay bg-primary opacity-95 fixed top-0 left-0 w-full h-full cursor-default"
        @click.native="onClose"
      ></n-link>
      <div class="lightbox-inner bg-white p-large relative">
        <slot></slot>
        <n-link
          :to="{ query: null }"
          title="Close"
          class="close-btn"
          @click.native="onClose"
        ></n-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.lightbox {
  z-index: 100;

  .lightbox-inner {
    max-height: 95%;
    max-width: 95%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
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
}
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.5s;
}
.lightbox-fade-enter,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
