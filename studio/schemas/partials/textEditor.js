import {internalLink} from '../partials/links'
import {BiLinkExternal, BiLink} from 'react-icons/bi'
import {GoFileSymlinkFile} from 'react-icons/go'
import {standardImage} from '../partials/image'
const camelCase = require('lodash.camelcase')

const basicTextEditor = (name = 'Text Body') => {
  return {
    title: name,
    name: camelCase(name),
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
              fields: [internalLink('reference')]
            }
          ]
        }
      }
    ]
  }
}

const fullTextEditor = (name = 'Text Body') => {
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    of: [
      {
        type: 'block',
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
                internalLink('reference')
              ]
            },
            {
              name: 'file',
              type: 'object',
              title: 'File',
              blockEditor: {
                icon: GoFileSymlinkFile
              },
              fields: [
                {
                  name: 'file',
                  type: 'file',
                }
              ]
            }
          ]
        },
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'Heading', value: 'h2'},
          {title: 'Subheading', value: 'h3'}
        ]
      },
      standardImage(),
      {
        type: 'youtube'
      },
      {
        type: 'tableField'
      },
      {
        type: 'link',
        title: 'Buttons'
      }
    ]
  }
}

export {basicTextEditor, fullTextEditor}
