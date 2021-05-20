import {hiddenTitle} from '../partials/meta'
import config from 'config:@weflocc/kata'
import {RiMenuAddLine} from 'react-icons/ri'

export default {
  type: 'document',
  name: 'pageMenu',
  title: 'Menu',
  initialValue: {
    title: 'Menu'
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
              description: 'Use this instead of chosing a link, to make a menu item that is just a parent, not a link to something.',
              type: 'string'
            },
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: config.allTypes
            },
            {
              title: 'Children',
              name: 'children',
              type: 'array',
              of: [
                {
                  title: 'Menu',
                  name: 'menu',
                  type: 'reference',
                  to: config.allTypes
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'link.title',
              noLinkJustTitle: 'noLinkJustTitle'
            },
            prepare (selection) {
              const {title, noLinkJustTitle} = selection
              return {
                title: title || noLinkJustTitle || 'unknown',
                media: RiMenuAddLine
              }
            }
          }
        }
      ]
    }
  ]
}
