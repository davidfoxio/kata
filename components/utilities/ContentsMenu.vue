<template>
  <div class="py-large mb-slice contents-menu">
    <nav class="w-r10/12 mx-r1/12 text-max">
      <div class="flex relative">
        <h2 v-if="menuTitle" class="heading-3">{{ menuTitle }}</h2>
        <button
          @click="showNav = !showNav"
          class="plus"
          :class="{ open: showNav }"
        ></button>
      </div>
      <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <ol
          v-show="showNav"
          :class="{ numbered: showNumbers, open: showNav }"
          class="menu pt-medium"
        >
          <li v-for="item in items" :key="item._key" class="mb-small">
            <a
              :href="'#' + camelCase(item.title)"
              @click.prevent="scrollToAnchor(camelCase(item.title))"
              @click="showNav = false"
            >
              {{ item.menuTitle ? item.menuTitle : item.title }}
            </a>
          </li>
        </ol>
      </transition>
    </nav>
  </div>
</template>

<script>
import camelCase from 'lodash.camelcase'

export default {
  props: {
    menuTitle: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
    showNumbers: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      showNav: false,
    }
  },
  methods: {
    camelCase(item) {
      return camelCase(item)
    },
    scrollToAnchor(anchor) {
      let elem = document.getElementById(anchor)
      window.scrollBy({
        top: elem.getBoundingClientRect().top - 150,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
.contents-menu {
  .menu {
    columns: 3 300px;
    column-gap: var(--spacing-medium);
  }
  .numbered {
    list-style: decimal;
  }
  .plus {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    outline: none !important;
    appearance: none !important;
    &:before {
      content: '';
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      position: absolute;
      background-color: $primary;
      width: 100%;
      height: 3px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:after {
      content: '';
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      opacity: 1;
      position: absolute;
      background-color: $primary;
      width: 3px;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
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
}
</style>
