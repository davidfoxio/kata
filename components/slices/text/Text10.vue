<template>
  <div class="slice text-10 mx-auto w-r10/12 lg:w-r8/12 text-max">
    <h2 v-if="title" v-kata-html="title" class="text-center mb-large fade-up" />
    <div v-if="list" class="accordion-list fade-up">
      <AccordionSlot
        v-for="item in list"
        :key="item._key"
        :title="item.title"
        class="mb-small"
      >
        <SanityEmbedContent v-if="item.textBody" :blocks="item.textBody" />
      </AccordionSlot>
    </div>
  </div>
</template>

<script>
import { title, list } from '../shared'
export default {
  mixins: [title, list],
}
</script>
