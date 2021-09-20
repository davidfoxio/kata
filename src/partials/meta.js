const metaFieldset = {
  name: 'meta',
  title: 'Meta',
  options: {
    collapsed: true,
    collapsible: true,
  },
}

const metaField = {
  name: 'seoMeta',
  type: 'seoMeta',
  title: 'SEO & Meta',
  fieldset: 'meta',
}

const title = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required('Please set a title.'),
}

const hiddenTitle = {
  name: 'title',
  type: 'string',
  description:
    'This title will show in menus, and when you reference this document',
}

const slug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: (Rule) =>
    Rule.required('A slug is required before you can publish.'),
}

const hiddenSlug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  description: 'Only flocc studio can see this.',
  validation: (Rule) =>
    Rule.required('A slug is required before you can publish.'),
  hidden: ({ currentUser }) => {
    return currentUser.email != 'studio@flocc.co'
  },
}

export { metaFieldset, metaField, title, slug, hiddenTitle, hiddenSlug }
