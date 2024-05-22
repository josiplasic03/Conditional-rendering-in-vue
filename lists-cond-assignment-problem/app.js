const application = Vue.createApp({
data() {
    return {
        tasks: [],
        inputValue: '',
        taskListVisible: true
    }
},

methods: {
    addTask() {
        this.tasks.push(this.inputValue);
    },

    taskListButton() {
        this.taskListVisible = !this.taskListVisible;
    }
},


computed: {
    buttonCaption() {
        return this.taskListVisible ? 'Hide' : 'Show'
    }
}
});

application.mount("#assignment");