import {allTypes} from '../studio/partials/allTypes'
import {standardImage} from '../schemas/partials/standardImage'
import {BiListPlus} from 'react-icons/bi'

const title = {
  name: 'title',
  type: 'string',
  title: 'Title'
}

const thumbnails = {
  name: 'thumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage,
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text',
          rows: 3
        },
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: allTypes
        }
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image'
        },
        prepare (selection) {
          const {heading, image} = selection
          return {
            title: heading,
            media: image || BiListPlus
          }
        }
      }
    }
  ]
}

const imageThumbnails = {
  name: 'imageThumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage,
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: allTypes
        }
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image'
        },
        prepare (selection) {
          const {heading, image} = selection
          return {
            title: heading,
            media: image || BiListPlus
          }
        }
      }
    }
  ]
}

const portfolio06Slides = {
  name: 'imageThumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [
    standardImage
  ]
}

export {title, thumbnails, imageThumbnails, portfolio06Slides}
