import {standardImage} from './image'
const camelCase = require('lodash.camelcase')

const media = (name = 'Media') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    editModal: 'popover',
    of: [
      standardImage()
      // {type: 'video'},
    ]
  }
}

export {media}
