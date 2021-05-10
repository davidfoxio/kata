import {hiddenTitle} from 'part:kata-sanity/partials/meta'

export default {
  type: 'document',
  name: 'pageMeta',
  title: 'Global Meta',
  __experimental_actions: ['update', 'publish'],
  initialValue: {
    title: 'Global Meta'
  },
  fields: [
    hiddenTitle,
    {
      name: 'metaTitle',
      title: 'Global Meta Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Global Meta Description',
      type: 'text',
      rows: 3
    },
    {
      title: 'Social Sharing Image',
      name: 'socialImage',
      type: 'image',
      description: '1200px x 630px'
    },
    {
      name: 'schemaOrg',
      title: 'Schema.org JS',
      description: 'Leave out the opening and closing script tags, JSON only here',
      type: 'text',
      rows: 5
    }
  ]
}
