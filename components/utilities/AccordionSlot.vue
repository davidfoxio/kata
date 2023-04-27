<template>
  <div class="accordion-item">
    <div
      class="accordion-trigger pb-small"
      :class="{ active: visible }"
      @click="open"
    >
      <h3 v-if="title" v-kata-html="title" />
      <div class="plus" :class="{ open: visible }"></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion-content pb-small">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    // can set startOpen to true to show as open to begin with
    startOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: null,
      visible: false,
    }
  },
  mounted() {
    if (this.startOpen) {
      this.visible = true
    }
  },
  methods: {
    open() {
      this.visible = !this.visible
    },
    start(el, done) {
      el.style.height = el?.scrollHeight + 'px'
      done
    },
    end(el) {
      el.style.height = ''
    },
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion-item {
  border-bottom: 1px solid $primary;
  position: relative;
}

.accordion-trigger {
  cursor: pointer;
  padding-right: 50px;
  position: relative;

  .plus {
    @apply absolute inset-y-0 right-0 m-auto;
    width: 15px;
    height: 15px;
    &:before {
      content: '';
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      @apply absolute bg-primary w-full inset-0 m-auto;
      height: 3px;
    }
    &:after {
      content: '';
      @apply inset-0 h-full bg-primary absolute m-auto;
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      opacity: 1;
      width: 3px;
    }

    &.open {
      &:before {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
        opacity: 0;
      }
      &:after {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
      }
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
