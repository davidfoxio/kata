const links = {
  name: 'links',
  title: 'Links',
  type: 'array',
  validation: Rule => Rule.max(2).warning('The maximum number of CTA links on this slice is 2'),
  editModal: 'popover',
  of: [
    {type: 'internalLink'},
    {type: 'fileLink'},
    {type: 'externalLink'}
  ]
}

const linkText = {
  type: 'string',
  name: 'linkText',
  title: 'Link text'
}

const linkStyle = {
  title: 'Link style',
  name: 'linkStyle',
  type: 'string',
  options: {
    list: [
      {title: 'Primary CTA', value: 'btn-primary'},
      {title: 'Secondary CTA', value: 'btn-secondary'},
      {title: 'Tertiary CTA', value: 'btn-tertiary'},
      {title: 'None', value: 'btn-plain'}
    ],
    layout: 'radio'
  }
}

export {linkText, linkStyle, links}
