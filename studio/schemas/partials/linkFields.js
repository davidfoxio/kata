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
      {title: 'Link', value: 'btn-link'}
    ],
    layout: 'radio'
  }
}

export {linkText, linkStyle}
