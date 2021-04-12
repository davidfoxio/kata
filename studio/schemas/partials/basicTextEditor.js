import {allTypes} from '../studio/partials/allTypes'
import {BiLinkExternal, BiLink} from 'react-icons/bi'

const basicTextEditor = {
  title: 'Text Body',
  name: 'textBody',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [{title: 'Bullet', value: 'bullet'}],
      styles: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'}
        ],
        annotations: [
          {
            name: 'externalLink',
            type: 'object',
            title: 'External link',
            blockEditor: {
              icon: BiLinkExternal
            },
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                layout: 'checkbox'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: BiLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: allTypes
              }
            ]
          }
        ]
      }
    }
  ]
}

export {basicTextEditor}
