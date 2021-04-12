import {title} from './newsFields'
import {defaultOptions} from '../schemas/partials/defaults'

const news02 = {
  name: 'news02',
  type: 'object',
  title: 'News #2',
  options: defaultOptions,
  fields: [
    title
  ]
}

const news03 = {
  name: 'news03',
  type: 'object',
  title: 'News #3',
  options: defaultOptions,
  fields: [
    title
  ]
}

export {news02, news03}
