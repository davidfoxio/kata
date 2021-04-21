import {hiddenTitle} from '../partials/meta'
import {allTypes} from '../../site'
// const allTypes = module.main.require('schemas/partials/allTypes')
// const parentDir = path.dirname(module.parent && module.parent.filename ? module.parent.filename : '.');
// const path = require('path')
// const fs = require("fs")
// const allTypes = require(path.join(__dirname, '..', '..', 'schemas', 'partials', 'allTypes'))
// import {allTypes} from 'file:../../../../../schemas/partials/allTypes'
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
      name: 'test',
      type: 'string'
    },
    {
      title: 'Menu',
      type: 'array',
      name: 'menu',
      of: [
        {
          title: 'Internal Link',
          name: 'internalLink',
          type: 'reference',
          to: allTypes
        },
        {
          title: 'External Link',
          name: 'externalLink',
          type: 'object',
          fields: [
            {
              title: 'Title',
              type: 'string',
              name: 'title'
            },
            {
              title: 'Link',
              type: 'url',
              name: 'link'
            }
          ]
        }
      ]
    }
  ]
}
