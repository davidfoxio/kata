import {
  title,
  list
} from './timelineFields'
import { links } from 'part:@weflocc/kata/partials/links'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const timeline01 = {
  name: 'timeline01',
  type: 'object',
  title: 'Timeline #1',
  options: defaultOptions,
  fields: [title, list],
}

export { timeline01 }
