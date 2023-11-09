import { useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState("")

    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todo)
    }

    return (
        <div>
            <form>
                <input value={todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}