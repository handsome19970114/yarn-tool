<script>
import TodoForm from "./components/TodoForm.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
    components: {
        TodoForm,
        TodoItem,
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },
    directives: {
        focus: {
            inserted(el) {
                el && el.focus();
            },
        },
    },

    methods: {
        addTodo(todo) {
            this.todos.push({
                id: this.todos.length + 1,
                title: todo,
                completed: false,
            });
            this.saveTodos();
        },

        removeTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
            this.saveTodos();
        },

        toggleTodo(id) {
            const todo = this.todos.find((todo) => todo.id === id);
            todo.completed = !todo.completed;
            this.saveTodos();
            this.$forceUpdate();
        },

        saveTodos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        },

        renderInput() {
            const inputAttrs = {
                type: "email",
                placeholder: "Enter your email",
            };
            return (
                <input
                    {...{
                        attrs: inputAttrs,
                        on: {
                            change: () => {
                                console.log(222);
                            },
                        },
                        directives: [focus],
                    }}
                />
            );
        },
    },

    // render(h) {
    //     return (
    //         <div>
    //             <TodoForm
    //                 {...{
    //                     on: {
    //                         addTodo: this.addTodo,
    //                     },
    //                 }}
    //             ></TodoForm>
    //             <ul>
    //                 {this.todos.map((todo) => (
    //                     <TodoItem
    //                         class={{ "todo-completed": todo.completed }}
    //                         key={todo.id}
    //                         todo={todo}
    //                         onRemove={this.removeTodo}
    //                         onToggle={this.toggleTodo}
    //                     />
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // },

    render(h) {
        return h("div", [
            h("h1", "hello world"),
            h(
                "el-button",
                {
                    attrs: {
                        type: "primary",
                    },
                },
                "点击登录"
            ),
        ]);
    },
};
</script>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
    text-align: left;
}

/deep/ li {
    margin-bottom: 10px;
    padding: 5px 0;
    user-select: none;
    > span {
        margin-left: 15px;
        display: inline-block;
        min-width: 200px;
    }

    > input[type="checkbox"] {
        transform: scale(1.5);
    }

    &.todo-completed {
        > span {
            color: #409eff;
        }
    }
}
</style>