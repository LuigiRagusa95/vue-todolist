Vue.config.ignoredElements = [/^ion-/];

new Vue({
	el: "#root",
	data: {
		todos: [
			{ text: "Creare una web app", completed: false },
			{ text: "Fare la spesa", completed: true },
			{ text: "Imparare Vue.js", completed: false },
		],
		inputValue: "",
		emptyState: false,
	},
	methods: {
		removeTodo(index) {
			this.todos.splice(index, 1);
			this.emptyList();
		},
		clearInput() {
			this.inputValue = "";
		},
		addFocus() {
			this.$refs.inputField.focus();
		},
		addTodo() {
			if (this.inputValue.trim() !== "") this.todos.push({ text: this.inputValue, completed: false });
			this.emptyList();
			this.clearInput();
		},
		emptyList() {
			this.todos.length > 0 ? (this.emptyState = false) : (this.emptyState = true);
		},
	},
});
