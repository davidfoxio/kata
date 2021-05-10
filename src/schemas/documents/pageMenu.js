import {hiddenTitle} from 'part:kata-sanity/partials/meta'
import {allTypes} from '../../../schemas/partials/allTypes'

export default {
  type: 'document',
  name: 'pageMenu',
  __experimental_actions: ['update', 'publish'],
  title: 'Menu',
  initialValue: {
    title: 'Menu'
  },
  fields: [
    hiddenTitle,
    {
      title: 'Menu',
      type: 'array',
      name: 'menu',
      of: [
        {
          title: 'Menu',
          name: 'menu',
          type: 'reference',
          to: allTypes
        }
      ]
    }
  ]
}
