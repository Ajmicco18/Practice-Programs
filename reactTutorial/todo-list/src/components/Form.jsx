import styles from "../style.module.css"

const Form = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //... gets the elements from the old array
        //This function creates a new array from the old elements
        setTodoList([...todoList, todo])
        console.log(todoList)
    }
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button type="submit" className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form