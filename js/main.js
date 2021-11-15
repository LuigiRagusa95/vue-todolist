Vue.config.ignoredElements = [/^ion-/];

new Vue({
	el: "#root",
	data: {
		todos: [
			{ id: 0, text: "Creare una web app", completed: false },
			{ id: 1, text: "Fare la spesa", completed: false },
			{ id: 2, text: "Imparare Vue.js", completed: false },
		],
		inputValue: "",
		uniqueValue: [],
		emptyState: false,
	},
	methods: {
		removeTodo(index) {
			this.todos.splice(index, 1);
			this.checkEmptyList();
		},
		clearInput() {
			this.inputValue = "";
		},
		addFocus() {
			this.$refs.inputField.focus();
		},
		addTodo() {
			const searchInArray = (array, value, key) => array.filter((data) => JSON.stringify(data[key]).toLowerCase() === JSON.stringify(value.toLowerCase()));
			if (this.inputValue.trim() !== "" && !searchInArray(this.todos, this.inputValue, "text").length > 0) {
				this.todos.push({ id: this.todos.length + 1, text: this.inputValue, completed: false });
			}
			this.clearInput();
			this.checkEmptyList();
		},
		removeDuplicate() {
			this.uniqueValue = this.todos.filter((v, i, a) => a.findIndex((t) => t.text === v.text) === i);
		},
		checkEmptyList() {
			this.todos.length > 0 ? (this.emptyState = false) : (this.emptyState = true);
		},
	},
});
