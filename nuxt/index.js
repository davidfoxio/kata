import { join } from 'path'

export default function () {
  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    const ourDirs = [
      '../components/articles',
      '../components/articles/results',
      '../components/articles/tease',
      '../components/slices',
      '../components/slices/call-to-action',
      '../components/slices/feature',
      '../components/slices/hero',
      '../components/slices/portfolio',
      '../components/slices/testimonial',
      '../components/slices/text',
      '../components/utilities',
      // '../components/utilities/serializers', // not actually needed, direcly imported in SanityEmbedContent
    ]
    ourDirs.forEach( (dir) => {
      dirs.push({
        path: join(__dirname, dir)
      })
    })
  })
}