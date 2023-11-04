import { useState } from "react"


const TodoForm = ({ onSubmitForm }) => {


    const [name, setName] = useState('')


    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const todo = {
            id: Date.now(),
            name,
            isDone: false
        }
        onSubmitForm(todo)
        setName('')
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" value={name} onChange={handleNameChange} />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export { TodoForm }