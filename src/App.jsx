import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

const App = () => {

    const [todos, setTodos] = useState([])

    const addTodoInList = (todo) => {
        setTodos((prevState) => [...prevState, todo])
    }

    return <div>
        <TodoForm onSubmitForm={addTodoInList} />
        <TodoList todos={todos} />
    </div>
}

export default App