import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

import './App.css'
import Filter from './components/Filter'


function App() {

  // lógica parecida com getters and setters
  // todos -> recuperar/consultar os dados usando useState.
  // set -> adicionar os dados usando useState.
  const [todos, setTodos] = useState([])

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  }

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category, 
        isCompleted: false,
      },
    ];

    setTodos(newTodos)
  }

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

  return (
    <div className='app'>
        <h1>Lista de Tarefas Diárias</h1>
        
        <hr />

        {/* Fazendo um formulário para a Todo List*/}
        < TodoForm addTodo= { addTodo } />
        
        <hr />

        <Search search={search} setSearch={setSearch}/>

        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

        <hr />

        <div className='todo-list'>
          <h2>Lista de tarefas: </h2>
          {
            /*Usando o map para fazer uma iteração
            por cada elemento armazenado no todos (estilo um for normal)*/
          }
          {todos
          .filter((todo) => 
            filter === "All" 
            ? true 
            : filter === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted
          )
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            //Parte usada para ordenação do código 
            sort === "Asc" 
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
          )
          .map((todo) => ( 
            // Usando um componente que vai ficar 
            // mostrando as descrições  das tarefas.
            <Todo key={todo.id} todo={ todo } removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
    </div>
  )
}

export default App