import {
  testimonials,
  quote,
  cite,
  testimonialsImage,
} from './testimonialFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { links } from 'part:@weflocc/kata/partials/links'

const testimonial02 = {
  name: 'testimonial02',
  type: 'object',
  title: 'Testimonial #2',
  options: defaultOptions,
  fields: [testimonialsImage],
}

const testimonial04 = {
  name: 'testimonial04',
  type: 'object',
  title: 'Testimonial #4',
  options: defaultOptions,
  fields: [testimonials],
}

const testimonial05 = {
  name: 'testimonial05',
  type: 'object',
  title: 'Testimonial #5',
  options: defaultOptions,
  fields: [quote, cite, links()],
}

export { testimonial02, testimonial04, testimonial05 }
