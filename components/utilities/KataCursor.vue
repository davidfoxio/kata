<template>
  <div id="cursor" ref="cursor" />
</template>

<script>
export default {
  watch: {
    $route: function (newVal, oldVal) {
      let context = this
      setTimeout(() => {
        // set timeout to allow new route to mount before calling set link
        // TODO: find a way to detect when mount has finished for another route?
        context.setLinks()
      }, 500)
    },
  },
  mounted() {
    let context = this
    this.$nextTick(() => {
      context.setup()
      context.setLinks()
    })
  },
  methods: {
    isTouchDevice() {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    },
    setup() {
      if (process.client && !this.isTouchDevice()) {
        let cursor = this.$refs.cursor

        document.body.style.cursor = 'none'

        document.addEventListener('mousemove', function (e) {
          if (cursor) {
            cursor.style.top = e.pageY + 'px'
            cursor.style.left = e.pageX + 'px'
          }
        })
      } else {
        let cursor = this.$refs.cursor
        cursor.style.display = 'none'
      }
    },
    setLinks() {
      if (process.client && !this.isTouchDevice()) {
        let cursor = this.$refs.cursor
        let links = document.querySelectorAll('a, button, input[type=submit]')
        for (let index = 0; index < links.length; index++) {
          const element = links[index]
          element.style.cursor = 'none'
          element.addEventListener('mouseover', function () {
            cursor.classList.add('hover')
          })
          element.addEventListener('mouseout', function () {
            cursor.classList.remove('hover')
          })
          element.addEventListener('click', function () {
            cursor.classList.remove('hover')
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#cursor {
  background: black;
  z-index: 99999;
  pointer-events: none;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: normal;
  transition: transform 0.2s, background-color 0.2s, width 0.3s, height 0.3s;
  border: 3px solid black;

  &.hover {
    width: 30px;
    height: 30px;
    background: none;
  }
}
</style>
