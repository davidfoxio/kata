<template>
  <nav class="kata-menu">
    <ul class="kata-menu-list p-0">
      <li v-for="item in menu" :key="item._key" class="nav-link-wrap mb-0">
        <div v-if="typeof item.link == 'object'">
          <n-link
            v-if="item.link._ref && link(item.link._ref)"
            :to="link(item.link._ref).path"
            class="nav-link inline-block"
            @click.native="clickFn"
          >
            {{ item.noLinkJustTitle ? item.noLinkJustTitle : link(item.link._ref).title }}
          </n-link>
        </div>
        <div v-else>
          <n-link
            v-if="item._ref && link(item._ref)"
            :to="link(item._ref).path"
            class="nav-link inline-block"
            @click.native="clickFn"
          >
            {{ item.noLinkJustTitle ? item.noLinkJustTitle : link(item._ref).title }}
          </n-link>
          <a
            v-else
            :href="item.link"
            class="nav-link inline-block"
            @click="clickFn"
          >
            {{ item.noLinkJustTitle ? item.noLinkJustTitle : item.title }}
          </a>
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
        console.log('no click function available')
      },
    },
  },

  methods: {
    link(ref) {
      return this.$store.getters['references/getLinkFromReference'](ref)
    },
  },
}
</script>
