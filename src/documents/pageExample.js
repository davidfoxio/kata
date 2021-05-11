
import {metaField, metaFieldset, hiddenTitle, hiddenSlug} from 'part:@weflocc/kata/partials/meta'

export default {
  type: 'document',
  name: 'pageExample',
  title: 'Example',
  fieldsets: [metaFieldset],
  __experimental_actions: ['update', 'publish'],
  fields: [
    metaField,
    hiddenTitle,
    hiddenSlug,
    // {
    //   name: 'hero01',
    //   type: 'hero01'
    // },
    // {
    //   name: 'hero05',
    //   type: 'hero05'
    // },
    // {
    //   name: 'feature01',
    //   type: 'feature01'
    // },
    // {
    //   name: 'feature02',
    //   type: 'feature02'
    // },
    // {
    //   name: 'feature04',
    //   type: 'feature04'
    // },
    // {
    //   name: 'feature05',
    //   type: 'feature05'
    // },
    // {
    //   name: 'feature06',
    //   type: 'feature06'
    // },
    // {
    //   name: 'portfolio04',
    //   type: 'portfolio04'
    // },
    // {
    //   name: 'portfolio05',
    //   type: 'portfolio05'
    // },
    // {
    //   name: 'testimonial04',
    //   type: 'testimonial04'
    // },
    {
      name: 'feature01',
      type: 'feature01'
    },
    {
      name: 'feature02',
      type: 'feature02'
    },
    {
      name: 'feature03',
      type: 'feature03'
    },
    {
      name: 'feature04',
      type: 'feature04'
    },
    {
      name: 'feature05',
      type: 'feature05'
    },
    {
      name: 'feature06',
      type: 'feature06'
    },
    {
      name: 'feature07',
      type: 'feature07'
    },
    {
      name: 'feature08',
      type: 'feature08'
    },
    {
      name: 'feature09',
      type: 'feature09'
    },
    {
      name: 'feature10',
      type: 'feature10'
    },
    {
      name: 'feature11',
      type: 'feature11'
    }
    // {
    //   name: 'text01',
    //   type: 'text01'
    // },
    // {
    //   name: 'text02',
    //   type: 'text02'
    // },
    // {
    //   name: 'text03',
    //   type: 'text03'
    // },
    // {
    //   name: 'text04',
    //   type: 'text04'
    // },
    // {
    //   name: 'text05',
    //   type: 'text05'
    // },
    // {
    //   name: 'text06',
    //   type: 'text06'
    // },
    // {
    //   name: 'text07',
    //   type: 'text07'
    // }
  ]
}
