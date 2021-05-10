import {hiddenTitle} from 'part:@weflocc/kata/partials/meta'
import config from 'config:kata'

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
          to: config.allTypes
        }
      ]
    }
  ]
}
