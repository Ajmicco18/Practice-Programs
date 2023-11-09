import { useState } from "react"
import ListItem from "./ListItem"

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        //Sets the value of the todo
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        //Prevents page from resetting
        event.preventDefault()

        //Creates a temporary array = to todoList array
        let tempList = todoList

        //Adds todo to the temporary array
        tempList.push(todo)

        //Sets the todo list 
        setTodoList(tempList)
        console.log(todoList)
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
            {todoList.map((item) => (
                <ListItem key={item} name={item}></ListItem>
            ))}
        </div>
    )
}