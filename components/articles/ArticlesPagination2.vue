<template>
  <div
    v-if="currentPage && totalPages && totalPages != 1"
    class="flex items-center space-x-small justify-center text-center"
  >
    <button
      class="label-1 px-[5px] !outline-none hover:text-tertiary"
      :disabled="currentPage == 1"
      @click="paginate('prev')"
    >
      &#8249;
    </button>
    <p>{{ currentPage }}/{{ totalPages }}</p>
    <button
      class="label-1 px-[5px] !outline-none hover:text-tertiary"
      :disabled="currentPage == totalPages"
      @click="paginate('next')"
    >
      &#8250;
    </button>
  </div>
</template>

<script>
// can have custom search articles function
// include as below:
// <ArticlesPagination2
//   :total="total"
//   :per-page="pagination"
//   class="mb-large"
//   @paginationTriggerSearch="paginationTriggerSearch"
// />
export default {
  props: {
    perPage: {
      type: Number,
      default: 12,
    },
    total: {
      type: Number,
      default: 12,
    },
  },
  data: () => ({ min: 0, max: 12, currentPage: 1 }),
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
  },
  mounted() {
    this.max = this.perPage
  },
  methods: {
    paginate(dir) {
      if (dir == 'next') {
        this.currentPage++
        this.min = this.min + this.perPage
        this.max = this.max + this.perPage
      } else {
        this.currentPage--
        this.min = this.min - this.perPage
        this.max = this.max - this.perPage
      }
      console.log('paginate')
      this.$emit('paginationTriggerSearch', this.min, this.max) //from articles mixin on the main page
    },
  },
}
</script>
