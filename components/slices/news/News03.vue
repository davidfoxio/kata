<template>
  <div class="news-3 slice">
    <h2 v-if="title" class="heading-2 mb-large text-center" v-html="title" />

    <ArticlesResultsSlider v-if="articles" :articles="articles">
      <template #tease="x">
        <CustomTeaseImageOverlay
          :item-id="x.item._id"
          :link="getLink(x.item._id)"
          :title="x.item.title"
          :media="[x.item.image]"
        />
      </template>
    </ArticlesResultsSlider>
  </div>
</template>

<script>
import { title } from '../shared'
export default {
  mixins: [title],
  // props: {
  //   articles: {
  //     type: Array,
  //     default: null,
  //   },
  // },
  computed: {
    articles() {
      // TODO: allow different article types here??
      let news = this.$store.state.articles.news?.featured
      let events = this.$store.state.articles.events?.featured
      let list = news.concat(events)

      return list.sort(function (a, b) {
        console.log(a, b)
        if (a && b) {
          let aDate = new Date(a._createdAt)
          let bDate = new Date(b._createdAt)

          if (aDate > bDate) {
            return -1
          }
          if (aDate < bDate) {
            return 1
          }
        }
        return 0
      })
    },
  },
  methods: {
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
  },
}
</script>
