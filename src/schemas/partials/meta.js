const metaFieldset = {
  name: 'meta',
  title: 'Meta',
  options: {
    collapsed: true,
    collapsible: true
  }
}

const metaField = {
  name: 'seoMeta',
  type: 'seoMeta',
  title: 'SEO & Meta',
  fieldset: 'meta'
}

const title = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: Rule => Rule.required('Please set a title.')
}

const hiddenTitle = {
  name: 'title',
  type: 'string',
  hidden: true
}

const slug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96
  },
  validation: Rule => Rule.required('A slug is required before you can publish.')
}

const hiddenSlug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  hidden: true,
  options: {
    source: 'title',
    maxLength: 96
  },
  validation: Rule => Rule.required('A slug is required before you can publish.')
}

export {metaFieldset, metaField, title, slug, hiddenTitle, hiddenSlug}
