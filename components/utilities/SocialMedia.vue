<template>
  <div v-if="socialMedia" class="social flex space-x-small">
    <a
      v-if="socialMedia.twitter"
      :href="socialMedia.twitter"
      title="Twitter"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <twitterIcon :width="size" :height="size" />
    </a>
    <a
      v-if="socialMedia.facebook"
      :href="socialMedia.facebook"
      title="Facebook"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <facebookIcon :width="size" :height="size" />
    </a>
    <a
      v-if="socialMedia.linkedIn"
      :href="socialMedia.linkedIn"
      title="Linked In"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <linkedinIcon :width="size" :height="size" />
    </a>
    <a
      v-if="socialMedia.youtube"
      :href="socialMedia.youtube"
      title="Youtube"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <youtubeIcon :width="size" :height="size" />
    </a>
    <a
      v-if="socialMedia.instagram"
      :href="socialMedia.instagram"
      title="Instagram"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <instagramIcon :width="size" :height="size" />
    </a>
    <a
      v-if="socialMedia.tiktok"
      :href="socialMedia.tiktok"
      title="TikTok"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <svg
        :width="size"
        :height="size"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 256 256"
      >
        <path
          fill="#000"
          stroke-miterlimit="10"
          stroke-width="0"
          d="M84.494 22.535a22.675 22.675 0 0 1-13.702-4.579 22.73 22.73 0 0 1-8.621-13.702A22.819 22.819 0 0 1 61.733 0H47.038v40.154l-.018 21.994c0 5.88-3.829 10.866-9.137 12.619a13.36 13.36 0 0 1-4.937.655 13.244 13.244 0 0 1-6.084-1.866c-3.833-2.292-6.431-6.451-6.502-11.208-.111-7.435 5.9-13.496 13.329-13.496 1.467 0 2.875.239 4.194.674V34.607a28.915 28.915 0 0 0-4.238-.313c-8.132 0-15.737 3.38-21.174 9.47a27.564 27.564 0 0 0-6.954 16.63c-.498 8.088 2.461 15.776 8.201 21.449a28.598 28.598 0 0 0 2.655 2.319C21.294 87.947 27.31 90 33.646 90c1.431 0 2.847-.106 4.238-.312a28.085 28.085 0 0 0 15.69-7.847c5.296-5.234 8.222-12.183 8.253-19.579l-.076-32.844a37.096 37.096 0 0 0 8.253 4.813 37.168 37.168 0 0 0 14.531 2.93V22.532c.004.003-.038.003-.041.003z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import twitterIcon from '~/assets/svgs/twitter.svg?inline'
import facebookIcon from '~/assets/svgs/facebook.svg?inline'
import linkedinIcon from '~/assets/svgs/linkedin.svg?inline'
import youtubeIcon from '~/assets/svgs/youtube.svg?inline'
import instagramIcon from '~/assets/svgs/instagram.svg?inline'

export default {
  components: {
    twitterIcon,
    facebookIcon,
    linkedinIcon,
    youtubeIcon,
    instagramIcon,
  },
  props: {
    socialLinks: {
      type: Object,
      default: () => {},
    },
    size: {
      type: Number,
      default: 30,
    },
  },
  computed: {
    socialMedia() {
      return this.socialLinks
        ? this.socialLinks
        : this.$store.state.globalContent.socialMedia
    },
  },
}
</script>

<style lang="scss">
.social {
  svg {
    circle,
    path {
      fill: currentColor;
      transition: 0.4s ease;
    }
  }
}
</style>
