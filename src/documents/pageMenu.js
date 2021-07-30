import { hiddenTitle } from '../partials/meta'
import config from 'config:@weflocc/kata'
import { RiMenuAddLine } from 'react-icons/ri'

export default {
  type: 'document',
  name: 'pageMenu',
  title: 'Menu',
  initialValue: {
    title: 'Menu',
  },
  fields: [
    hiddenTitle,
    {
      title: 'Menu',
      type: 'array',
      name: 'menu',
      of: [
        {
          type: 'object',
          title: 'Menu Item',
          name: 'menuItem',
          fields: [
            {
              title: 'No link, just a title',
              name: 'noLinkJustTitle',
              description:
                'Use this instead of choosing a link, to make a menu item that is just a parent, not a link to something.',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: config.allTypes,
            },
            {
              title: 'Children',
              name: 'children',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Menu Item',
                  name: 'menu',
                  fields: [
                    {
                      title: 'Custom Title (optional)',
                      name: 'customTitle',
                      type: 'string',
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'reference',
                      to: config.allTypes,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'customTitle',
                      link: 'link.title',
                    },
                    prepare(selection) {
                      const { title, link } = selection
                      return {
                        title: title || link,
                        media: RiMenuAddLine,
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'link.title',
              noLinkJustTitle: 'noLinkJustTitle',
            },
            prepare(selection) {
              const { title, noLinkJustTitle } = selection
              return {
                title: title || noLinkJustTitle || 'Unknown',
                media: RiMenuAddLine,
              }
            },
          },
        },
      ],
    },
  ],
}
