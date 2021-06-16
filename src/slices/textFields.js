import { BiListPlus } from 'react-icons/bi'
import { links } from 'part:@weflocc/kata/partials/links'

const title = {
  name: 'title',
  type: 'string',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const textBody = {
  title: 'textBody',
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
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
}

const list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'listItem',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'text',
          type: 'text',
          rows: 3,
        },
      ],
      preview: {
        select: {
          heading: 'title',
          text: 'text'
        },
        prepare(selection) {
          const { heading, text } = selection
          let showEllipsis = true
          if (text.length < 50) {
            showEllipsis = false
          }
          const shortenedSubtitle = text.toString().slice(0, 50)
          return {
            title: heading,
            subtitle: `${shortenedSubtitle}${showEllipsis ? '...' : ''}`,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export { title, textBody, list, superHeading }
