import {title, text, superHeading} from './heroFields'
import {links} from 'part:kata-sanity/partials/links'
import {media} from 'part:kata-sanity/partials/media'
import {defaultOptions} from 'part:kata-sanity/partials/defaults'

const hero01 = {
  name: 'hero01',
  type: 'object',
  title: 'Hero #1',
  options: defaultOptions,
  fields: [
    media(),
    superHeading,
    title,
    text,
    links()
  ]
}

const hero05 = {
  name: 'hero05',
  type: 'object',
  title: 'Hero #5',
  options: defaultOptions,
  fields: [
    media(),
    superHeading,
    title,
    text,
    links()
  ]
}

const hero06 = {
  name: 'hero06',
  type: 'object',
  title: 'Hero #6',
  options: defaultOptions,
  fields: [
    media(),
    title,
    text,
    links()
  ]
}

const hero09 = {
  name: 'hero09',
  type: 'object',
  title: 'Hero #9',
  options: defaultOptions,
  fields: [
    media(),
    superHeading,
    title,
    text,
    links()
  ]
}

const hero10 = {
  name: 'hero10',
  type: 'object',
  title: 'Hero #10',
  options: defaultOptions,
  fields: [
    media(),
    superHeading,
    title,
    text,
    links()
  ]
}

export {hero01, hero05, hero06, hero09, hero10}
