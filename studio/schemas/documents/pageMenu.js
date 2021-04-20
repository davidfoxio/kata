import {hiddenTitle} from '../partials/meta'
const allTypes = module.main.require('schemas/partials/allTypes')
// const parentDir = path.dirname(module.parent && module.parent.filename ? module.parent.filename : '.');
// const path = require('path')
// const fs = require("fs")
// const allTypes = require(path.join(__dirname, '..', '..', 'schemas', 'partials', 'allTypes'))
// import {allTypes} from 'file:../../../../../schemas/partials/allTypes'

const pageMenu = (allTypes) => {
  return {
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
}

