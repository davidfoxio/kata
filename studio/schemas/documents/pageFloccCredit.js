import {hiddenTitle} from '../schemas/partials/meta'

export default {
  type: 'document',
  name: 'pageFloccCredit',
  title: 'Flocc Credit',
  initialValue: {
    title: 'Flocc Credit',
    floccCredit: {
      _type: 'externalLink',
      linkText: 'Digital Marketing by flocc',
      linkStyle: 'btn-link',
      url: 'https://flocc.co'
    }
  },
  fields: [
    hiddenTitle,
    {
      type: 'externalLink',
      name: 'floccCredit'
    }
  ]
}
