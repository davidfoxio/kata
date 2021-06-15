<template>
  <div class="py-slice-half mb-slice">
    <nav class="w-r10/12 mx-r1/12 text-max">
      <h2 v-if="menuTitle" class="mb-medium">{{ menuTitle }}</h2>
      <ol :class="{ numbered: showNumbers }">
        <li v-for="item in items" :key="item._key" class="mb-small">
          <a
            :href="'#' + camelCase(item.title)"
            @click.prevent="scrollToAnchor(camelCase(item.title))"
          >
            {{ item.title }}
          </a>
        </li>
      </ol>
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

<style>
ol {
  columns: 3 300px;
  column-gap: var(--spacing-medium);
}
.numbered {
  list-style: decimal;
}
</style>
