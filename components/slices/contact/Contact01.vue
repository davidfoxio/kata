<template>
  <div class="slice contact-1 md:flex w-r10/12 mx-r1/12">
    <div class="md:w-1/2 md:pr-large">
      <h1
        v-if="isH1 && title"
        class="heading-2 mb-medium"
        v-kata-html="title"
      />
      <h2 v-else-if="title" class="mb-medium" v-kata-html="title" />
      <p v-if="text" class="mb-medium" v-kata-html="text" />
      <div class="columns fade-up">
        <div v-if="address" class="mb-medium">
          <p class="label-1">Address</p>
          <p class="whitespace-pre-line" v-kata-html="address" />
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
      <SocialMedia />
    </div>
    <div class="md:w-1/2 md:pl-large">
      <p v-if="submitted" v-kata-html="thanks" />
      <form
        v-else
        name="contact"
        id="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit="actionFn()"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="Contact form submission" />

        <div class="w-full mb-small field">
          <label for="name" class="sr-only">Name</label>
          <div class="w-full control block">
            <input
              id="name"
              class="input w-full"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="email" class="sr-only">Email</label>
          <div class="w-full control block">
            <input
              id="email"
              class="input w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div v-if="formPhone" class="w-full mb-small field">
          <label for="phone" class="sr-only">Phone</label>
          <div class="w-full control block">
            <input
              id="phone"
              class="input w-full"
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="message" class="sr-only">Message</label>
          <div class="w-full control block">
            <textarea
              id="message"
              rows="8"
              class="textarea w-full"
              name="message"
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>

        <div class="submit-wrap">
          <button class="btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    isH1: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: '',
    },
    thanks: {
      type: String,
      default: 'Thank you for getting in contact.',
    },
    formPhone: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      submitted: false,
    }
  },
  mounted() {
    if (this.$route.hash == '#submitted') {
      this.submitted = true
    }
  },
  watch: {
    '$route.hash': function (newVal, oldVal) {
      if (newVal == '#submitted') {
        this.submitted = true
      } else {
        this.submitted = false
      }
    },
  },
  methods: {
    actionFn() {
      if(this.action){
        return this.action
      } else {
        this.$router.push({ hash: '#submitted' })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-1 {
  .textarea,
  .input {
    display: block;
    border: 2px solid $primary;
    padding: 10px;

    &::placeholder {
      color: currentColor;
      opacity: 1;
    }
  }
}
</style>
