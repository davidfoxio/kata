import Vue from 'vue'

console.log('Kata plugin is registered')
console.log(Vue.__globalMixin__)

if (!Vue.__globalMixin__ || Vue.__globalMixin__ == undefined) {
  Vue.__globalMixin__ = true
  Vue.mixin({
    methods: {
      getLink(ref) {
        const link = this.$store.getters['references/getLinkFromReference'](ref)
        return link ? link.path : '/'
      },
    },
  })
}

console.log(Vue.__globalMixin__)

Vue.directive('kata-html', {
  bind: (el, binding) => {
    let value = binding.value
    let elem = value ? value.replace(/\u2028/g, '') : ''
    el.innerHTML = elem
  },
})

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-GB'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
})

Vue.filter('formatDateTime', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-GB'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

console.log('Kata plugin end')
