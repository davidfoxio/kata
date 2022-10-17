import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { links } from 'part:@weflocc/kata/partials/links'

const feedSelector = ({
  field,
  title,
  selectedTitle,
  articleType,
  categoryTitle,
  categoryType,
  description,
  sliceTitle,
  noShowAll,
  hasLinks,
  filter,
  filterParams,
  hidden,
}) => {
  // Defaults
  selectedTitle = selectedTitle || 'Choose manually'
  categoryTitle = categoryTitle || 'Or, Select a category to show automatically'
  description =
    description ||
    'You can manually select one or more items, or else choose a category to display.'
  sliceTitle = sliceTitle || false
  noShowAll = noShowAll || false
  filter = filter || false
  filterParams = filterParams || false
  hidden = hidden || false
  hasLinks = hasLinks || false

  let options = {}
  if (filter) {
    options.filter = filter
  }
  if (filterParams) {
    options.filter = filterParams
  }

  const selected = {
    name: 'selected',
    type: 'array',
    title: selectedTitle,
    of: [
      {
        type: 'reference',
        to: [{ type: articleType }],
        options: options,
      },
    ],
  }

  const categories = {
    name: 'categories',
    type: 'array',
    title: categoryTitle,
    of: [
      {
        type: 'reference',
        to: [{ type: categoryType }],
      },
    ],
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
    type: 'boolean',
  }

  const fields = []

  if (sliceTitle) {
    const title = {
      name: 'title',
      title: 'Title',
      type: 'string',
    }
    fields.push(title)
  }

  if (selected) {
    fields.push(selected)
  }

  if (categoryType) {
    fields.push(categories)
  } else if (!noShowAll) {
    fields.push(show)
  }

  if (hasLinks) {
    fields.push(links())
  }

  return {
    name: field,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: defaultOptions,
    hidden: hidden,
  }
}

export { feedSelector }
