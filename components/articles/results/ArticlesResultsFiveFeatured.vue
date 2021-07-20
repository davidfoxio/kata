<template>
  <transition-group
    v-if="articles"
    class="w-full grid gap-medium five-featured-grid pr-screen-border"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="(item, i) in articles" :key="item._id">
      <slot name="tease" :item="item">
        <NuxtLink :to="getLink(item._id)">
          <KataImage
            :image="item.image"
            :max-width="650"
            :ratio="i == 0 ? 3 / 4 : 4 / 3"
            sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
            :class="{ 'mb-small': i != 0 }"
          />

          <div class="title">
            <p
              v-if="item.category && item.category.length"
              class="category mt-0 mb-[7px] text-center label-2"
            >
              <span v-for="(cat, catIndex) in item.category" :key="cat._key">
                {{ getCategoryTitle(cat._ref) }}
                <span v-if="catIndex != item.category.length - 1">|</span>
              </span>
            </p>
            <h3 :class="{ 'label-1': i != 0 }" class="text-center">
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
  grid-template-columns: 1fr;

  @include md-up {
    grid-template-columns: 2fr 1fr;
  }

  @include lg-up {
    grid-template-columns: 2fr 1fr 1fr;

    li:nth-child(3),
    li:nth-child(5) {
      margin-top: var(--spacing-large);
    }
  }

  li:first-child {
    grid-row-start: 1;
    grid-row-end: span 2;

    // @include md-up {
    //   grid-row-end: span 4;
    // }

    // @include lg-up {
    //   grid-row-end: span 2;
    // }

    a {
      display: grid;
      grid-template-areas: 'stack';
      position: relative;

      > * {
        grid-area: stack;
      }

      &:before {
        content: '';
        background-image: linear-gradient(transparent, black);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        z-index: 1;
      }
    }

    .title {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      @apply text-white;
      @apply p-medium;
      z-index: 5;
    }
  }
}
</style>
