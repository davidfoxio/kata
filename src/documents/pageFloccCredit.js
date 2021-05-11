import {linkText} from 'part:@weflocc/kata/partials/links'
import {hiddenTitle} from 'part:@weflocc/kata/partials/meta'

export default {
  type: 'document',
  name: 'pageFloccCredit',
  title: 'Flocc Credit',
  __experimental_actions: ['update', 'publish'],
  initialValue: {
    title: 'Flocc Credit',
    linkText: 'Digital Marketing by flocc',
    url: 'https://flocc.co'
  },
  fields: [
    hiddenTitle,
    linkText,
    {
      type: 'url',
      name: 'url',
      title: 'URL'
    }
  ]
}
