import { standardImage } from 'part:@weflocc/kata/partials/image'
const camelCase = require('lodash.camelcase')

const media = (name = 'Media') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    editModal: 'popover',
    of: [
      standardImage(),
      // {type: 'video'},
    ],
    // validation: Rule => Rule.min(1).required('Please select at least one image.')
  }
}

export { media }
