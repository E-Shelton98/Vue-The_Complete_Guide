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
    determineClasses() {
      return {
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      }
    },
    tagDisplay() {
      if (isVisible === true) {
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
