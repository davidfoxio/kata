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

      if (this.c.seoMeta && this.c.seoMeta.socialImage) {
        head.meta.push(
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: head.title,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.$imgUrl(this.c.seoMeta.socialImage).url(),
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: head.title,
          }
        )
      }
    }

    return head
  },
}
