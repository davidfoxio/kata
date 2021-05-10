import {links} from 'part:kata-sanity/partials/links'
import {defaultOptions} from 'part:kata-sanity/partials/defaults'
import {title, text} from './ctaFields'

const cta01 = {
  name: 'cta01',
  type: 'object',
  title: 'Call To Action #01',
  options: defaultOptions,
  fields: [title, text, links()]
}

const cta08 = {
  name: 'cta08',
  type: 'object',
  title: 'Call To Action #08',
  options: defaultOptions,
  fields: [links()]
}

export {cta01, cta08}
