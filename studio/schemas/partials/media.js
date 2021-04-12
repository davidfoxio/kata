const media = {
  name: 'media',
  title: 'Media',
  type: 'array',
  editModal: 'popover',
  of: [
    {
      // needs to be top level, as opposed to of type 'standardImage' for preview to work
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
    // {type: 'video'},
  ]
}

export {media}
