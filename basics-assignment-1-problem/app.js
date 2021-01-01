const app = Vue.createApp({
  data() {
    return {
      name: 'Erik Shelton',
      age: 22,
      img:
        'https://images.unsplash.com/photo-1506262613707-9eccd6c51591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    }
  },
  methods: {
    randomNumber() {
      return (Math.random())
    },
  },
})

app.mount('#assignment')
