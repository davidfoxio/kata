<template>
  <div v-if="socialMedia" class="social flex space-x-small">
    <a
      v-if="socialMedia.twitter"
      :href="socialMedia.twitter"
      title="Twitter"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <twitterIcon />
    </a>
    <a
      v-if="socialMedia.facebook"
      :href="socialMedia.facebook"
      title="Facebook"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <facebookIcon />
    </a>
    <a
      v-if="socialMedia.linkedIn"
      :href="socialMedia.linkedIn"
      title="Linked In"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <linkedinIcon />
    </a>
    <a
      v-if="socialMedia.youtube"
      :href="socialMedia.youtube"
      title="Youtube"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <youtubeIcon />
    </a>
    <a
      v-if="socialMedia.instagram"
      :href="socialMedia.instagram"
      title="Instagram"
      target="_blank"
      class="inline-block hover:text-secondary"
    >
      <instagramIcon />
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
  computed: {
    socialMedia() {
      return this.$store.state.globalContent.socialMedia
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
  a {
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
