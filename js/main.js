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
	mounted() {
		this.addTodo();
	},
	methods: {
		removeTodo(index) {
			this.uniqueValue.splice(index, 1);
			this.checkEmptyList();
		},
		clearInput() {
			this.inputValue = "";
		},
		addFocus() {
			this.$refs.inputField.focus();
		},
		addTodo() {
			if (this.inputValue.trim() !== "") this.todos.push({ id: this.todos.length + 1, text: this.inputValue, completed: false });
			this.removeDuplicate();
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
