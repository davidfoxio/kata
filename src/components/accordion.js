import {fullTextEditor} from 'part:@weflocc/kata/partials/textEditor'

export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [
        {
          name: 'accordionItem',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            fullTextEditor()
          ]
        }
      ]
    }
  ],
}
