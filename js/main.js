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
	},
	methods: {
		removeTodo(index) {
			this.todos.splice(index, 1);
			console.log(index);
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
		},
	},
});
