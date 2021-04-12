import {title, list, superHeading} from './textFields'
import {basicTextEditor} from '../schemas/partials/basicTextEditor'
import {media} from '../schemas/partials/media'
import {defaultOptions} from '../schemas/partials/defaults'

const text01 = {
  name: 'text01',
  type: 'object',
  title: 'Text #1',
  options: defaultOptions,
  fields: [title, basicTextEditor]
}

const text02 = {
  name: 'text02',
  type: 'object',
  title: 'Text #2',
  options: defaultOptions,
  fields: [title, basicTextEditor]
}

const text03 = {
  name: 'text03',
  type: 'object',
  title: 'Text #3',
  options: defaultOptions,
  fields: [title, basicTextEditor]
}

const text04 = {
  name: 'text04',
  type: 'object',
  title: 'Text #4',
  options: defaultOptions,
  fields: [superHeading, title, list, media]
}

const text05 = {
  name: 'text05',
  type: 'object',
  title: 'Text #5',
  options: defaultOptions,
  fields: [title, basicTextEditor, media]
}

const text06 = {
  name: 'text06',
  type: 'object',
  title: 'Text #6',
  options: defaultOptions,
  fields: [title, basicTextEditor]
}

const text07 = {
  name: 'text07',
  type: 'object',
  title: 'Text #7',
  options: defaultOptions,
  fields: [title, list]
}

const text08 = {
  name: 'text08',
  type: 'object',
  title: 'Text #8',
  options: defaultOptions,
  fields: [title, basicTextEditor]
}

export {text01, text02, text03, text04, text05, text06, text07, text08}
