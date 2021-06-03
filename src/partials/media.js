import {standardImage} from 'part:@weflocc/kata/partials/image'
import { videoSrcset } from './videoSrcset'
const camelCase = require('lodash.camelcase')

const media = (name = 'Media') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    editModal: 'popover',
    of: [
      standardImage(),
      videoSrcset()
    ],
    validation: (Rule) =>
      Rule.min(1).required('Please select at least one item.'),
  }
}

export {media}
