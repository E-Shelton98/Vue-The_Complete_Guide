const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    }
  },
  methods: {
    increaseCounter(num) {
      this.counter += num
    },
    decreaseCounter(num) {
      this.counter -= num
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted!')
    },
  },
})

app.mount('#events')
