<template>
  <transition-group
    v-if="articles"
    class="ulClass flex flex-wrap gap-medium"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="item in articles" :key="item._id">
      <slot name="tease" :item="item">
        <NuxtLink :to="getLink(item._id)">
          <KataImage
            v-if="item.image.asset"
            :image="item.image"
            :max-width="650"
            :ratio="6 / 4"
            sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
            class="mb-small"
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
            <h3 class="text-center">
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
.ulClass {
  li {
    flex-basis: 40%;
    flex-grow: 1;
  }
  :nth-child(10n + 1),
  :nth-child(10n + 2),
  :nth-child(10n + 3),
  :nth-child(10n + 6),
  :nth-child(10n + 7),
  :nth-child(10n + 8) {
    flex-basis: 30%;
  }
}
</style>
