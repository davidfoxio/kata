<template>
  <div class="article-results-slideshow">
    <div class="sm:flex">
      <ul
        class="
          sm:w-1/2
          xl:w-2/3
          pr-medium
          flex flex-col
          justify-between
          items-start
        "
      >
        <li
          v-for="(item, i) in articles"
          :key="i"
          class="
            border-primary border-l-2
            flex-grow
            border-opacity-25
            mb-0
            transition-all
            duration-500
          "
          :class="{ 'border-opacity-100': i == activeArticle }"
          @mouseover="activeArticle = i"
        >
          <nuxt-link
            :to="getLink(item._id)"
            class="
              mb-small
              inline-block
              pl-small
              hover:text-primary
              transition-all
              duration-500
            "
            :class="[i == activeArticle ? 'opacity-90' : 'opacity-30']"
          >
            <p class="label-2">Featured</p>
            <h3 class="heading-3 my-small">
              {{ item.title }}
            </h3>
            <p
              v-if="item[categoryField] && item[categoryField].length"
              class="opacity-50 label-2"
            >
              Tags:
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
          </nuxt-link>
        </li>
      </ul>
      <div class="sm:w-1/2 xl:w-1/3 image sm:align-center">
        <transition name="fade" mode="out-in">
          <KataImage
            v-if="articles[activeArticle] && articles[activeArticle].image"
            :key="activeArticle"
            :image="articles[activeArticle].image"
            sizes="50vw"
            :max-width="900"
            :ratio="4 / 3"
          />
        </transition>
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
.article-results-slideshow {
  img {
    // min-height: 200px;
    height: 100%;
    object-fit: cover;
    width: 100%;
    max-height: 50vh;
  }
  .image {
    height: 50vh;
  }
}
</style>
