import {testimonials, quote, cite, testimonialsImage} from './testimonialFields'
import {defaultOptions} from '../partials/defaults'
import {links} from '../partials/links'

const testimonial02 = {
  name: 'testimonial02',
  type: 'object',
  title: 'Testimonial #2',
  options: defaultOptions,
  fields: [testimonialsImage]
}

const testimonial04 = {
  name: 'testimonial04',
  type: 'object',
  title: 'Testimonial #4',
  options: defaultOptions,
  fields: [testimonials]
}

const testimonial05 = {
  name: 'testimonial05',
  type: 'object',
  title: 'Testimonial #5',
  options: defaultOptions,
  fields: [quote, cite, links()]
}

const testimonial04Selector = {
  name: 'testimonial04Selector',
  type: 'object',
  title: 'Testimonials',
  description: 'You can manually select one or more testimonials, or else choose a category of testimionials to display.',
  options: defaultOptions,
  fields: [
    {
      name: 'selected',
      type: 'array',
      title: 'Testimonial(s)',
      of: [
        {
          type: 'reference',
          to: {type: 'testimonial'}
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Category',
      of: [
        {
          type: 'reference',
          to: {type: 'testimonialType'}
        }
      ]
    }]
}

export {testimonial02, testimonial04, testimonial04Selector, testimonial05}
