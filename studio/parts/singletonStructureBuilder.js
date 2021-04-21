// import S from '@sanity/desk-tool/structure-builder'
import {RiPagesLine} from 'react-icons/ri'
import PreviewIFrame from './previewIFrame'

function singletonStructureBuilder (S, kataConfig, name, {
  icon = RiPagesLine,
  schemaType = 'page' + name.replace(' ', ''),
  documentId = 'page' + name.replace(' ', ''),
  showPreview = true
} = {}) {
  let preview = showPreview ? PreviewIFrame(kataConfig) : ''

  return S.listItem()
    .title(name)
    .icon(icon)
    .child(
      S.document()
        .schemaType(`${schemaType}`)
        .documentId(`${documentId}`)
        .views([S.view.form(), preview])
    )
}

export {singletonStructureBuilder}
