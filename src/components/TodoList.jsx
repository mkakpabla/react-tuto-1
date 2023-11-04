

const TodoList = ({ todos }) => {

    return (
        <>
            {
                todos.length > 0 ? (
                    <ul>
                        { todos.map(todo => <TodoListItem key={todo.id} todo={todo} />) }
                    </ul>
                ) : <p>Aucune tâche dans la liste</p>
            }
        </>
    )
}


const TodoListItem = ({ todo }) => {

    return <li>
        { todo.name }
    </li>
}

export { TodoList }