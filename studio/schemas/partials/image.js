const camelCase = require('lodash.camelcase')

const standardImage = (name = 'Image', vars = {}) => {
  const required = vars ? vars.required : false
  return {
    name: camelCase(name),
    title: name,
    type: 'image',
    options: {
      hotspot: true,
      collapsable: true,
      collapsed: false
    },
    validation: required ? Rule => Rule.required('Please select an image.') : null
  }
}

export {standardImage}
