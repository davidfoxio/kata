const allTypes = module.main.require('schemas/partials/allTypes')
import {linkText, linkStyle} from '../partials/links'
import {BiLink} from 'react-icons/bi'

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  fields: [
    {
      type: 'reference',
      name: 'internalLink',
      to: allTypes
    },
    linkText,
    linkStyle
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'internalLink.title'
    },
    prepare (selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: BiLink
      }
    }
  }
}
