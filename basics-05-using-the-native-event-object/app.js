const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    }
  },
  //We use computed because you want to avoid using a method dynamically within your HTML. Vue does not know what is used inside of the method, therefore whenever a pice of data (such as counter in this case) is updated, it will also automatically rerun any methods left within the HTML template.
  //A computed property LOOKS like a Method, but is used like a data property, therefore is should follow the nomenclature of a variable, not a method (ie. fullName() NOT outputFullName())
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  //A watcher method will re-execute whenever a data or computed property changes, a watcher method automatically gets the last value of the watched property
  watch: {
    counter(value) {
      const that = this
      if (value > 50) {
        setTimeout(function () {
          that.counter = 0
        }, 2000)
      }
    }
    /*name(value) {
      if (value === '') {
        this.fullName = ''
      } else {
        this.fullName = value + ' ' + this.lastName
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = ''
      } else {
        this.fullName = this.name + ' ' + value
      }
    }*/
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return ''
      }
      return this.name + ' ' + 'Shelton'
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
      // this.counter--;
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    },
  },
})

app.mount('#events')
