import { standardImage } from '../partials/image'
import { videoSrcset } from './videoSrcset'
const camelCase = require('lodash.camelcase')

const media = (name = 'Media') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    editModal: 'popover',
    of: [
      standardImage(),
      // videoSrcset(),
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
      },
    ],
    validation: (Rule) =>
      Rule.min(1).required('Please select an image or video.'),
  }
}

export { media }
