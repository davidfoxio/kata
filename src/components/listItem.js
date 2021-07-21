import { BiListPlus } from 'react-icons/bi'
import { links } from 'part:@weflocc/kata/partials/links'

export default {
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
      text: 'text',
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
}
