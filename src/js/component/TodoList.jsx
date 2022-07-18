import React,{ useState } from "react"

import Form from "./Form.jsx"
import TodoList2 from "./TodoList2.jsx";

function TodoList() { // iniciamos nuestra funcion lista!
  const [todos , setTodos]= useState([]); // con sus 2 parametros 

  const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){ // no es igual a todo.text o es un objeto RegExp
     return 
    }
    const newTodos = [todo, ...todos] // creamos uan constante con 2 parametros
    setTodos(newTodos) // actualizamos el valor settodos por el valor que tenga newtodos
  }

// removemos el elemento creado 
const removeTodo = id =>{
  const removeArr=[...todos].filter(todo => todo.id !== id)
  setTodos(removeArr)
}

// agregamos el elmento creado 
/* const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id ){
      todo.isComplete = !todo.isComplete
    }
    return todo;
  });
  setTodos(updatedTodos);
} */

  
  return (
  <div>
    <p className="titulo">todo list</p>
    <Form onSubmit={addTodo}/>
    <TodoList2 todos={todos}
    /* completeTodo={completeTod} */
    removeTodo={removeTodo}/> 
    
    </div>
  )
}

export default TodoList
