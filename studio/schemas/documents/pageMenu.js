import {hiddenTitle} from '../schemas/partials/meta'
import {allTypes} from '../studio/partials/allTypes'

export default {
  type: 'document',
  name: 'pageMenu',
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
