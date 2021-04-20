
import {metaFieldset, metaField, title, slug} from '../partials/meta'
import {fullTextEditor} from '../partials/textEditor'

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fieldsets: [
    metaFieldset
  ],
  fields: [
    metaField,
    title,
    slug,
    fullTextEditor()
  ]
}
