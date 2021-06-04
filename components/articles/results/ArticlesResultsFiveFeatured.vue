<template>
  <transition-group
    v-if="articles"
    class="w-full grid gap-medium five-featured-grid"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="(item, i) in articles" :key="item._id">
      <slot name="tease" :item="item">
        <NuxtLink :to="getLink(item._id)" class="block">
          <KataImage
            :image="item.image"
            :max-width="650"
            :ratio="i == 0 ? 4 / 6 : 6 / 4"
            sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
            :class="{ 'mb-small': i != 0 }"
          />

          <div class="title">
            <p
              v-if="item.category && item.category.length"
              class="category mt-0 text-center label-2"
            >
              <span v-for="(cat, catIndex) in item.category" :key="cat._key">
                {{ getCategoryTitle(cat._ref) }}
                <span v-if="catIndex != item.category.length - 1">|</span>
              </span>
            </p>
            <h3 :class="{ 'label-1 p-small': i != 0 }" class="text-center">
              {{ item.title }}
              <DraftLabel :id="item._id" />
            </h3>
          </div>
        </NuxtLink>
      </slot>
    </li>
  </transition-group>
  <p v-else>No results found, try changing your filters</p>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '3',
    },
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
}
</script>

<style lang="scss">
.five-featured-grid {
  grid-template-columns: 2fr 1fr 1fr;

  li:first-child a {
    grid-row-start: 1;
    grid-row-end: span 2;
    display: grid;
    grid-template-areas: 'stack';

    img,
    .title {
      grid-area: stack;
    }

    .title {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      color: white;
      @apply p-medium;
    }
  }
}
</style>
