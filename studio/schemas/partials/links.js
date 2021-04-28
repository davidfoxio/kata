// let allTypes = [{type: 'page'}]
// try {
//   // this will load the types from the site!
//   const {allTypes} = require('../../../../../../schemas/partials/allTypes')
// }
// catch (e) {
//   // when using yarn link locally, the above path won't work. fall back to this so as not to get errors
//   console.log('could not load allTypes from site')
//   console.log(e)
//   const {allTypes} = require('../../site')
//  }

import {GiPartyFlags} from 'react-icons/gi'
import {FaHotel, FaHome} from 'react-icons/fa'
import {MdLocalHotel} from 'react-icons/md'

const allTypes = [
  {type: 'pageStaycations', icon: FaHotel},
  {type: 'pageWeddings', icon: GiPartyFlags},
  {type: 'pageHub', icon: FaHome},
  {type: 'pageCambridgeHotel', icon: MdLocalHotel}
]


const camelCase = require('lodash.camelcase')

const links = (name = 'Links') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    validation: Rule => Rule.max(2).warning('The maximum number of CTA links on this slice is 2'),
    editModal: 'popover',
    of: [
      {type: 'internalLink'},
      {type: 'fileLink'},
      {type: 'externalLink'}
    ]
  }
}

const internalLink = (name = 'internalLink') => {
  return {
      name: name,
      type: 'reference',
      to: allTypes
  }
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

export {linkText, linkStyle, links, internalLink}
