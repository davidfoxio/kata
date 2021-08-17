<template>
  <nav class="kata-menu">
    <ul class="kata-menu-list p-0">
      <li
        v-for="(item, i) in menu"
        :key="item._key"
        ref="list"
        class="nav-link-wrap mb-0 pb-small lg:pb-0"
        :class="{
          'has-children relative': item.children && item.children.length > 0,
        }"
        @mouseover="isMobile ? null : openChild(item, i)"
        @mouseleave="isMobile ? null : closeChild(item, i)"
      >
        <n-link
          v-if="item.link && link(item.link._ref)"
          :to="link(item.link._ref).path"
          class="nav-link inline-block"
          @click.native="clickFn"
          v-kata-html="
            item.noLinkJustTitle
              ? item.noLinkJustTitle
              : link(item.link._ref).title
          "
        />
        <p
          v-else-if="item.noLinkJustTitle"
          class="nav-link inline-block cursor-pointer"
          v-kata-html="item.noLinkJustTitle"
        />
        <button
          v-if="item.children"
          title="Show/Hide Child Menu"
          class="inline-block lg:hidden dropdown-trigger border-none"
          @click="toggleChild(item, i)"
        ></button>
        <div v-if="item.children" class="child-menu">
          <div v-for="child in item.children" :key="child._key">
            <n-link
              v-if="child.link && link(child.link._ref)"
              :to="link(child.link._ref).path"
              class="nav-link inline-block"
              @click.native="clickFn"
              v-kata-html="
                child.customTitle
                  ? child.customTitle
                  : link(child.link._ref).title
              "
            />
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
    clickFn: {
      type: Function,
      default: () => {
        // console.log('no click function available')
      },
    },
  },
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    this.mq()
    if (process.client) {
      window.addEventListener('resize', this.mq)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.mq)
    }
  },
  methods: {
    mq() {
      this.isMobile = window.matchMedia('(max-width: 899px)').matches
    },
    onClick() {
      if (this.click_fn) {
        this.click_fn()
      }
    },
    openChild(item, i) {
      if (item.children && item.children.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        if (dropdown) dropdown.classList.add('open')
      }
    },
    closeChild(item, i) {
      if (item.children && item.children.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        if (dropdown) dropdown.classList.remove('open')
      }
    },
    toggleChild(item, i) {
      if (item.children && item.children.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        let dropdownTrigger =
          this.$refs.list[i].querySelector('.dropdown-trigger')
        if (dropdown && dropdown.classList.contains('open')) {
          dropdown.classList.remove('open')
        } else {
          dropdown.classList.add('open')
        }
        if (dropdownTrigger) dropdownTrigger.classList.toggle('active')
      }
    },
    scrollToAnchor(anchor) {
      let elem = document.getElementById(anchor)
      window.scrollBy({
        top: elem.getBoundingClientRect().top - 100,
        left: 0,
        behavior: 'smooth',
      })
    },
    link(ref) {
      return this.$store.getters['references/getLinkFromReference'](ref)
    },
  },
}
</script>

<style lang="scss" scoped>
.child-menu {
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease;
  &.open {
    opacity: 1;
    pointer-events: all;
  }
  a {
    font-size: 14px;
    margin-bottom: 7px;
    font-weight: bold;
    transition: 0.4s ease;

    &:hover {
      color: $secondary;
    }
  }
  @include lg-up {
    background: white;
    padding: 15px;
    position: absolute;
    top: 100%;
    left: -15px;
    right: 0;
    margin: auto;
    min-width: 200px;
  }
  @include lg-down {
    max-height: 0;
    overflow: hidden;

    &.open {
      max-height: 100%;
    }
  }
}
.dropdown-trigger {
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 1;
  outline: none !important;

  &::before {
    border-style: solid;
    border-width: 2px 2px 0 0;
    border-color: $primary;
    content: '';
    display: inline-block;
    height: 50%;
    transition: 0.5s ease;
    transform: rotate(135deg);
    width: 50%;
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }

  &.active {
    &:before {
      transform: rotate(-45deg);
      top: 0;
    }
  }
}
</style>
