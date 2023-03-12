const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            showTaskList: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask)
        },
        toggleShowTaskList() {
            this.showTaskList = !this.showTaskList
        }
    },
    computed: {
        buttonCaption() {
            return this.showTaskList ? 'Hide List' : 'Show List'
        }
    }
})

app.mount('#assignment')