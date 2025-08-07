import { useState } from 'react'

// Componente usado para criar um formulário
const TodoForm = ({ addTodo }) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    //adicionar todo
    addTodo(value, category)
    //limpar os campos
    setValue("")
    setCategory("") 
  }

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={ handelSubmit }>
        <input 
          type="text"
          placeholder="Digite o título"
          value = { value }
          onChange={ (e) => setValue(e.target.value)} 
        />
        <select value={ category } className='todo__select' onChange={ (e) => setCategory(e.target.value) }>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button className='todo__form--submit' type="submit">Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
