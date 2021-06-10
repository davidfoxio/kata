// nb, this uses the fields from featureFields.

import { features } from './featureFields'
// import {title, textBody, shortFeatures, features, text, featureTabs, featureImageTabs, locations} from './featureFields'
// import {standardImage} from 'part:@weflocc/kata/partials/image'
// import {links} from 'part:@weflocc/kata/partials/links'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const featureList01 = {
  name: 'featureList01',
  type: 'object',
  title: 'Feature List #1',
  options: defaultOptions,
  // fields: [title, features, links()]
  fields: [features],
}

// const feature05 = {
//   name: 'feature05',
//   type: 'object',
//   title: 'Feature #5',
//   options: defaultOptions,
//   fields: [title, features, links()]
// }

// const feature07 = {
//   name: 'feature07',
//   type: 'object',
//   title: 'Feature #7',
//   options: defaultOptions,
//   fields: [title, features, links()]
// }
export { featureList01 }
