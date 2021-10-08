<template>
  <component
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
    class="tease-image-overlay"
  >
    <KataMedia
      v-if="media"
      :media="media"
      :ratio="16 / 9"
      :max-width="650"
      sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
      class="bg-img"
    />
    <h3 class="label-1">
      {{ title }}
      <DraftLabel v-if="itemId" :id="itemId" />
    </h3>
    <div class="overlay flex flex-col justify-center items-center">
      <p class="btn-primary text-center">Find out more</p>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    media: {
      type: Array,
      default: null,
    },
    itemId: {
      type: String,
      default: '',
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
}
</script>

<style lang="scss" scoped>
.tease-image-overlay {
  position: relative;
  display: inline-block;

  .bg-img {
    border-radius: 15px;
    opacity: 0.9 !important;
    z-index: 2;
    position: relative;
  }

  h3 {
    position: absolute;
    bottom: 5%;
    left: 5%;
    right: 5%;
    z-index: 4;
    color: white;
  }

  &:before {
    content: '';
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    border-radius: 15px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $tertiary;
    color: white;
    border-radius: 15px;
    padding: 5%;
    text-align: center;
    transition: 0.7s ease;
    opacity: 0;
    z-index: 3;

    img {
      width: 50%;
      height: auto;
    }

    .btn-primary {
      background: $tertiary;
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
}
</style>
