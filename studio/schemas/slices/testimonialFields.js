import {standardImage} from '../schemas/partials/standardImage'
import {BsFillChatQuoteFill} from 'react-icons/bs'

const title = {
  name: 'title',
  type: 'string',
  title: 'Title'
}

const testimonials = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'job',
          title: 'Job',
          type: 'string'
        }
      ],
      preview: {
        select: {
          title: 'quote',
          subtitle: 'name'
        },
        prepare (selection) {
          const {title, subtitle} = selection
          let showEllipsis = true
          if (title.length < 50) {
            showEllipsis = false
          }
          const heading = title.toString().slice(0, 50)
          return {
            title: `${heading}${showEllipsis ? '...' : ''}`,
            subtitle: subtitle,
            media: BsFillChatQuoteFill
          }
        }
      }
    }
  ]
}

const testimonialsImage = {
  name: 'testimonialsImage',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage,
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'job',
          title: 'Job',
          type: 'string'
        },
        {
          name: 'links',
          type: 'link',
          title: 'Buttons'
        }
      ],
      preview: {
        select: {
          title: 'quote',
          subtitle: 'name'
        },
        prepare (selection) {
          const {title, subtitle} = selection
          let showEllipsis = true
          if (title.length < 50) {
            showEllipsis = false
          }
          const heading = title.toString().slice(0, 50)
          return {
            title: `${heading}${showEllipsis ? '...' : ''}`,
            subtitle: subtitle,
            media: BsFillChatQuoteFill
          }
        }
      }
    }
  ]
}

const quote = {
  name: 'quote',
  title: 'Quote',
  type: 'text',
  rows: 3
}

const cite = {
  name: 'cite',
  title: 'Cite',
  type: 'string'
}

export {title, testimonials, testimonialsImage, quote, cite}
