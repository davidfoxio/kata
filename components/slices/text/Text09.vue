<template>
  <div class="slice text-9 w-r10/12 mx-r1/12">
    <div class="sticky md:w-1/2 md:mr-medium">
      <h2 class="mb-medium fade-up" v-html="title" v-if="title"></h2>
    </div>
    <div ref="content" class="content md:w-1/2 md:ml-medium">
      <!-- <h3 v-if="superHeading" class="mb-medium fade-up" v-html="superHeading" /> -->
      <div v-if="list" class="sticky-content">
        <div v-for="(item, i) in list" :key="i" class="fade-up mb-slice">
          <h3 v-if="item.title" v-html="item.title" class="mb-small" />
          <p v-if="item.text" v-html="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title } from '../shared'
export default {
  mixins: [superHeading, title],
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
      imgList: [],
      contentVisible: false,
    }
  },
  // mounted() {
  //   if (process.client) {
  //     window.addEventListener('scroll', this.handleScroll)
  //   }
  // },
  // beforeDestroy() {
  //   if (process.client) {
  //     window.removeEventListener('scroll', this.handleScroll)
  //   }
  // },
  // methods: {
  //   handleScroll() {
  //     if (!this.contentVisible) {
  //       let top = this.$refs.sticky360.offsetTop
  //       if (top - 100 < window.pageYOffset) {
  //         this.$refs.content.style.opacity = 1
  //         this.contentVisible = true
  //       }
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.text-9 {
  @include md-down {
    .content,
    .sticky {
      padding-bottom: 5%;
    }
  }
  @include md-up {
    display: flex;
    position: relative;
    align-items: flex-start;
    min-height: 100vh;

    .content {
      margin-top: calc(var(--header-height) + var(--spacing-large));
      // margin-bottom: 20%;
    }

    .sticky {
      display: flex;
      align-items: center;
      position: sticky; //overflow-x hidden on body breaks this
      top: calc(var(--header-height) + var(--spacing-slice));
      // top: 50%;
      // transform: translateY(-50%);
    }
  }
}
</style>
