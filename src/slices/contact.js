import {
  title,
  location,
  text,
  email,
  website,
  websiteText,
  address,
  telephone,
  thanks,
  openingTimes,
} from './contactFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const contact01 = {
  name: 'contact01',
  type: 'object',
  title: 'Contact #1',
  options: defaultOptions,
  fields: [title, text, address, email, telephone, thanks],
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
    openingTimes,
    email,
    // website,
    // websiteText,
    telephone,
  ],
}

export { contact01, contact02 }
