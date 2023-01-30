export default {
  head() {
    let head = this.head || {}

    if (this.bodyClass) {
      head.bodyAttrs = {}
      head.bodyAttrs.class = this.bodyClass
    }

    if (this.c) {
      if (this.c.seoMeta && this.c.seoMeta.htmlTitle) {
        head.title = this.c.seoMeta.htmlTitle
      } else {
        head.title = this.c.title
      }

      head.meta = []
      if (this.c.seoMeta && this.c.seoMeta.metaDescription) {
        head.meta.push(
          {
            hid: 'description',
            name: 'description',
            content: this.c.seoMeta.metaDescription
              ? this.c.seoMeta.metaDescription
              : undefined,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.c.seoMeta.metaDescription
              ? this.c.seoMeta.metaDescription
              : undefined,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.c.seoMeta.metaDescription
              ? this.c.seoMeta.metaDescription
              : undefined,
          }
        )
      }

      if (this.c.image || (this.c.seoMeta && this.c.seoMeta.socialImage)) {
        let ogImg = this.$imgUrl(this.c.image)
          .quality(80)
          .width(1200)
          .height(630)
          .url()
        let twitterImg = this.$imgUrl(this.c.image)
          .quality(80)
          .width(800)
          .height(800)
          .url()
        if (this.c.seoMeta && this.c.seoMeta.twitterSharingImage) {
          twitterImg = this.$imgUrl(this.c.seoMeta.twitterSharingImage)
            .quality(80)
            .width(800)
            .height(800)
            .url()
        }
        if (this.c.seoMeta && this.c.seoMeta.socialImage) {
          ogImg = this.$imgUrl(this.c.seoMeta.socialImage)
            .quality(80)
            .width(1200)
            .height(630)
            .url()
          if (!this.c.seoMeta.twitterSharingImage) {
            twitterImg = this.$imgUrl(this.c.seoMeta.socialImage)
              .quality(80)
              .width(1200)
              .height(630)
              .url()
          }
        }

        console.log('head img', ogImg, twitterImg)

        head.meta.push(
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: twitterImg,
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: ogImg,
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: ogImg,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: head.title,
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: head.title,
          }
        )
      }

      if (this.c.seoMeta && this.c.seoMeta.schemaOrg) {
        // https://mhagemann.medium.com/how-to-add-structured-json-ld-data-to-nuxt-js-8bb5f7c8a2d
        head.__dangerouslyDisableSanitizers = ['script']
        head.script = [
          {
            innerHTML: this.c.seoMeta.schemaOrg,
            type: 'application/ld+json',
          },
        ]
      }
    }

    return head
  },
}
