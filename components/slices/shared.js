const title = {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}

const superHeading = {
  props: {
    superHeading: {
      type: String,
      default: '',
    },
  },
}

const text = {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}

const textBody = {
  props: {
    textBody: {
      type: Array,
      default: null,
    },
  },
}

const links = {
  props: {
    links: {
      type: Array,
      default: null,
    },
  },
}

const media = {
  props: {
    media: {
      type: Array,
      default: null,
    },
  },
}

const image = {
  props: {
    image: {
      type: Object,
      default: null,
    },
  },
}

const description = {
  props: {
    description: {
      type: String,
      default: '',
    },
  },
}

export {title, superHeading, text, textBody, description, links, media, image}
