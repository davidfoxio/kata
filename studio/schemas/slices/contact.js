import {title, location, text, email, website, address, telephone} from './contactFields'
import {defaultOptions} from '../schemas/partials/defaults'

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

export {contact02}
