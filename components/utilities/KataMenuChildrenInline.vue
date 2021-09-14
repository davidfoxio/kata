<template>
  <nav class="kata-menu">
    <ul class="kata-menu-list p-0">
      <li
        v-for="(item, i) in menu"
        :key="item._key"
        ref="list"
        class="nav-link-wrap mb-0 pb-small"
      >
        <div
          class="top"
          :class="{
            'has-children relative flex flex-wrap items-center':
              item.children && item.children.length > 0,
          }"
        >
          <n-link
            v-if="item.link && link(item.link._ref)"
            :to="link(item.link._ref).path"
            class="heading-3 inline-block transition-all ease-in"
            @click.native="clickFn"
            v-kata-html="
              item.noLinkJustTitle
                ? item.noLinkJustTitle
                : link(item.link._ref).title
            "
          />
          <p
            v-else
            class="heading-3 inline-block title-only"
            :class="{
              'title-has-children cursor-pointer': item.children,
            }"
            @click="
              item.children && item.children.length
                ? toggleChild(item, i)
                : null
            "
            v-kata-html="item.noLinkJustTitle"
          />
          <button
            v-if="item.children && item.children.length"
            title="Show/Hide Child Menu"
            class="inline-block dropdown-trigger border-none ml-small"
            @click="toggleChild(item, i)"
          ></button>
        </div>
        <div
          v-if="item.children && item.children.length"
          class="child-menu w-full"
        >
          <div v-for="child in item.children" :key="child._key">
            <n-link
              v-if="child.link && link(child.link._ref)"
              :to="link(child.link._ref).path"
              class="label-1 block"
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
  methods: {
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

<style lang="scss">
.menu-panel.open .child-menu {
  pointer-events: none;

  &.open {
    pointer-events: all;
  }
}
</style>
<style lang="scss" scoped>
.child-menu {
  opacity: 0;
  transition: 0.4s ease;
  max-height: 0;
  overflow: hidden;

  a {
    margin-bottom: 7px;
    font-weight: bold;
    transition: 0.4s ease;

    &:hover {
      color: $secondary;
    }
  }

  &.open {
    max-height: 100%;
    opacity: 1;
    padding-top: var(--spacing-small);
  }
}
.has-children {
  .title-has-children {
    transition: 0.5s ease;
  }
  &:hover {
    .dropdown-trigger {
      &::before,
      &::after {
        background: $secondary;
      }
    }
    .title-has-children {
      color: $secondary;
    }
  }
}
.dropdown-trigger {
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 1;
  outline: none !important;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    height: 4px;
    width: 18px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: currentColor;
    transition: 0.5s ease;
  }

  &::after {
    transform: rotate(90deg);
  }

  &.active {
    &:after {
      transform: rotate(0);
    }
  }
}
</style>
