<template>
  <div class="slice feature-9 w-r10/12 mx-r1/12">
    <h2 v-if="title" class="text-center mb-large" v-html="title" />
    <transition-group
      name="fade-list"
      class="flex -mx-small mb-large flex-wrap"
      tag="div"
    >
      <div
        v-for="(item, i) in featureTabs"
        :key="item._key"
        class="inline-block transition-all duration-500"
      >
        <button
          class="focus:outline-none border-b-2 mx-small transition-all duration-500 label-1 hover:border-secondary"
          :class="{
            'border-secondary': i == currentTab,
            'border-tertiary border-opacity-25': i != currentTab,
          }"
          @click="click(i)"
        >
          {{ item.tabName }}
        </button>
      </div>
    </transition-group>

    <transition-group
      name="staggered-fade"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-for="(item, i) in featureTabs"
        v-show="i == currentTab"
        :key="item._key"
        class="sm:flex flex-wrap list-fade-item sm:-mx-small"
      >
        <div
          v-for="elem in item.features"
          :key="elem._key"
          class="sm:px-small mb-medium sm:w-1/2"
        >
          <h2 v-if="elem.title" class="mb-small label-1" v-html="elem.title" />
          <SanityEmbedContent v-if="elem.textBody" :blocks="elem.textBody" />
        </div>
        <KataLinks
          v-if="item.links && item.links.link"
          class="sm:px-small mb-medium sm:w-1/2 self-end"
          :links="item.links.link"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import { title } from '../shared'
export default {
  mixins: [title],
  props: {
    featureTabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentTab: 0,
    }
  },
  methods: {
    click(i) {
      this.currentTab = i
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      setTimeout(function () {
        el.style.height = 'auto'
        el.style.opacity = 1
        setTimeout(function () {
          done()
        }, 500)
      }, 500)
    },
    leave: function (el, done) {
      el.style.opacity = 0
      setTimeout(function () {
        el.style.height = 0
        done()
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.list-fade-item {
  transition: all 0.5s;
}
</style>
