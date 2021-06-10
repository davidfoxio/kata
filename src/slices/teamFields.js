import { BiListPlus } from 'react-icons/bi'
import { standardImage } from 'part:@weflocc/kata/partials/image'

const title = {
  name: 'title',
  type: 'string',
}

const text = {
  name: 'text',
  type: 'text',
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

export { title, text, thumbnails }
