import Vue from 'vue'

if (!Vue.__globalMixin__) {
  Vue.__globalMixin__ = true
  Vue.mixin({
    methods: {
      getLink(ref) {
        const link = this.$store.getters['references/getLinkFromReference'](ref)
        return link ? link.path : '/'
      },
      // rsc(text) {
      //   //remove special characters
      //   return text ? text.replace(/\u2028/g, '') : text
      // },
    },
  })
}

Vue.directive('kata-html', {
  bind: (el, binding) => {
    let value = binding.value
    let elem = value ? value.replace(/\u2028/g, '') : ''
    el.innerHTML = elem
  },
})
