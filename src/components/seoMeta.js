export default {
  name: 'seoMeta',
  type: 'object',
  title: 'SEO & Meta',
  fields: [
    {
      type: 'string',
      name: 'htmlTitle',
      title: 'Prepend Meta Title',
    },
    {
      type: 'text',
      name: 'metaDescription',
      title: 'Meta Description',
    },
    {
      title: 'Social Sharing Image',
      name: 'socialImage',
      type: 'image',
      description: '1200px x 630px',
    },
  ],
}
