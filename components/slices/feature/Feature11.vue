<template>
  <div class="slice feature-11 w-r10/12 mx-r1/12">
    <transition-group
      name="fade-list"
      class="flex -mx-small mb-medium flex-wrap fade-up"
      tag="div"
    >
      <div
        v-for="(item, i) in featureTabs"
        :key="item._key"
        class="inline-block transition-all duration-500"
      >
        <button
          class="focus:outline-none border-b-2 mx-small"
          :class="{
            'border-tertiary': i == currentTab,
            'border-transparent': i != currentTab,
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
      class="fade-up"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-for="(item, i) in featureTabs"
        v-show="i == currentTab"
        :key="item._key"
        class="flex flex-col sm:flex-row list-fade-item"
      >
        <div class="sm:w-1/2 sm:mr-large order-2 sm:order-1 py-medium">
          <h2 v-if="item.title" v-kata-html="item.title" />
          <SanityEmbedContent
            v-if="item.textBody"
            :blocks="item.textBody"
            class="mt-small"
          />
          <KataLinks v-if="item.links" :links="item.links" class="mt-small" />
        </div>
        <div class="sm:w-1/2 order-1 sm:order-2 mb-large sm:mb-0">
          <KataImage
            v-if="
              (item.standardImage && item.standardImage.image) || item.image
            "
            :image="
              item.standardImage && item.standardImage.image
                ? item.standardImage.image
                : item.image
            "
            :ratio="685 / 514"
            :max-width="1500"
            sizes="xl:100vw md:45vw"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
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
