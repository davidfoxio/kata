<template>
  <div class="slice call-to-action-8 w-r10/12 mx-r1/12 text-center">
    <KataLinks v-if="links" :links="links" />
  </div>
</template>

<script>
import { links } from '../shared'
export default {
  mixins: [links],
}
</script>
