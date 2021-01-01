app = Vue.createApp({
  data() {
    return {
      alertMessage: 'Alert! Alert!',
      userInput: '',
      confirmedInput: '',
    }
  },
  methods: {
    showAlert() {
      alert(this.alertMessage)
    },
    getInput(event) {
      this.userInput = event.target.value
    },
    confirmInput() {
      this.confirmedInput = this.userInput
    },
  },
})

app.mount('#assignment')
