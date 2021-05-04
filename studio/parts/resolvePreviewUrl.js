export default function resolvePreviewUrl (document, kataConfig) {
  const ENV = process.env.NODE_ENV || 'development'
  const WEB_URL = kataConfig.domain.production
  const PATHS = kataConfig.paths
  const baseUrl = ENV === 'development' ? 'http://localhost:3000' : WEB_URL
  const append = '?preview=true'
  let path = ''
  let slug = ''

  if (document._type === 'pageHome' || document._type === 'pageHub') {
    return `${baseUrl}${append}`
  }

  PATHS.forEach(element => {
    if (document._type === element.type) {
      path = element.path
    }
  })

  if (document.slug) {
    slug = `/${document.slug.current}/`
  }

  const url = `${baseUrl}${path}${slug}${append}`
  console.log(url)
  return url
}
