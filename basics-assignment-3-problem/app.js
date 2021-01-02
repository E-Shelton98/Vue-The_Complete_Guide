app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  watch: {
    displayResult() {
      const that = this
      setTimeout(function () {
        that.number = 0
      }, 5000)
    },
  },
  computed: {
    displayResult() {
      if (this.number < 37) {
        return 'Not there yet'
      } else if (this.number === 37) {
        return this.number
      } else {
        return 'Too much!'
      }
    },
  },
  methods: {
    incrementFive() {
      this.number += 5
    },
    incrementOne() {
      this.number += 1
    },
  },
})

app.mount('#assignment')
