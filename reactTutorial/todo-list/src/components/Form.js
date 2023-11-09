import styles from "../style.module.css"

const Form = () => {
    return (
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form