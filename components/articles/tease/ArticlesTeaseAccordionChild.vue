<template>
  <!-- id and slug are required! -->
  <div :id="itemId" class="accordion-item pb-small mb-small">
    <div
      class="accordion-trigger"
      :class="{
        active: slug && slug.current == $route.params.slug,
      }"
      @click="toggle"
    >
      <h3 v-if="title" v-kata-html="title" class="label-1" />

      <p v-if="categories && categories.length" class="label-2 mt-0">
        <span v-for="(cat, i) in categories" :key="cat._key">
          {{ getCategoryTitle(cat._ref) }}
          <span v-if="i != categories.length - 1">|</span>
        </span>
      </p>

      <div
        class="plus"
        :class="{
          open: slug && slug.current == $route.params.slug,
        }"
      ></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <n-child
        v-if="slug && slug.current == $route.params.slug"
        :slug="slug"
        class="accordion-content pt-small"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    routePath: {
      type: String,
      default: '/faqs/',
    },
    itemId: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: null,
    },
    slug: {
      type: Object,
      default: null,
    },
    body: {
      type: Array,
      default: null,
    },
    textBody: {
      type: Array,
      default: null,
    },
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      index: null,
      visible: false,
    }
  },
  methods: {
    toggle() {
      if (this.slug.current != this.$route.params.slug) {
        this.$router.push({
          path: this.getLink(this.itemId),
        })
      } else {
        this.$router.push({
          path: this.routePath,
        })
      }
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
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
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
