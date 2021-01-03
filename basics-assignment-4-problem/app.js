app = Vue.createApp({
  data() {
    return {
      className: '',
      inlineClassName: '',
      isVisible: true,
    }
  },
  watch: {},
  computed: {
    determineClass() {
      if (this.className === 'user1') {
        return this.className
      } else if (this.className === 'user2') {
        return this.className
      }
    },
    tagDisplay() {
      if (this.isVisible === true) {
        return ' visible'
      } else {
        return ' hidden'
      }
    },
  },
  methods: {
    setIsVisible() {
      this.isVisible = !this.isVisible
    },
  },
})

app.mount('#assignment')
