import Todo from "./Todo"

const TodoList = ({ todoList }) => {
    return (<div>{todoList.map((todoItem) => (
        <Todo todoItem={todoItem}></Todo>
    ))}</div>)
}

export default TodoList