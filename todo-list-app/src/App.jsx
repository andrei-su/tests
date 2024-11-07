import { useState } from 'react'
import Todo from './components/Todo'

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const handleClick = (e, fromPrompt) => {
    console.log(fromPrompt)
    const newTodo = {
      key: Math.random().toString(36).substr(2, 9),
      value: fromPrompt ? prompt('Enter a new todo') : todoInput,
    }

    if (newTodo.value) {
      setTodos([...todos, newTodo])
      setTodoInput('')
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        justifyItems: 'center',
      }}
    >
      <h1>Todo List App</h1>
      <div style={{ justifyItems: 'center', display: 'grid', gap: '1rem' }}>
        <button style={{}} onClick={(e) => handleClick(e, true)}>
          Add from prompt
        </button>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <input
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </div>
        <div style={{ width: '100%' }}>
          {todos.map((todo) => (
            <Todo key={todo.key} value={todo.value} />
          ))}
        </div>
      </div>
    </div>
  )
}
