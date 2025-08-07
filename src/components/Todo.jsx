import React from 'react'

// Componente usado para mostras as descrições das tarefas
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
      className={`todo  ${todo.isCompleted ? "completed" : ""}`}
    >
      <div className='content'>
          <p>{todo.text}</p>
          <p className='category'><strong>Catégoria: </strong> {todo.category}</p>
      </div>

      <div className='todo__button'>
          <button className='todo__button--send' onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className='todo__button--remove' onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default Todo
