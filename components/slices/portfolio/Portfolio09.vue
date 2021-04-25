<template>
  <div class="portfolio-9 w-r10/12 mx-r1/12">
    <h2 v-if="title" class="mb-large heading-2 text-center" v-html="title" />
    <div
      v-if="thumbnails"
      class="flex flex-wrap sm:-mr-medium sm:content-start"
    >
      <div
        v-for="(item, index) in thumbnails"
        :key="item.title"
        ref="items"
        class="item lg:w-1/3 sm:w-1/2 sm:pr-medium mb-medium"
        @mouseenter="!isTouch ? toggleTile(index) : null"
        @mouseleave="!isTouch ? toggleTile(index) : null"
        @click="isTouch ? toggleTile(index) : null"
      >
        <LinkSlot :link="item.link" class="relative block">
          <KataImage v-if="item.image" :image="item.image" class="background" />
          <div v-else class="background bg-primary" />
          <div class="overlay">
            <div class="title">
              <p class="heading-1">{{ '0' + (index + 1) }}</p>
              <h3 v-if="item.title" class="leabel-1" v-html="item.title" />
            </div>
            <div class="body">
              <p v-if="item.text" class="para-2" v-html="item.text" />
            </div>
          </div>
        </LinkSlot>
      </div>
    </div>
  </div>
</template>

<script>
import { title } from '../shared'
export default {
  mixins: [title],
  props: {
    thumbnails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isTouch: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      for (let index = 0; index < this.thumbnails.length; index++) {
        const element = this.$refs.items[index]
        element.classList.remove('active')
        let height = this.$refs.items[index].querySelector('.title')
          .clientHeight
        this.$refs.items[index].querySelector('.overlay').style.paddingTop =
          height + 100 + 'px'
      }
    })
    if (process.client) {
      this.isTouch = this.is_touch_device()
      console.log('touch', this.isTouch)
    }
  },
  methods: {
    toggleTile(index) {
      this.$refs.items[index].classList.toggle('active')
      console.log()
    },
    is_touch_device() {
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        //window.TouchEvent
        console.log('touch start')
        return true
      }

      if (window.DocumentTouch && document instanceof DocumentTouch) {
        console.log('DocumentTouch')
        return true
      }

      const prefixes = ['', '-webkit-', '-moz-', '-o-', '-ms-']
      const queries = prefixes.map((prefix) => `(${prefix}touch-enabled)`)

      console.log('matchMedia', window.matchMedia(queries.join(',')).matches)

      return window.matchMedia(queries.join(',')).matches
    },
  },
}
</script>

<style scoped lang="scss">
.portfolio-9 {
  .relative {
    height: 100%;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: 0.7s ease;

    &:after {
      content: '';
      height: 0;
      width: 100%;
      background: $secondary;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: 0.7s ease;
    }
  }

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .overlay {
    z-index: 2;
    position: relative;
    padding: 100px 30px 30px;
    color: white;
    height: 100%;

    @include sm-down {
      padding: 150px 30px 30px;
    }
  }

  .body {
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    transition: 1s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .title {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
    transition: 0.7s ease;

    h3 {
      margin: 0;
    }
  }

  .active .relative {
    transform: scale(1.05);
    &:after {
      height: 100%;
    }
    .body {
      opacity: 1;
      pointer-events: all;
    }
    .title {
      transform: translateY(calc(-100% - 30px));
      bottom: unset;
    }
  }
}
</style>

<style lang="scss">
.portfolio-9 {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
