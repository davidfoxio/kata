import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
const camelCase = require('lodash.camelcase')

const standardImage = (name = 'Image', vars = {}) => {
  const required = vars?.required || false
  const title = vars?.title || name
  const description = vars?.description || ''
  return {
    name: camelCase(name),
    title: title,
    type: 'image',
    description: description,
    options: {
      hotspot: true,
      ...defaultOptions,
    },
    validation: required
      ? (Rule) => Rule.required('Please select an image.')
      : null,
  }
}

export { standardImage }
