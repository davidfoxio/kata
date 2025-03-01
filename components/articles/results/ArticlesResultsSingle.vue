<template>
  <div class="article-results-single">
    <div class="md:flex md:justify-between">
      <div class="md:w-1/2 image">
        <transition name="fade" mode="out-in">
          <KataImage
            v-if="articles[activeArticle] && articles[activeArticle].image"
            :image="articles[activeArticle].image"
            sizes="sm:50vw xl:50vw"
            :max-width="1000"
            :ratio="4 / 3"
            class="h-full w-full object-cover"
          />
        </transition>
      </div>
      <div
        class="md:w-1/2 px-r1/12 md:pl-large py-slice-half md:flex md:items-center"
      >
        <nuxt-link :to="getLink(item._id)" class="block text-center">
          <p
            v-if="item[categoryField] && item[categoryField].length"
            class="label-2 mb-small"
          >
            <span v-for="(tag, x) in item[categoryField]" :key="tag._key">
              {{
                $store.getters['references/getFieldByRef']({
                  field: 'title',
                  ref: tag._ref,
                })
              }}
              <span v-if="x != item[categoryField].length - 1">,</span>
            </span>
          </p>
          <p v-else class="label-2 mb-small">Featured</p>
          <h3 class="heading-3">
            {{ item.title }}
          </h3>
          <p class="btn-secondary read-more-btn mt-medium inline-block">
            Read More
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    categoryField: {
      type: String,
      default: 'category',
    },
  },
  data() {
    return {
      activeArticle: 0,
      timer: null,
    }
  },
  computed: {
    imgSrc() {
      return this.articles[this.activeArticle].image
    },
    item() {
      return this.articles[this.activeArticle]
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.next()
    }, this.interval)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    next() {
      if (this.activeArticle + 1 < this.articles.length) {
        this.activeArticle += 1
      } else {
        this.activeArticle = 0
      }
    },
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.article-results-single {
  @include md-up {
    img {
      min-height: 75vh;
    }
  }
}
</style>
