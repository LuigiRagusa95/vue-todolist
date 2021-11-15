Vue.config.ignoredElements = [/^ion-/];

new Vue({
	el: "#root",
	data: {
		todos: [
			{ id: 0, text: "Creare una web app", completed: false },
			{ id: 1, text: "Fare la spesa", completed: true },
			{ id: 2, text: "Imparare Vue.js", completed: false },
		],
		inputValue: "",
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
			if (this.inputValue.trim() !== "") this.todos.push({ text: this.inputValue, completed: false });
			this.clearInput();
			this.checkEmptyList();
		},
		checkEmptyList() {
			this.todos.length > 0 ? (this.emptyState = false) : (this.emptyState = true);
		},
	},
});
