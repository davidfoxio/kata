import standardImage from '../components/standardImage'
import {basicTextEditor} from '../schemas/partials/basicTextEditor'
import {BiListPlus} from 'react-icons/bi'
import {allTypes} from '../studio/partials/allTypes'

const title = {
  name: 'title',
  type: 'string'
}

const features = {
  title: 'Features',
  name: 'features',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'image',
          name: 'icon',
          title: 'Icon'
        },
        {
          type: 'string',
          name: 'title',
          title: 'Title'
        },
        {
          type: 'text',
          name: 'text',
          title: 'Text',
          rows: 2
        },
        {
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: allTypes,
          description: 'Optional'
        }
      ],
      preview: {
        select: {
          heading: 'title'
        },
        prepare (selection) {
          const {heading} = selection
          return {
            title: heading,
            media: BiListPlus
          }
        }
      }
    }
  ]
}

const shortFeatures = {
  title: 'Short Features',
  name: 'shortFeatures',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'image',
          name: 'icon',
          title: 'Icon'
        },
        {
          type: 'string',
          name: 'title',
          title: 'Title'
        },
        {
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: allTypes,
          description: 'Optional'
        }
      ],
      preview: {
        select: {
          heading: 'title'
        },
        prepare (selection) {
          const {heading} = selection
          return {
            title: heading,
            media: BiListPlus
          }
        }
      }
    }
  ]
}

const featureImageTabs = {
  title: 'Feature Tabs',
  name: 'featureTabs',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'string',
          name: 'tabName',
          title: 'Tab Name'
        },
        standardImage,
        {
          type: 'string',
          name: 'title',
          title: 'Title'
        },
        basicTextEditor,
        {
          name: 'links',
          type: 'link',
          title: 'Buttons'
        }
      ],
      preview: {
        select: {
          heading: 'tabName'
        },
        prepare (selection) {
          const {heading} = selection
          return {
            title: heading,
            media: BiListPlus
          }
        }
      }
    }
  ]
}

const featureTabs = {
  title: 'Feature Tabs',
  name: 'featureTabs',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'string',
          name: 'tabName',
          title: 'Tab Name'
        },
        {
          type: 'array',
          name: 'features',
          of: [
            {
              type: 'object',
              title: 'Item',
              name: 'item',
              fields: [
                {
                  type: 'string',
                  name: 'title',
                  title: 'Title'
                },
                basicTextEditor
              ],
              preview: {
                select: {
                  heading: 'title'
                },
                prepare (selection) {
                  const {heading} = selection
                  return {
                    title: heading,
                    media: BiListPlus
                  }
                }
              }
            }
          ]
        },
        {
          name: 'links',
          type: 'link',
          title: 'Links'
        }
      ],
      preview: {
        select: {
          heading: 'tabName'
        },
        prepare (selection) {
          const {heading} = selection
          return {
            title: heading,
            media: BiListPlus
          }
        }
      }
    }
  ]
}

const text = {
  name: 'text',
  title: 'Text',
  type: 'text',
  rows: 3
}

const textBody = {
  title: 'Text Body',
  name: 'textBody',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ]
        // annotations: []
      }
    }
  ]
}

const locations = {
  title: 'Locations',
  name: 'locations',
  type: 'array',
  of: [
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Location',
          name: 'location',
          type: 'geopoint'
        }
      ],
      preview: {
        select: {
          heading: 'title'
        },
        prepare (selection) {
          const {heading} = selection
          return {
            title: heading,
            media: BiListPlus
          }
        }
      }
    }
  ]
}

export {
  title,
  features,
  text,
  textBody,
  shortFeatures,
  featureImageTabs,
  featureTabs,
  locations
}
