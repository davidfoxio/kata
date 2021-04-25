<template>
  <div class="slice contact-2 md:flex">
    <div class="md:w-r5/12">
      <GMap
        ref="gMap"
        language="en"
        :center="{ lat: location.lat, lng: location.lng }"
        :options="{ fullscreenControl: false }"
        :zoom="13"
      >
        <GMapMarker :position="{ lat: location.lat, lng: location.lng }" />
      </GMap>
    </div>
    <div class="md:w-r5/12 md:mx-r1/12 md:py-slice-half">
      <h2 v-if="title" class="mb-medium heading-2" v-html="title" />
      <p v-if="description" class="mb-medium" v-html="description" />
      <div class="columns">
        <div v-if="address" class="mb-medium">
          <p class="label-1">Address</p>
          <p v-html="address" />
        </div>
        <div v-if="website" class="mb-medium">
          <p class="label-1">Website</p>
          <p>
            <a :href="website" target="_blank">{{ website }}</a>
          </p>
        </div>
        <div v-if="email" class="mb-medium">
          <p class="label-1">Email</p>
          <p>
            <a :href="'mailto:' + email">{{ email }}</a>
          </p>
        </div>
        <div v-if="telephone" class="mb-medium">
          <p class="label-1">Telephone</p>
          <p>
            <a :href="'tel:' + telephone">{{ telephone }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Requires nuxt-gmaps
// Add the following to modules in nuxt config (with your api key)
// [
//  'nuxt-gmaps',
//    {
//      key: 'AIzaSyDqa_gfKjehO6LI6vCIG1gOjhd3TiUE7ew',
//    },
// ],
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    location: {
      type: Object,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.contact-2 {
  .columns {
    columns: 2 100px;
    column-gap: var(--spacing-medium);
  }
  .GMap__Wrapper,
  .GMap {
    height: 100%;
  }
}
</style>
