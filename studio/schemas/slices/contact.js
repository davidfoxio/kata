import {title, location, text, email, website, address, telephone} from './contactFields'
import { defaultOptions } from '../partials/defaults'

const contact01 = {
  name: 'contact01',
  type: 'object',
  title: 'Contact #1',
  options: defaultOptions,
  fields: [
    title,
    text,
    address,
    email,
    website,
    telephone,
    {
      type: 'string',
      title: 'Thank you text',
      name: 'thanksText'
    }
  ]
}

const contact02 = {
  name: 'contact02',
  type: 'object',
  title: 'Contact #2',
  options: defaultOptions,
  fields: [
    title,
    location,
    text,
    address,
    email,
    website,
    telephone
  ]
}

export {contact01, contact02}
