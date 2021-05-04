<template>
  <div class="articles-filters">
    <div v-for="filterGroup in filters" :key="filterGroup.label">
      <h3 v-if="categoryLabels">{{ filterGroup.label }}</h3>

      <div v-if="filterGroup.terms" class="flex flex-wrap">
        <div
          v-for="filter in filterGroup.terms"
          :key="filter.id"
          class="filter-wrapper w-1/2 mr-small md:w-auto block"
        >
          <button
            type="button"
            class="block w-max filter-btn btn-large outline-none"
            :class="{ selected: filter.active }"
            @click="toggleFilter(filter.id, filterGroup.label)"
          >
            {{ filter.label }}
          </button>
        </div>
    </div>
    <button
            type="button"
            class="btn-secondary btn-small !py-1 mt-small"
            @click="clear(filterGroup.label)"
          >
            Clear
          </button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    articleInstance: {
      type: String,
      required: true,
    },
    categoryLabels: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filters() {
      return this.$store.getters['articles/getFiltersIfExists']({
        instance: this.articleInstance,
      })
    },
  },
  methods: {
    toggleFilter(filterId, filterGroup) {
      this.$store.commit('articles/toggleFilter', {
        filterId: filterId,
        filterGroup: filterGroup,
        instance: this.articleInstance,
      })
    },
    clear(filterGroup) {
      this.$store.commit('articles/clear', {
        filterGroup: filterGroup,
        instance: this.articleInstance,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  border-color: transparent;
  @apply border-b-2;
  text-transform: var(--buttonTextTransform, none);
  transition: 0.4s ease;

  &:focus,
  &:hover,
  &.selected {
    border-color: var(--buttonBorderColour, var(--primary));
    @apply outline-none;
  }

}
</style>
