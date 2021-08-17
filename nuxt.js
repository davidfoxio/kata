import { join } from 'path'

export default function () {
  console.log('Nuxt js called within @weflocc/kata')
  const ourDirs = [
    './components/articles',
    './components/articles/results',
    './components/articles/tease',
    './components/slices',
    './components/slices/article-block',
    './components/slices/call-to-action',
    './components/slices/contact',
    './components/slices/feature',
    './components/slices/hero',
    './components/slices/portfolio',
    './components/slices/statistics',
    './components/slices/team',
    './components/slices/testimonial',
    './components/slices/text',
    './components/utilities',
    // './components/utilities/serializers', // not actually needed, directly imported in SanityEmbedContent
  ]

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    ourDirs.forEach((dir) => {
      dirs.push({
        path: join(__dirname, dir),
      })
    })
  })

  // const myPlugins = ['./plugins/filters.js', './plugins/globalMixin.js']

  // this.nuxt.hook('plugins', (plugins) => {
  //   // Add plugins to the list
  //   myPlugins.forEach((item) => {
  //     plugins.push(item)
  //   })
  // })

  this.nuxt.hook('ready', async (nuxt) => {
    console.log('Nuxt is ready')
  })

  this.nuxt.hook('plugins', (plugins) => {
    plugins.push('./plugins/globalMixin.js')
  })
}
