<template>
  <component
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
    class="article-tease-basic relative"
  >
    <div class="relative title-wrap">
      <h3 v-if="title" v-html="title" />
      <DraftLabel :id="itemId" />
      <div class="read"></div>
    </div>

    <p v-if="categories && categories.length" class="category mt-0">
      <span v-for="(cat, i) in categories" :key="cat._key">
        {{ getCategoryTitle(cat._ref) }}
        <span v-if="i != categories.length - 1">|</span>
      </span>
    </p>
  </component>
</template>

<script>
export default {
  props: {
    itemId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: function () {
        return []
      },
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.article-tease-basic {
  
  .title-wrap {
    padding-right: 30px;
    .read {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 30px;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: all 0.5s ease-in-out;
      &:before {
        content: '';
        transition: all 0.5s ease-in-out;
        position: absolute;
        background-color: $secondary;
        width: 100%;
        height: 2px;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:after {
        content: '';
        transition: all 0.5s ease-in-out;
        opacity: 1;
        position: absolute;
        width: 50%;
        height: 50%;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border-width: 2px 2px 0 0;
        border-color: $secondary;
        transform: rotate(45deg);
      }
    }
  }

  &:hover .read {
    right: 20px;
  }
}
</style>
