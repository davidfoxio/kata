import config from 'config:@weflocc/kata'
import { standardImage } from 'part:@weflocc/kata/partials/image'
import { BiListPlus } from 'react-icons/bi'

const title = {
  name: 'title',
  type: 'string',
  title: 'Title',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const text = {
  name: 'text',
  type: 'text',
  title: 'Text',
  rows: 3,
}

const thumbnails = {
  name: 'thumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage(),
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text',
          rows: 3,
        },
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: config.allTypes,
        },
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const imageThumbnails = {
  name: 'imageThumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage(),
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: config.allTypes,
        },
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const portfolio06Slides = {
  name: 'imageThumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [standardImage()],
}

export {
  title,
  superHeading,
  text,
  thumbnails,
  imageThumbnails,
  portfolio06Slides,
}
