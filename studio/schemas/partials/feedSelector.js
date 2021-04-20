import {defaultOptions} from './defaults'

const feedSelector = ({
  field, title, selectedTitle, articleType, categoryTitle, categoryType, description
}) => {
  // Defaults
  selectedTitle = selectedTitle || 'Choose manually'
  categoryTitle = categoryTitle || 'Or, Select a category to show automatically'
  description = description || 'You can manually select one or more items, or else choose a category to display.'

  const selected = {
    name: 'selected',
    type: 'array',
    title: selectedTitle,
    of: [
      {
        type: 'reference',
        to: {type: articleType}
      }
    ]
  }

  const categories = {
    name: 'categories',
    type: 'array',
    title: categoryTitle,
    of: [
      {
        type: 'reference',
        to: {type: categoryType}
      }
    ]
  }

  // const max = {
  //   name: 'max',
  //   title: 'Maximum number of articles to display',
  //   type: 'number',
  //   validation: Rule => Rule.integer().positive().min(1)
  // }

  const show = {
    name: 'show',
    title: `Display all ${articleType} articles?`,
    type: 'boolean'
  }

  const fields = [selected]

  if (categoryType) {
    fields.push(categories)
  } else {
    fields.push(show)
  }

  return {
    name: field,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: defaultOptions
  }
}

export {feedSelector}
