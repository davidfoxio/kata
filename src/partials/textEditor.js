import config from 'config:@weflocc/kata'
import { BiLinkExternal, BiLink } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { standardImage } from 'part:@weflocc/kata/partials/image'
const camelCase = require('lodash.camelcase')

const basicTextEditor = (name = 'Text Body', settings) => {
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    ...settings,
    of: [
      {
        type: 'block',
        lists: [{ title: 'Bullet', value: 'bullet' }],
        styles: [],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Underline', value: 'underline' },
          ],
          annotations: [
            {
              name: 'externalLink',
              type: 'object',
              title: 'External link',
              blockEditor: {
                icon: BiLinkExternal,
              },
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule) =>
                    Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel', 'sms'],
                    }),
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean',
                  layout: 'checkbox',
                },
              ],
            },
            {
              name: 'internalLink',
              type: 'object',
              title: 'Internal link',
              blockEditor: {
                icon: BiLink,
              },
              fields: [
                {
                  name: 'reference',
                  type: 'reference',
                  title: 'Reference',
                  to: config.allTypes,
                  options: {
                    disableNew: true, // we don't want people to be able to create new pages here!
                  },
                },
              ],
            },
            // {
            //   name: 'link',
            //   type: 'object',
            //   title: 'Link',
            //   fields: [
            //     {
            //       name: 'href',
            //       title: 'URL',
            //       type: 'url',
            //     },
            //   ],
            // },
          ],
        },
      },
    ],
  }
}

const fullTextEditor = (name = 'Text Body', settings) => {
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    ...settings,
    of: [
      {
        type: 'block',
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Underline', value: 'underline' },
          ],
          annotations: [
            {
              name: 'externalLink',
              type: 'object',
              title: 'External link',
              blockEditor: {
                icon: BiLinkExternal,
              },
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule) =>
                    Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel', 'sms'],
                    }),
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean',
                  layout: 'checkbox',
                },
              ],
            },
            {
              name: 'internalLink',
              type: 'object',
              title: 'Internal link',
              blockEditor: {
                icon: BiLink,
              },
              fields: [
                {
                  name: 'reference',
                  type: 'reference',
                  title: 'Reference',
                  to: config.allTypes,
                },
              ],
            },
            {
              name: 'file',
              type: 'object',
              title: 'File',
              blockEditor: {
                icon: GoFileSymlinkFile,
              },
              fields: [
                {
                  name: 'file',
                  type: 'file',
                  title: 'File',
                  to: config.allTypes,
                },
              ],
            },
            // {
            //   name: 'link',
            //   type: 'object',
            //   title: 'Link',
            //   fields: [
            //     {
            //       name: 'href',
            //       title: 'URL',
            //       type: 'url',
            //     },
            //   ],
            // },
          ],
        },
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'Heading', value: 'h2' },
          { title: 'Subheading', value: 'h3' },
        ],
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true, // <-- make this field easily accessible
            },
          },
        ],
      },
      {
        type: 'youtube',
      },
      {
        type: 'accordion',
      },
      {
        type: 'link',
        title: 'Buttons',
      },
      {
        title: 'Table Field',
        name: 'tableField',
        type: 'object',
        fields: [
          {
            name: 'table',
            type: 'table',
          },
        ],
      },
      {
        type: 'testimonial04',
      },
    ],
  }
}

export { basicTextEditor, fullTextEditor }
